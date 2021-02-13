<template>
  <div>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchContainer',
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
