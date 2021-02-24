<template>
  <div class="logo">
    <router-link :to="{ name: 'Home' }">
      <img src="@/assets/logo.svg" alt="Marvel Logo">
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'LogoApp',
};
</script>
