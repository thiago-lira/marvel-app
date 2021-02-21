<template>
  <div class="toggle">
    <a
      @click.prevent="handleClick"
      :class="{ active: currentActive }"
      href="#"
    />
  </div>
</template>

<script>
export default {
  name: 'Toggle',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentActive: this.active,
    };
  },
  methods: {
    handleClick() {
      this.currentActive = !this.currentActive;
      this.$emit('toggle');
    },
  },
};
</script>

<style lang="scss" scoped>
.toggle {
  margin-left: 15px;
  a {
    display: inline-block;
    background: $light-grey;
    border: 5px solid $light-grey;
    border-radius: 35px;
    height: 20px;
    position: relative;
    width: 50px;

    &:before {
      background: $main-color;
      box-shadow: 0 2px 3px lighten($main-color, 15%);
      content: '';
      height: 20px;
      width: 20px;
      position: absolute;
      border-radius: 50%;
    }

    &.active:before {
      right: 0;
    }
  }
}
</style>
