<template>
  <div class="latest-comics">
    <h1>
      {{ title }}
    </h1>

    <ul class="comics flex">
      <li
        v-for="{ url, title } in comics"
        :key="url"
        data-comic-image
      >
        <div class="comic-cover">
          <img :src="url" alt="" />
        </div>
        <div class="comic-title">
          <p>
            {{ title }}
          </p>
        </div>
      </li>
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
      margin: 15px 5px;
      max-width: 180px;
    }

    img {
      max-width: 100%;
    }
  }

  .comic-title {
    height: 65px;
    padding-top: 5px;
    vertical-align: middle;
  }
}
</style>
