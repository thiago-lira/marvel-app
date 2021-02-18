<template>
  <section class="search-paginate">
    <ul>
      <li v-for="{ page } in paginate" :key="page">
        <button @click="handleClickPage(page)" :data-page-button="page">
          {{ page }}
        </button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'SearchPaginate',
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    totalButtons: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    paginate() {
      const { totalPages, totalButtons } = this;
      const totalRange = totalPages > totalButtons ? totalButtons : totalPages;
      const range = Array.from(Array(totalRange).keys());
      return range.map((index) => ({ page: index + 1 }));
    },
  },
  methods: {
    handleClickPage(page) {
      this.$emit('page-has-clicked', page);
    },
  },
};
</script>
