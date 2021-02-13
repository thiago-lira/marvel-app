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
          <button>
            <img src="@/assets/fav-outline.svg" alt="Ícone herói favorito">
          </button>
        </div>
      </div>
    </div>
    {{ hero.name }}
  </div>
</template>

<script>
export default {
  name: 'SearchCard',
  props: {
    hero: {
      type: Object,
      required: true,
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
