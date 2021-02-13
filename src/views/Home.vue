<template>
  <div class="home">
    <HeaderHome />

    <section class="main-content">
      <SearchHeader :total-heroes="heroes.length" />

      <SearchContainer />
    </section>
  </div>
</template>

<script>
import HeaderHome from '@/components/HeaderHome.vue';
import SearchHeader from '@/components/SearchHeader.vue';
import SearchContainer from '@/components/SearchContainer.vue';
import marvelService from '@/services/marvel';

export default {
  name: 'Home',
  data() {
    return {
      heroes: [],
    };
  },
  components: {
    HeaderHome,
    SearchHeader,
    SearchContainer,
  },
  mounted() {
    marvelService.getCharacters()
      .then(({ data }) => {
        this.heroes = data.data.results;
      });
  },
};
</script>

<style lang="scss" scoped>
.main-content {
  margin: auto;
  max-width: 960px;
  min-width: 375px;
}

.toggle {
  span {
    display: inline-block;
    background: $light-grey;
    width: 50px;
    height: 20px;
    border: 5px solid $light-grey;
    border-radius: 35px;

    &:before {
      background: $main-color;
      box-shadow: 0 2px 3px lighten($main-color, 15%);
      content: '';
      height: 20px;
      width: 20px;
      position: absolute;
      border-radius: 50%;
    }
  }
}
</style>
