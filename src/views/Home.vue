<template>
  <div class="home">
    <HeaderHome />

    <section class="main-content">
      <div class="search-header">
        <div class="search-feedback">
          <p>
          Encontrados 20 heróis
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
          <button class="flex">
            <img src="@/assets/fav.svg" alt="Ícone favoritos">

            <p>Somente favoritos</p>
          </button>
        </div>
      </div>

      <div class="search-container flex">
        <div class="search-card">
          <div class="search-card-image">
            <img src="http://i.annihil.us/u/prod/marvel/i/mg/2/80/511a79a0451a3.jpg" alt="Hero">
          </div>

          <div class="search-card-details flex">
            <div class="card-hero-name">
              <p>
                <b>
                  Nome Grande de Um Grande Herói
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
        <div class="search-card">
          <div class="search-card-image">
            <img src="http://i.annihil.us/u/prod/marvel/i/mg/2/80/511a79a0451a3.jpg" alt="Hero">
          </div>

          <div class="search-card-details flex">
            <div class="card-hero-name">
              <p>
                <b>
                  Nome Grande de Um Grande Herói
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
        <div class="search-card">
          <div class="search-card-image">
            <img src="http://i.annihil.us/u/prod/marvel/i/mg/2/80/511a79a0451a3.jpg" alt="Hero">
          </div>

          <div class="search-card-details flex">
            <div class="card-hero-name">
              <p>
                <b>
                  Nome Grande de Um Grande Herói
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
        <div class="search-card">
          <div class="search-card-image">
            <img src="http://i.annihil.us/u/prod/marvel/i/mg/2/80/511a79a0451a3.jpg" alt="Hero">
          </div>

          <div class="search-card-details flex">
            <div class="card-hero-name">
              <p>
                <b>
                  Nome Grande de Um Grande Herói
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
      </div>
    </section>
  </div>
</template>

<script>
import HeaderHome from '@/components/HeaderHome.vue';

export default {
  name: 'Home',
  components: {
    HeaderHome,
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

.flex {
  align-items: center;
  display: flex;
}

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

  &-container {
    flex-wrap: wrap;
    justify-content: center;
  }

  &-feedback {
    color: $light-grey;
    flex-grow: 1;
    font-size: 16px;
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
