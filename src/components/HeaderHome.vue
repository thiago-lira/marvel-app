<template>
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
</template>

<style lang="scss" scoped>
header {
  margin: auto;
  max-width: 865px;
  min-width: 375px;
  text-align: center;

  img {
    display: inline;
  }

  h1 {
    color: $grey;
    margin: 15px 0;
  }

  p {
    color: $grey;
    font-size: 14px;
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
      color: $main-color;
      font-size: 18px;
      padding: 2px;
      margin-left: 20px;
      width: 100%;

      &::placeholder {
        color: $main-color;
        opacity: 0.5;
      }
    }
  }
}
</style>
