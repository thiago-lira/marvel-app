<template>
  <div class="hero-details">
    <div class="flex">
      <div class="character-description">
        <div class="flex">
          <div class="character-name">
            <h1>
              {{ character.name }}
            </h1>
          </div>
          <div class="character-favorite">
            <button @click="handleFavClick" data-fav-button>
              S2
            </button>
          </div>
        </div>

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
  methods: {
    handleFavClick() {
      this.$emit('toggleFavorite', { ...this.character });
    },
  },
};
</script>

<style lang="scss" scoped>
.hero-details {
  @media (max-width: 540px) {
    margin: 0 10px;

    .character-description {
      margin-bottom: 20px;
    }

    > .flex {
      flex-flow: column;
    }
  }
}

.character {
  &-image {
    max-width: 375px;

    img {
      max-width: 100%;
    }
  }
  &-description {
    flex-grow: 1;
  }
}
</style>
