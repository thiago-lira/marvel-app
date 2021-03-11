<template>
  <div>
    <HeaderHome @input="handleInput" />

    <section class="main-content">
      <SearchHeader
        @clickedFav="handleClickedFav"
        @toggleSort="handleToggleSort"
        :total-heroes="totalHeroes"
        :only-fav-heroes="onlyFavHeroes"
      />

      <SearchContainer
        @toggleFavorite="handleToggleFavorite"
        @detailsClick="handleDetailsClick"
        :is-loading="isLoading"
        :heroes="heroes"
      />
    </section>
  </div>
</template>

<script>
import HeaderHome from '@/components/HeaderHome.vue';
import SearchHeader from '@/components/SearchHeader.vue';
import SearchContainer from '@/components/SearchContainer.vue';

export default {
  name: 'ListHeroes',
  components: {
    HeaderHome,
    SearchHeader,
    SearchContainer,
  },
  props: {
    handleInput: {
      type: Function,
      required: true,
    },
    handleClickedFav: {
      type: Function,
      required: true,
    },
    handleToggleSort: {
      type: Function,
      required: true,
    },
    handleToggleFavorite: {
      type: Function,
      required: true,
    },
    heroes: {
      type: Array,
      required: true,
    },
    onlyFavHeroes: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    totalHeroes() {
      return this.heroes.length;
    },
  },
  methods: {
    handleDetailsClick({ id }) {
      this.$router.push({ name: 'Details', params: { id } });
    },
  },
};
</script>
