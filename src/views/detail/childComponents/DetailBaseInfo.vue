<template>
  <div v-if="Object.keys(goods).length !== 0" id="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="new-price">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
    <!-- 判断是否有discount，没有就不显示 -->
      <span class="discount"
      v-if="goods.discount !=''"
      :style="{backgroundColor:goods.discountBgColor}">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span v-for=" index in goods.services.length - 1" :key="index"  >
        <img :src="goods.services[index-1].icon" />
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  data() {
    return {
      discountBgColor: {
        backgroundColor: this.goods.discountBgColor
      }
    };
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  },
};
</script>

<style scoped>
@import "../../../assets/css/base.css";
#base-info {
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.info-title {
  padding: 10px 10px;
  font-size: 16px;
  color: black;
  font-weight: 500;
}
.info-price {
  padding-left: 10px;
}
.info-price .new-price {
  font-size: 19px;
  color: var(--color-tint);
}
.info-price .old-price {
  padding: 5px;
  font-size: 10px;
  text-decoration: line-through;
}
.discount {
  /*让元素上浮一些: 使用相对定位即可*/
  position: relative;
  top: -8px;
  padding: 2px 5px;
  font-size: 12px;
  color: white;
  border-radius: 8px;
}
.info-other {
  display: flex;
  padding: 5px 8px;
  margin-top: 10px;
  justify-content: space-between;
  font-size: 10px;
  color: #ccc;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info-service {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
  font-size: 10px;
}
.info-service img {
  width: 10px;
  height: 10px;
}
</style>
