<template>
  <grid-view>
    <goods-list-item v-for="(item, index) in categoryDetail" :key="index" :goods="item"></goods-list-item>
  </grid-view>
</template>

<script>
import GridView from "components/common/gridView/GridView";
import GoodsListItem from "components/content/goods/GoodsItem";

export default {
  name: "TabContentDetail",
  components: {
    GridView,
    GoodsListItem
  },
  props: {
    categoryDetail: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  created() {
    console.log(this.categoryDetail);
  },
  mounted() {
    console.log(this.categoryDetail);
  }
};
</script>

<style scoped>
</style>
