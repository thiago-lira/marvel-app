<template>
  <div class="home">
    <HeaderHome @input="handleInput" />

    <section class="main-content">
      <SearchHeader :total-heroes="heroes.length" />

      <SearchContainer :is-loading="isLoading" :heroes="heroes" />

      <div class="paginate">
        <SearchPaginate :totalPages="12" />
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

export default {
  name: 'Home',
  data() {
    return {
      isLoading: false,
      term: '',
      heroes: [],
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
  methods: {
    mapHeroes({ data }) {
      this.heroes = data.data.results.map(({ id, name, thumbnail: { extension, path } }) => ({
        id,
        name,
        image: `${path}.${extension}`,
      }));
    },
    getCharacters() {
      this.isLoading = true;
      marvelService
        .getCharacters()
        .then(this.mapHeroes)
        .finally(() => {
          this.isLoading = false;
        });
    },
    getCharactersByName() {
      this.isLoading = true;
      marvelService
        .getCharactersByName(this.term)
        .then(this.mapHeroes)
        .finally(() => {
          this.isLoading = false;
        });
    },
    handleInput(value) {
      this.term = value;
    },
  },
  mounted() {
    this.getCharacters();
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
