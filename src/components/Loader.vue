<template>
  <div class="loader flex" data-cy="loader">
    <div class="loader-content">
      <img src="@/assets/marvel-icon.png" alt="Marvel icon" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loader',
};
</script>

<style lang="scss" scoped>
.loader {
  align-items: center;
  height: 72px;

  &-content img {
    animation: loading 1s infinite ease-in-out;
  }
}

@keyframes loading {
  0% {
    height: 72px;
  }

  50% {
    height: 45px;
  }

  100% {
    height: 72px;
  }
}
</style>
