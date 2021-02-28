<template>
  <div class="details">
    <HeaderDetails @input="handleInput" />

    <div v-if="isLoading" class="loader flex">
      <Loader />
    </div>
    <div
      v-else
      class="custom-background"
      :style="{ backgroundImage }"
    >
      <main class="container">
        <HeroDetails
          @toggleFavorite="handleToggleFavorite"
          :isFavorite="isFavorite"
          :character="character"
          :comics="comics"
        />
      </main>
    </div>
  </div>
</template>

<script>
import HeaderDetails from '@/components/HeaderDetails.vue';
import HeroDetails from '@/components/HeroDetails.vue';
import Loader from '@/components/Loader.vue';
import marvelService from '@/services/marvel';
import lStorage from '@/utils/localstorage';

const favCharactersIds = lStorage('MARVEL_HEROES_ID', []);

export default {
  name: 'DetailsPage',
  components: {
    HeaderDetails,
    HeroDetails,
    Loader,
  },
  data() {
    return {
      isLoading: true,
      favCharacters: favCharactersIds.get(),
      character: {},
      comics: [],
    };
  },
  computed: {
    isFavorite() {
      return this.favCharacters.includes(this.character.id);
    },
    backgroundImage() {
      return `
        linear-gradient(to bottom, #e3f8e8 2%, rgba(255, 255, 255, .8) 98%),
        url(${this.character.image})
      `;
    },
    characterId() {
      return this.$route.params.id;
    },
  },
  methods: {
    handleInput(payload) {
      if (payload.trim() !== '') {
        this.$router.push({ name: 'Home', query: { search: payload } });
      }
    },
    handleToggleFavorite() {
      const { id, name } = this.character;
      const favIds = [...this.favCharacters];
      const characterIdIndex = favIds.findIndex((favId) => favId === id);
      let message;

      if (characterIdIndex !== -1) {
        favIds.splice(characterIdIndex, 1);
        message = `${name} foi desmarcado como favorito`;
      } else if (favIds.length < 5) {
        favIds.push(id);
        message = `${name} foi marcado como favorito`;
      } else {
        message = 'Não foi possível adicionar à sua lista de favoritos pois o limite é de 5 personagens';
      }

      favCharactersIds.set(favIds);
      this.favCharacters = favIds;
      this.$addMessage(message);
    },
    mapComics({ data }) {
      this.comics = data.data.results.map(({ title, images }) => {
        const comic = { title };
        if (images.length > 0) {
          const { extension, path } = images[0];
          comic.url = `${path}.${extension}`;
        }
        return comic;
      });
    },
    mapCharacter({ data }) {
      const {
        id, name, description, thumbnail: { extension, path },
      } = data.data.results[0];
      this.character = {
        id,
        name,
        description: description.trim() !== ''
          ? description
          : 'Não há descrição para este personagem',
        image: `${path}.${extension}`,
      };
    },
    fetchCharacter() {
      return marvelService.getCharacterById(this.characterId)
        .then(this.mapCharacter);
    },
    fetchComics() {
      return marvelService.getComicsByCharacterId(this.characterId)
        .then(this.mapComics);
    },
    fetchData() {
      this.isLoading = true;
      Promise
        .all([this.fetchCharacter(), this.fetchComics()])
        .then(() => {
          this.isLoading = false;
        });
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style lang="scss" scoped>
.loader {
  justify-content: center;
  padding: 15px;
}
.custom-background {
  background-position: center;
  background-size: cover;
  padding: 30px 0;
  position: relative;
  z-index: 9;
}

.container {
  margin: auto;
  max-width: 960px;
  min-width: 375px;
}

.details {
  background: #e3f8e8;
}
</style>
