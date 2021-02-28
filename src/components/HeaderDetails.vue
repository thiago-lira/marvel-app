<template>
  <header class="container flex">
    <div class="logo">
      <router-link :to="{ name: 'Home' }">
        <img src="@/assets/logo-details.png" alt="Marvel Logo" />
      </router-link>
    </div>

    <div class="search-input">
      <SearchInput
        @input="handleInput"
        placeholder="Procurar por heróis"
      />
    </div>
  </header>
</template>

<script>
import SearchInput from '@/components/SearchInput.vue';

export default {
  name: 'HeaderDetails',
  components: {
    SearchInput,
  },
  methods: {
    handleInput(payload) {
      this.$emit('input', payload);
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background: #e3f8e8;

  .logo {
    max-width: 250px;

    img {
      max-width: 100%;
    }
  }

  .search-input {
    flex-grow: 1;
    margin: 0 15px;

    ::v-deep {
      .search {
        background: #fff;

        label {
          padding: 10px 15px;
        }

        input {
          color: $dark-grey;

          &::placeholder {
            color: $dark-grey;
            opacity: 0.5;
          }
        }
      }
    }
  }

  @media(max-width: 540px) {
    .logo {
      margin-top: 20px;
    }
    &.flex {
      flex-flow: column;
    }
  }
}
</style>
