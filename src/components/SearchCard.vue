<template>
  <div>
    <div class="search-card">
      <div class="search-card-image">
        <img :src="hero.image" alt="Hero">
      </div>

      <div class="search-card-details flex">
        <div class="card-hero-name">
          <p>
            <b>
              {{ hero.name }}
            </b>
          </p>
        </div>

        <div class="card-hero-fav">
          <button @click="handleFavoriteClick">
            <img v-if="isFavorite" src="@/assets/fav.svg" alt="Ícone herói favorito">
            <img v-else src="@/assets/fav-outline.svg" alt="Ícone herói favorito">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchCard',
  props: {
    isFavorite: {
      type: Boolean,
      required: true,
    },
    hero: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleFavoriteClick() {
      this.$emit('toggleFavorite', !this.isFavorite);
    },
  },
};
</script>

<style lang="scss" scoped>
.search-card {
  margin: 10px;
  width: 220px;

  &-details {
    color: $dark-grey;
    font-size: 18px;
    margin: 15px 0;

    button {
      background: none;
      border: none;
      color: $main-color;
      font-size: 14px;
    }
  }

  &-image img {
    max-width: 100%;
  }
}
</style>
