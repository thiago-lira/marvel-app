<template>
  <section class="search-paginate">
    <ul>
      <li v-if="!isFirstPage">
        <button
          @click="handleClickPage(1)"
          :data-first-page="1"
        >
          &lt;&lt;
        </button>
      </li>
      <li v-for="{ page, isActive } in paginate" :key="page">
        <button
          @click="handleClickPage(page)"
          :data-page-button="page"
          :class="{ active: isActive}"
        >
          {{ page }}
        </button>
      </li>
      <li v-if="!isLastPage">
        <button
          @click="handleClickPage(totalPages)"
          :data-last-page="totalPages"
        >
          &gt;&gt;
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
    isFirstPage() {
      return this.activePage === 1;
    },
    isLastPage() {
      return this.activePage === this.totalPages;
    },
    paginate() {
      const buttonsData = this.getButtonsText()
        .map((pageNumber) => ({ page: pageNumber, isActive: pageNumber === this.activePage }));

      return buttonsData;
    },
  },
  methods: {
    getButtonsText() {
      const { activePage, totalPages, totalButtons } = this;
      const remainingPages = totalPages - activePage;

      if (remainingPages < totalButtons - 1) {
        const lastButton = totalPages + 1;
        let firstButton = totalButtons - lastButton;

        if (totalPages > totalButtons) {
          firstButton = lastButton - totalButtons;
        }

        return range(firstButton, lastButton);
      }

      const middleButton = Math.floor(totalButtons / 2);
      if (middleButton < activePage && middleButton < remainingPages) {
        return range(activePage - middleButton, activePage + middleButton + 1);
      }

      return range(activePage, activePage + totalButtons);
    },
    handleClickPage(page) {
      this.$emit('clicked-page', page);
    },
  },
};
</script>

<style lang="scss" scoped>
.search-paginate {
  display: inline-block;

  ul {
    display: flex;
  }

  [data-first-page],
  [data-last-page] {
    background: $dark-grey;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 14px;
    padding: 8px 14px;

    &:hover {
      background: $light-grey;
    }
  }

  [data-page-button] {
    background: white;
    border: 1px solid $dark-grey;
    border-radius: 5px;
    color: $dark-grey;
    margin: 0 5px;
    padding: 8px 14px;

    &.active,
    &:hover {
      background: $main-color;
      border-color: #fff;
      color: #fff;
    }
  }
}
</style>
