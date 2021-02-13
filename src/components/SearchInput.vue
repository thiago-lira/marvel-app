<template>
  <div class="search">
    <label class="flex">
      <div>
        <img src="@/assets/magnify.svg" alt="Ícone buscar">
      </div>

      <div>
        <input type="text" :placeholder="placeholder" @keyup="handleChange" />
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  props: {
    placeholder: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleChange({ target }) {
      this.$emit('input', target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  background: #fdecec;
  border-radius: 50px;
  margin: 30px 0;

  label {
    align-items: center;
    display: flex;
    padding: 15px 20px;
  }

  input {
    background: none;
    border: none;
    color: $main-color;
    font-size: 18px;
    padding: 2px;
    margin-left: 20px;
    width: 100%;

    &::placeholder {
      color: $main-color;
      opacity: 0.5;
    }
  }
}
</style>
