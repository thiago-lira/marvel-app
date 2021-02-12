<template>
  <div class="home">
    <header>
      <div class="logo">
        <img src="@/assets/logo.svg" alt="Marvel Logo">
      </div>

      <div>
        <h1>
          EXPLORE O UNIVERSO
        </h1>

        <p>
        Mergulhe no domínio deslumbrante de todos personagens clássicos que você ama - e aqueles

        que você descobrirá em breve
        </p>
      </div>

      <div class="search">
        <label class="flex">
          <div>
            <img src="@/assets/magnify.svg" alt="Ícone buscar">
          </div>

          <div>
            <input type="text" placeholder="Procurar por heróis">
          </div>
        </label>
      </div>
    </header>

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
export default {
  name: 'Home',
};
</script>

<style lang="scss" scoped>
header {
  margin: auto;
  max-width: 865px;
  min-width: 375px;
  text-align: center;

  img {
    display: inline;
  }

  img {
    display: inline;
  }

  h1 {
    color: #404040;
    margin: 15px 0;
  }

  p {
    color: #8c8c8c;
    font-size: 14px;
  }
}

.main-content {
  margin: auto;
  max-width: 960px;
  min-width: 375px;
}

.toggle {
  span {
    display: inline-block;
    background: #b9b9b9;
    width: 50px;
    height: 20px;
    border: 5px solid #b9b9b9;
    border-radius: 35px;

    &:before {
      background: #ff1510;
      box-shadow: 0 2px 3px #ff6272;
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
  background: #fdecec;
  border-radius: 50px;
  margin: 30px 0;

  label {
    align-items: center;
    display: flex;
    padding: 15px 20px;
  }

  input {
    background: none;
    border: none;
    color: #ff1510;
    font-size: 18px;
    padding: 2px;
    margin-left: 20px;
    width: 100%;

    &::placeholder {
      color: #ff1510;
      opacity: 0.5;
    }
  }

  &-header {
    align-items: center;
    color: #ff1510;
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
        color: #ff1510;
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
    color: #909090;
    flex-grow: 1;
    font-size: 16px;
  }

  &-card {
    margin: 10px;
    width: 220px;

    &-details {
      color: #404040;
      font-size: 18px;
      margin: 15px 0;

      button {
        background: none;
        border: none;
        color: #ff1510;
        font-size: 14px;
      }
    }

    &-image img {
      max-width: 100%;
    }
  }
}

</style>
