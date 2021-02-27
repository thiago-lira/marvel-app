<template>
  <div class="latest-comics">
    <h1>
      Últimas Publicações
    </h1>

    <ul class="comics flex">
      <li><img src="http://i.annihil.us/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239.jpg" alt="" /></li>
      <li><img src="http://i.annihil.us/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239.jpg" alt="" /></li>
      <li><img src="http://i.annihil.us/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239.jpg" alt="" /></li>
      <li><img src="http://i.annihil.us/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239.jpg" alt="" /></li>
      <li><img src="http://i.annihil.us/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239.jpg" alt="" /></li>
      <li><img src="http://i.annihil.us/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239.jpg" alt="" /></li>
      <li><img src="http://i.annihil.us/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239.jpg" alt="" /></li>
      <li><img src="http://i.annihil.us/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239.jpg" alt="" /></li>
      <li><img src="http://i.annihil.us/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239.jpg" alt="" /></li>
      <li><img src="http://i.annihil.us/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239.jpg" alt="" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeroComics',
  props: {
    title: {
      type: String,
      required: true,
    },
    comics: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
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
</style>
