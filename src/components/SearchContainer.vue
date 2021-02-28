<template>
  <div>
    <div class="search-container flex">
      <Loader v-if="isLoading" />
      <template v-else>
        <template v-if="heroes.length > 0">
          <SearchCard
            v-for="{ id, name, image } in heroes"
            :hero="{ name, image, id }"
            :is-favorite="isFavorite(id)"
            :key="id"
            @toggleFavorite="handleToggleFavorite"
            @detailsClick="handleDetailsClick"
          />
        </template>
        <template v-else>
          <p data-no-results="">
            Não há personagens para serem exibidos
          </p>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import SearchCard from '@/components/SearchCard.vue';
import Loader from '@/components/Loader.vue';
import localstorage from '@/utils/localstorage';

const lsHeroes = localstorage('MARVEL_HEROES_ID', []);

export default {
  name: 'SearchContainer',
  components: {
    SearchCard,
    Loader,
  },
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
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
    handleDetailsClick(payload) {
      this.$emit('detailsClick', payload);
    },
    handleToggleFavorite(payload) {
      const { id, name } = payload;
      let message;
      const indexHero = this.favoritesId.findIndex((idHero) => idHero === id);
      if (indexHero !== -1) {
        this.favoritesId.splice(indexHero, 1);
        message = `${name} foi removido da sua lista de favoritos`;
      } else if (this.favoritesId.length < 5) {
        this.favoritesId.push(id);
        message = `${name} foi adicionado à sua lista de favorito`;
      } else {
        message = 'Não foi possível adicionar à sua lista de favoritos pois o limite é de 5 personagens';
      }
      this.$emit('toggleFavorite', payload);
      this.$addMessage(message);
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

.loader {
  align-items: center;
  height: 72px;

  &-content img {
    animation: loading 1s infinite ease-in-out;
  }
}

@keyframes loading {
  0% {
    height: 72px;
  }

  50% {
    height: 45px;
  }

  100% {
    height: 72px;
  }
}
</style>
