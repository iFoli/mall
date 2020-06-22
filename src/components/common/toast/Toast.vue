<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    message: {
      type: String,
      default: ""
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    show(message, durations) {
      this.isShow = true;
      this.message = message;

      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, durations);
    }
  }
};
</script>

<style scoped>
.toast {
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  padding: 8px 10px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
}
</style>
