<template>
  <div class="home">
    <HeaderHome />

    <section class="main-content">
      <SearchHeader />

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
import SearchHeader from '@/components/SearchHeader.vue';

export default {
  name: 'Home',
  components: {
    HeaderHome,
    SearchHeader,
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
