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
      let totalRange = totalButtons;

      if (totalPages < totalButtons) {
        totalRange = this.getButtonsRemaining();
      }

      const range = Array.from(Array(totalRange).keys());
      range.length = totalRange;
      const buttonsData = range.map((index) => ({ page: index + activePage }));

      return buttonsData;
    },
  },
  methods: {
    getButtonsRemaining() {
      const { totalPages, totalButtons, activePage } = this;
      const diff = totalPages - activePage;
      let totalRange = totalPages;

      if (diff < totalButtons) {
        totalRange = diff + 1;
      }

      return totalRange;
    },
    handleClickPage(page) {
      this.$emit('page-has-clicked', page);
    },
  },
};
</script>
