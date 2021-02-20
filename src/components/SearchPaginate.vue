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
    activePage: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    paginate() {
      const { totalPages, totalButtons, activePage } = this;
      let totalRange;
      if (totalPages > totalButtons) {
        totalRange = totalButtons;
      } else {
        const diff = totalPages - activePage;
        if (diff < totalButtons) {
          totalRange = diff + 1;
        } else {
          totalRange = totalPages;
        }
      }
      const range = Array.from(Array(totalRange).keys());
      range.length = totalRange;
      const result = range.map((index) => ({ page: index + activePage }));
      return result;
    },
  },
  methods: {
    handleClickPage(page) {
      this.$emit('page-has-clicked', page);
    },
  },
};
</script>
