<template>
  <div class="goodsItem">
    <!-- 1.通过@load来监听图片加载完成 -->
    <img :src="goodsItem.show.img" @load="itemImageLoad" />
    <div class="goodsInfo">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    itemImageLoad() {
      // 2.通过事件总线$bus.$emit()发出事件
      this.$bus.$emit('itemImageLoad');
    }
  }
};
</script>

<style scoped>
.goodsItem {
  padding-bottom: 40px;
  position: relative;
  width: 150px;
}
.goodsItem img {
  width: 100%;
  border-radius: 5px;
}
.goodsInfo {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goodsInfo p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goodsInfo .price {
  color: pink;
  margin-right: 20px;
}
.goodsInfo .collect {
  position: relative;
}
.goodsInfo .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}

</style>
