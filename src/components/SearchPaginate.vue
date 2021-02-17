<template>
  <section class="search-paginate">
    <ul>
      <li v-for="page of totalPages" :key="page">
        <button @click="handleClickPage(page)" data-page-button="5">
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
  methods: {
    handleClickPage(page) {
      this.$emit('page-has-clicked', page);
    },
  },
};
</script>
