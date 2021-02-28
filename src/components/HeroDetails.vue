<template>
  <div class="hero-details">
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
        <img src="http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c0042121d790.jpg" alt="" />
      </div>
    </div>

    <HeroComics :comics="comics" title="Últimas Publicações" />
  </div>
</template>

<script>
import HeroComics from '@/components/HeroComics.vue';

export default {
  name: 'HeroDetails',
  components: {
    HeroComics,
  },
  props: {
    comics: {
      type: Array,
      required: true,
    },
  },
};
</script>
