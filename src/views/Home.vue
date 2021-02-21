<template>
  <div class="home">
    <HeaderHome @input="handleInput" />

    <section class="main-content">
      <SearchHeader
        @clickedFav="handleClickedFav"
        :total-heroes="heroes.length"
        :only-fav-heroes="onlyFavHeroes"
      />

      <SearchContainer
        @toggleFavorite="handleToggleFavorite"
        :is-loading="isLoading"
        :heroes="heroes"
      />

      <div class="paginate">
        <SearchPaginate
          @clicked-page="paginate"
          :totalPages="totalPages"
          :activePage="activePage"
        />
      </div>
    </section>
  </div>
</template>

<script>
import HeaderHome from '@/components/HeaderHome.vue';
import SearchHeader from '@/components/SearchHeader.vue';
import SearchContainer from '@/components/SearchContainer.vue';
import SearchPaginate from '@/components/SearchPaginate.vue';
import marvelService from '@/services/marvel';
import localstorageUtil from '@/utils/localstorage';

const favHeroesLS = localstorageUtil('MARVEL_HEROES_ID', []);

export default {
  name: 'Home',
  data() {
    return {
      isLoading: false,
      term: '',
      heroes: [],
      activePage: parseInt(this.$route.query.page, 10) || 1,
      charactersTotal: 0,
      charactersPerPage: 20,
      onlyFavHeroes: false,
    };
  },
  components: {
    HeaderHome,
    SearchHeader,
    SearchContainer,
    SearchPaginate,
  },
  watch: {
    term(newValue) {
      // TODO: move to function
      setTimeout(() => {
        if (newValue === '') {
          this.getCharacters();
          return;
        }
        if (this.term === newValue) {
          this.getCharactersByName();
        }
      }, 400);
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.charactersTotal / this.charactersPerPage);
    },
  },
  methods: {
    handleToggleFavorite({ id: idPayload }) {
      if (this.onlyFavHeroes) {
        this.heroes = this.heroes.filter(({ id }) => id !== idPayload);
      }
    },
    fetchFavHeroes(promises) {
      const favHeroes = [];

      return Promise.all(promises)
        .then((values) => {
          values.forEach(({ data }) => {
            favHeroes.push(data.data.results[0]);
          });

          return Promise.resolve(favHeroes);
        });
    },
    createFavHeroesPromises(heroesIds) {
      const promises = [];

      heroesIds.forEach((id) => {
        promises.push(marvelService.getCharacterById(id));
      });

      return promises;
    },
    getFavHeroes() {
      this.isLoading = true;
      const favsIds = favHeroesLS.get();

      const heroesAlreadyFetched = this.heroes.filter(({ id }) => favsIds.includes(id));
      const idsHeroesAlreadyFetched = heroesAlreadyFetched.map(({ id }) => id);
      const idsHeroesToFetch = favsIds.filter((id) => !idsHeroesAlreadyFetched.includes(id));
      const promises = this.createFavHeroesPromises(idsHeroesToFetch);

      this.fetchFavHeroes(promises)
        .then((heroesData) => {
          this.heroes = [
            ...heroesAlreadyFetched,
            ...this.parseHeroesData(heroesData),
          ];
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    handleClickedFav() {
      this.onlyFavHeroes = !this.onlyFavHeroes;
      if (this.onlyFavHeroes) {
        this.getFavHeroes();
      } else {
        this.getCharacters(this.getParams());
      }
    },
    getParams() {
      return {
        limit: this.charactersPerPage,
        offset: this.charactersPerPage * (this.activePage - 1),
      };
    },
    paginate(pageNumber) {
      if (this.activePage === pageNumber) return;

      this.activePage = pageNumber;
      this.getCharacters(this.getParams());
    },
    parseHeroesData(heroesData) {
      return heroesData.map(({ id, name, thumbnail: { extension, path } }) => ({
        id,
        name,
        image: `${path}.${extension}`,
      }));
    },
    setResultsData({ data }) {
      this.charactersTotal = data.data.total;
      this.heroes = this.parseHeroesData(data.data.results);
    },
    getCharacters(params = {}) {
      this.isLoading = true;
      const { activePage } = this;

      if (parseInt(this.$route.query.page, 10) !== activePage) {
        this.$router.push({ query: { page: activePage } });
      }

      marvelService
        .getCharacters(params)
        .then(this.setResultsData)
        .finally(() => {
          this.isLoading = false;
        });
    },
    getCharactersByName() {
      this.isLoading = true;
      marvelService
        .getCharactersByName(this.term)
        .then(this.setResultsData)
        .finally(() => {
          this.isLoading = false;
        });
    },
    handleInput(value) {
      this.term = value;
    },
  },
  mounted() {
    this.getCharacters(this.getParams());
  },
};
</script>

<style lang="scss" scoped>
.main-content {
  margin: auto;
  max-width: 960px;
  min-width: 375px;
}

.toggle {
  span {
    display: inline-block;
    background: $light-grey;
    width: 50px;
    height: 20px;
    border: 5px solid $light-grey;
    border-radius: 35px;

    &:before {
      background: $main-color;
      box-shadow: 0 2px 3px lighten($main-color, 15%);
      content: '';
      height: 20px;
      width: 20px;
      position: absolute;
      border-radius: 50%;
    }
  }
}

.paginate {
  text-align: center;
  margin: 30px 0;
}
</style>
