<template>
  <header>
    <div class="logo">
      <img src="@/assets/logo.svg" alt="Marvel Logo">
    </div>

    <div>
      <h1>
        EXPLORE O UNIVERSO
      </h1>

      <p>
        Mergulhe no domínio deslumbrante de todos personagens clássicos que você ama - e aqueles
        que você descobrirá em breve
      </p>
    </div>

    <SearchInput @input="handleInput" placeholder="Procurar por heróis" />
  </header>
</template>

<script>
import SearchInput from '@/components/SearchInput.vue';

export default {
  name: 'HeaderHome',
  components: {
    SearchInput,
  },
  methods: {
    handleInput(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  margin: auto;
  max-width: 865px;
  min-width: 375px;
  text-align: center;

  img {
    display: inline;
  }

  h1 {
    color: $grey;
    margin: 15px 0;
  }

  p {
    color: $grey;
    font-size: 14px;
  }
}
</style>
