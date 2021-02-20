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
      const buttonsData = this.getButtonsText().map((text) => ({ page: text }));

      return buttonsData;
    },
  },
  methods: {
    getButtonsText() {
      const { activePage, totalPages, totalButtons } = this;
      const remainingPages = totalPages - activePage;

      if (remainingPages < totalButtons) {
        const lastPage = totalPages + 1;
        let firstPage = totalButtons - lastPage;

        if (totalPages > totalButtons) {
          firstPage = lastPage - totalButtons;
        }

        return range(firstPage, lastPage);
      }

      const lastPage = activePage + totalButtons;
      return range(activePage, lastPage);
    },
    handleClickPage(page) {
      this.$emit('page-has-clicked', page);
    },
  },
};
</script>
