<template>
  <div class="toggle">
    <a
      @click.prevent="handleClick"
      :class="{ active: currentActive }"
      data-cy="toggle"
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
    background: #e4e5e9;
    border: 5px solid #e4e5e9;
    border-radius: 35px;
    display: inline-block;
    height: 20px;
    position: relative;
    width: 50px;

    &:before {
      background: $main-color;
      border-radius: 50%;
      box-shadow: 0 2px 3px lighten($main-color, 15%);
      content: '';
      height: 20px;
      position: absolute;
      right: 60%;
      transition: all 0.5s;
      width: 20px;
    }

    &.active:before {
      right: 0;
    }
  }
}
</style>
