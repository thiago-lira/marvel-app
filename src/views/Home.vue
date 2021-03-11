<template>
  <section class="home">
    <HeroesList
      :handleInput="handleInput"
      :handleClickedFav="handleClickedFav"
      :handleToggleSort="handleToggleSort"
      :handleToggleFavorite="handleToggleFavorite"
      :heroes="heroes"
      :is-loading="isLoading"
      :only-fav-heroes="false"
    />

    <div class="paginate">
      <SearchPaginate
        @clicked-page="paginate"
        :totalPages="totalPages"
        :activePage="activePage"
      />
    </div>
  </section>
</template>

<script>
import HeroesList from '@/components/HeroesList.vue';
import SearchPaginate from '@/components/SearchPaginate.vue';
import marvelService from '@/services/marvel';
import heroesService from '@/services/heroes';

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
      isSortAsc: true,
    };
  },
  components: {
    HeroesList,
    SearchPaginate,
  },
  computed: {
    sort() {
      return this.isSortAsc ? 'name' : '-name';
    },
    totalPages() {
      return Math.ceil(this.charactersTotal / this.charactersPerPage);
    },
  },
  methods: {
    fetchCharacters() {
      this.getCharacters(this.getParams());
    },
    sortHeroes(heroes) {
      return heroesService.sort({ heroes, isAsc: this.isSortAsc });
    },
    handleToggleSort() {
      this.isSortAsc = !this.isSortAsc;
      this.fetchCharacters();
    },
    handleToggleFavorite() {
      // TODO: Remove me
    },
    handleClickedFav() {
      this.$router.push({ name: 'Favorites' });
    },
    getParams() {
      return {
        orderBy: this.sort,
        limit: this.charactersPerPage,
        offset: this.charactersPerPage * (this.activePage - 1),
      };
    },
    paginate(pageNumber) {
      if (this.activePage === pageNumber) return;

      this.activePage = pageNumber;
      this.fetchCharacters();
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
      const reqParams = params;
      const { query } = this.$route;
      const { activePage } = this;

      this.isLoading = true;

      if (parseInt(this.$route.query.page, 10) !== activePage) {
        const newQuery = {
          ...query,
          page: activePage,
        };
        this.$router.push({ query: newQuery });
      }

      if (query?.search) {
        reqParams.nameStartsWith = query.search;
      }

      marvelService
        .getCharacters(reqParams)
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

      if (this.term === '') {
        this.fetchCharacters();
      } else {
        this.getCharactersByName();
      }
    },
  },
  mounted() {
    this.fetchCharacters();
  },
};
</script>

<style lang="scss" scoped>
.paginate {
  text-align: center;
  margin: 30px 0;
}
</style>
