<template>
  <div>
    <div class="search-container flex">
      <template v-if="heroes.length > 0">
        <div class="search-card" v-for="{ id, name, image } in heroes" :key="id">
          <div class="search-card-image">
            <img :src="image" alt="Hero">
          </div>

          <div class="search-card-details flex">
            <div class="card-hero-name">
              <p>
                <b>
                  {{ name }}
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
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchContainer',
  props: {
    heroes: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  &-container {
    flex-wrap: wrap;
    justify-content: center;
  }

  &-card {
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
}
</style>
