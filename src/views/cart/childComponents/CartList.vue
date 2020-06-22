<template>
  <scroll ref="scroll" class="content">
    <cart-list-item
      v-for="(item, index) in carList"
      :key="index"
      :item-info="item"
      class="cart-item"
    ></cart-list-item>
  </scroll>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import CartListItem from "./CartListItem";
import { mapGetters } from "vuex";

export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  activated() {
    console.log("----");

    this.$refs.scroll.refresh();
  },
  computed: {
    ...mapGetters(["carList"])
  }
};
</script>

<style scoped>
.content {
  height: calc(100% - 44px - 49px);

  overflow: hidden;
}
.cart-item {
  height: 100%;
}
</style>
