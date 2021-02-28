<template>
  <div class="details">
    <HeaderDetails />

    <div
      class="custom-background"
      :style="{ backgroundImage }"
    >
      <main class="container">
        <HeroDetails :character="character" :comics="comics" />
      </main>
    </div>
  </div>
</template>

<script>
import HeaderDetails from '@/components/HeaderDetails.vue';
import HeroDetails from '@/components/HeroDetails.vue';
import marvelService from '@/services/marvel';

export default {
  name: 'DetailsPage',
  components: {
    HeaderDetails,
    HeroDetails,
  },
  data() {
    return {
      character: {},
      comics: [],
    };
  },
  computed: {
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
      marvelService.getCharacterById(this.characterId)
        .then(this.mapCharacter);
    },
    fetchComics() {
      marvelService.getComicsByCharacterId(this.characterId)
        .then(this.mapComics);
    },
  },
  beforeMount() {
    this.fetchCharacter();
    this.fetchComics();
  },
};
</script>

<style lang="scss" scoped>
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
