<template>
  <section>
    <div v-for="{ id, message } in messages" :key="id" class="message">
      {{ message }}
    </div>
  </section>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    hideAfter: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    removeMessage() {
      setTimeout(() => {
        this.messages.shift();
      }, 3000);
    },
    addMessage(message) {
      this.messages.push({
        id: Date.now(),
        message,
      });
      this.removeMessage();
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  position: fixed;
  top: 0;

  @media (min-width: 540px) {
    right: 0;
    max-width: 300px;
  }
}

.message {
  background: #ff4746;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 3px 3px #999;
  border: 1px solid #900;
  font-size: 14px;
}
</style>
