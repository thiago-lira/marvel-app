<template>
  <div>
    <div class="search-container flex">
      <template v-if="heroes.length > 0">
        <SearchCard
          v-for="{ id, name, image } in heroes"
          :hero="{ name, image, id }"
          :key="id"
        />
      </template>
    </div>
  </div>
</template>

<script>
import SearchCard from '@/components/SearchCard.vue';

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
};
</script>

<style lang="scss" scoped>
.search-container {
  flex-wrap: wrap;
  justify-content: center;
}
</style>
