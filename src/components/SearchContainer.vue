<template>
  <div>
    <div class="search-container flex">
      <template v-if="heroes.length > 0">
        <SearchCard
          v-for="{ id, name, image } in heroes"
          :hero="{ name, image, id }"
          :is-favorite="isFavorite(id)"
          :key="id"
          @toggleFavorite="handleToggleFavorite"
        />
      </template>
    </div>
  </div>
</template>

<script>
import SearchCard from '@/components/SearchCard.vue';
import localstorage from '@/utils/localstorage';

const lsHeroes = localstorage('MARVEL_HEROES_ID', []);

export default {
  name: 'SearchContainer',
  components: {
    SearchCard,
  },
  props: {
    heroes: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      favoritesId: lsHeroes.get(),
    };
  },
  methods: {
    isFavorite(idHero) {
      return this.favoritesId.some((id) => id === idHero);
    },
    handleToggleFavorite({ id }) {
      const indexHero = this.favoritesId.findIndex((idHero) => idHero === id);
      if (indexHero !== -1) {
        this.favoritesId.splice(indexHero, 1);
      } else {
        this.favoritesId.push(id);
      }
      lsHeroes.set(this.favoritesId);
    },
  },
};
</script>

<style lang="scss" scoped>
.search-container {
  flex-wrap: wrap;
  justify-content: center;
}
</style>
