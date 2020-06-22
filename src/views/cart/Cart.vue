<template>
  <div class="cart">
    <!-- 1.导航栏 -->
    <nav-bar class="car-bar">
      <template #center>
        <div>购物车({{carLength}})</div>
      </template>
    </nav-bar>
    <!-- 2. -->
    <cart-list></cart-list>
    <!-- 3 -->
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import CartList from "./childComponents/CartList"
import CartListItem from "./childComponents/CartListItem"
import BottomBar from "./childComponents/BottomBar"

import { mapGetters } from 'vuex'
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    BottomBar
  },
  computed: {
    ...mapGetters(['carLength','carList'])
  }
};
</script>

<style scoped>
@import "../../assets/css/base.css";
.cart {
  height: 100vh;
}
.car-bar {
  background-color: var(--color-tint);
}
</style>
