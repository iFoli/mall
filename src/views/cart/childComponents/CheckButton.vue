<template>
    <div>
      <div class="check-button" :class="{'selector-active': isCheck}">
        <img src="~/assets/img/cart/tick.svg" alt="">
      </div>
    </div>
</template>

<script>
	export default {
		name: "CheckButton",
    props: {
		  isCheck: {
		    type: Boolean,
        default: true
      }
    },
	}
</script>

<style scoped>
  .check-button {
    border-radius: 50%;
    border: 2px solid #aaa;
  }

  .selector-active {
    background-color: #ff8198;
    border-color: #ff8198;
  }
</style>
