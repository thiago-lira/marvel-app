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
import range from '@/utils/range';

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
      const buttonsData = this.getNextPages().map((index) => ({ page: index }));

      return buttonsData;
    },
  },
  methods: {
    getNextPages() {
      const { activePage, totalPages, totalButtons } = this;
      const diff = totalPages - activePage;

      let lastPage = activePage + totalButtons;
      if (diff <= totalButtons) {
        lastPage = activePage + diff + 1;
      }
      const pagesNumbers = range(activePage, lastPage);
      return pagesNumbers;
    },
    handleClickPage(page) {
      this.$emit('page-has-clicked', page);
    },
  },
};
</script>
