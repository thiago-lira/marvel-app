<template>
  <div class="search-header">
    <div class="search-feedback">
      <p>
        {{ foundHeroesMessage }}
      </p>
    </div>

    <div class="search-sorting flex">
      <img src="@/assets/hero.svg" alt="Ícone organizar por nome">

      <span class="sorting-long-description">
        Ordenar por nome
      </span>
      - A/Z

      <div class="toggle">
        <span />
      </div>
    </div>

    <div class="search-only-favs-option">
      <button @click="handleFavClick" class="flex" data-fav-button>
        <img v-if="onlyFavHeroes" src="@/assets/fav.svg" alt="Ícone favoritos">
        <img v-else src="@/assets/fav-outline.svg" alt="Ícone favoritos">

        <p>Somente favoritos</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchHeader',
  props: {
    onlyFavHeroes: {
      type: Boolean,
      default: false,
    },
    totalHeroes: {
      type: Number,
      required: true,
    },
  },
  computed: {
    foundHeroesMessage() {
      const { totalHeroes } = this;
      return (totalHeroes > 1)
        ? `Encontrados ${totalHeroes} heróis`
        : `Encontrado ${totalHeroes} herói`;
    },
  },
  methods: {
    handleFavClick() {
      this.$emit('clickedFav');
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  &-header {
    align-items: center;
    color: $main-color;
    display: flex;
    font-size: 14px;
    margin: 15px 0 30px;

    img {
      margin-right: 15px;
    }

    .toggle {
      margin-left: 15px;
    }
    .search-only-favs-option {
      button {
        background: none;
        border: none;
        color: $main-color;
        font-size: 14px;

      }
    }

    > :not(div:first-child) {
      margin: 0 10px;
    }
  }

  &-feedback {
    color: $light-grey;
    flex-grow: 1;
    font-size: 16px;
  }

}
</style>
