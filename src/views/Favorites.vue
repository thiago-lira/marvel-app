<template>
  <section class="favorites">
    <HeroesList
      :handleInput="handleInput"
      :handleClickedFav="handleClickedFav"
      :handleToggleSort="handleToggleSort"
      @toggleFavorite="handleToggleFavorite"
      :heroes="heroes"
      :is-loading="isLoading"
      :only-fav-heroes="true"
    />
  </section>
</template>

<script>
import HeroesList from '@/components/HeroesList.vue';
import marvelService from '@/services/marvel';
import heroesService from '@/services/heroes';
import localstorageUtil from '@/utils/localstorage';

const favHeroesLS = localstorageUtil('MARVEL_HEROES_ID', []);

export default {
  name: 'Favorites',
  data() {
    return {
      isLoading: false,
      heroes: [],
      isSortAsc: true,
    };
  },
  components: {
    HeroesList,
  },
  methods: {
    sortHeroes(heroes) {
      return heroesService.sort({ heroes, isAsc: this.isSortAsc });
    },
    sortFavHeroes() {
      this.heroes = this.sortHeroes(this.heroes);
    },
    handleToggleSort() {
      this.isSortAsc = !this.isSortAsc;
      this.sortFavHeroes();
    },
    handleToggleFavorite({ id: idPayload }) {
      this.heroes = this.heroes
        .filter(({ id }) => id !== idPayload);
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
          this.heroes = this.sortHeroes([
            ...heroesAlreadyFetched,
            ...this.parseHeroesData(heroesData),
          ]);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    handleClickedFav() {
      this.goToHome();
    },
    parseHeroesData(heroesData) {
      return heroesData.map(({ id, name, thumbnail: { extension, path } }) => ({
        id,
        name,
        image: `${path}.${extension}`,
      }));
    },
    setResultsData({ data }) {
      this.heroes = this.parseHeroesData(data.data.results);
    },
    handleInput(value = '') {
      if (value.trim() !== '') {
        this.goToHome({ query: { q: value } });
      }
    },
    goToHome(query = {}) {
      this.$router.push({ name: 'Home', query });
    },
  },
  mounted() {
    this.getFavHeroes();
  },
};
</script>

<style lang="scss" scoped>
.paginate {
  text-align: center;
  margin: 30px 0;
}
</script>
