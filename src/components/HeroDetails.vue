<template>
  <div class="hero-details">
    <div class="flex">
      <div class="character-description">
        <h1>
          {{ character.name }}
        </h1>

        <p>
          {{ character.description }}
        </p>
      </div>

      <div class="character-image">
        <img :src="character.image" :alt="character.image" />
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
    character: {
      type: Object,
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
.character-description {
  flex-grow: 1;
}
</style>
