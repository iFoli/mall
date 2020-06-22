<template>
  <div class="goodsList">
    <goods-item v-for="(item,index) in goods" :key="index" :goodsItem="item"/>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem'
  export default {
    name: "GoodsList",
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      GoodsItem
    },
  }
</script>

<style>
  .goodsList{
    display: flex;
    /* 设置包裹 */
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>
