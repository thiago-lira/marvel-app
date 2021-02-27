<template>
  <div class="details">
    <HeaderDetails />

    {{ comics }}

    <div class="custom-background">
      <main class="container">
        <HeroDetails />
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
      comics: [],
    };
  },
  computed: {
    characterId() {
      return this.$route.params.id;
    },
  },
  methods: {
    fetchComics() {
      marvelService.getComicsByCharacterId(this.characterId)
        .then(({ data }) => {
          this.comics = data.data.results.map(({ title, images }) => {
            const comic = {
              title,
            };
            if (images.length > 0) {
              const { extension, path } = images[0];
              comic.url = `${path}.${extension}`;
            }
            return comic;
          });
        });
    },
  },
  beforeMount() {
    this.fetchComics();
  },
};
</script>

<style lang="scss" scoped>
.custom-background {
  padding: 30px 0;
  position: relative;

  &:after {
    background-image: linear-gradient(to bottom, #e3f8e8 2%, rgba(255, 255, 255, .1) 98%), url(http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860.jpg);
    background-position: center;
    background-size: cover;
    content: "";
    filter: grayscale(100);
    height: 100%;
    opacity: .35;
    position: absolute;
    text-align: center;
    left: 0;
    top: 0;
    width: 100%;
  }
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
