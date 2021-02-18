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
  },
  computed: {
    paginate() {
      const { totalPages } = this;
      let totalButtons = totalPages;
      const range = Array.from(Array(totalButtons).keys());
      if (totalPages > 5) {
        totalButtons = 4;
        let rightButtonText = totalPages - 2;
        return Array.from(Array(totalButtons).keys())
          .map((index) => {
            let valuePage;
            if (index < 2) {
              valuePage = index + 1;
            } else {
              rightButtonText += 1;
              valuePage = rightButtonText;
            }
            return { page: valuePage };
          });
      }
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
