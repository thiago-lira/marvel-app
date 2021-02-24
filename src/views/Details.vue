<template>
  <div class="details">
    <header class="container flex">
      <div class="logo">
        <img src="@/assets/logo-details.png" alt="Marvel Logo" />
      </div>

      <div class="search-input">
        <SearchInput @input="handleInput" placeholder="Procurar por heróis" />
      </div>
    </header>

    <div class="custom-background">
      <main class="container">
        <div class="flex">
          <div class="character-description">
            <h1>
              Hulk
            </h1>

            <p>
              lorem ipsum sit dolor amet
              lorem ipsum sit dolor amet
              lorem ipsum sit dolor amet
              lorem ipsum sit dolor amet
              lorem ipsum sit dolor amet
              lorem ipsum sit dolor amet
            </p>
          </div>

          <div class="character-image">
            <img src="http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c0042121d790.jpg" alt="">
          </div>
        </div>

        <div class="latest-comics">
          <h1>
            Últimas Publicações
          </h1>

          <ul class="comics flex">
            <li><img src="http://i.annihil.us/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239.jpg" alt=""></li>
            <li><img src="http://i.annihil.us/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239.jpg" alt=""></li>
            <li><img src="http://i.annihil.us/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239.jpg" alt=""></li>
            <li><img src="http://i.annihil.us/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239.jpg" alt=""></li>
            <li><img src="http://i.annihil.us/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239.jpg" alt=""></li>
            <li><img src="http://i.annihil.us/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239.jpg" alt=""></li>
            <li><img src="http://i.annihil.us/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239.jpg" alt=""></li>
            <li><img src="http://i.annihil.us/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239.jpg" alt=""></li>
            <li><img src="http://i.annihil.us/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239.jpg" alt=""></li>
            <li><img src="http://i.annihil.us/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239.jpg" alt=""></li>
          </ul>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import SearchInput from '@/components/SearchInput.vue';

export default {
  name: 'DetailsPage',
  components: {
    SearchInput,
  },
  methods: {
    handleInput() {
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-background {
  padding: 30px 0;
  position: relative;

  &:after {
    background-image: linear-gradient(to bottom, #e3f8e8 2%, rgba(255, 255, 255, .1) 98%), url(http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860.jpg);
    background-position: center;
    background-size: cover;
    content: "";
    filter: grayscale(100);
    height: 100%;
    opacity: .35;
    position: absolute;
    text-align: center;
    left: 0;
    top: 0;
    width: 100%;
  }
}

.container {
  margin: auto;
  max-width: 960px;
  min-width: 375px;
}

.details {
  background: #e3f8e8;

  .latest-comics {
    h1 {
      margin: 30px 0 10px;
    }

    .comics {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      li {
        flex-grow: 1;
        margin: 5px;
        max-width: 180px;
      }

      img {
        max-width: 100%;
      }
    }
  }
}

header {
  background: #e3f8e8;

  .logo {
    max-width: 250px;

    img {
      max-width: 100%;
    }
  }
  .search-input {
    flex-grow: 1;
    margin: 0 15px;

    ::v-deep {
      .search {
        background: #fff;

        label {
          padding: 10px 15px;
        }

        input {
          color: $dark-grey;

          &::placeholder {
            color: $dark-grey;
            opacity: 0.5;
          }
        }
      }
    }
  }
}
</style>
