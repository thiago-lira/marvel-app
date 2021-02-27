<template>
  <div class="latest-comics">
    <h1>
      {{ title }}
    </h1>

    <ul class="comics flex">
      <li
        v-for="{ url } in comics"
        :key="url"
        data-comic-image
      >
        <img :src="url" alt="" />
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
      margin: 5px;
      max-width: 180px;
    }

    img {
      max-width: 100%;
    }
  }
}
</style>
