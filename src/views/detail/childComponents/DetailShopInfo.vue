<template>
  <div id="shop-info">
    <div class="shop-avator">
      <img :src="shop.logo" alt />
      <span class="shop-name">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-item shop-item-left">
        <div class="info-sell">
          <div class="sell-text">{{shop.sells}}</div>
          <div class="sell-name">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-text">{{shop.goodsCount}}</div>
          <div class="goods-name">全部宝贝</div>
        </div>
      </div>
      <div class="shop-item shop-item-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td class="info-apprail">{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}">
              <span>{{item.isBetter ? '高':'低'}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
          <div class="shop-bottom">
        <div class="enter-shop">进店逛逛</div>
      </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.shop-avator {
  margin: 20px 10px;
}
.shop-avator img {
  width: 45px;
  height: 45px;
}
.shop-name {
  position: relative;
  padding-left: 10px;
  top: -10px;
}
.shop-middle {
  display: flex;
  margin-top: 15px;
  align-items: center;
}
.shop-item {
  flex: 1;
}
.shop-item-left {
  display: flex;
  justify-content: space-evenly;
  color: #333;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.sell-text,
.goods-text {
  font-size: 18px;
  font-weight: 600;
}
.sell-name,
.goods-name {
  margin-top: 10px;
  font-size: 12px;
}

.shop-item-right {
  display: flex;
  justify-content: space-evenly;
  font-size: 13px;
  color: #333;
}
.shop-item-right table {
  width: 120px;
  margin-left: 30px;
}
.shop-item-right table td {
  padding: 5px 0;
}
.shop-item-right .score {
  color: #5ea732;
}
.shop-item-right .score-better {
  color: #f13e3a;
}
.shop-item-right .better span {
  background-color: #5ea732;
  color: #fff;
}
.shop-item-right .better-more span {
  background-color: #f13e3a;
}
.shop-bottom {
  text-align: center;
  margin-top: 10px;
}

.enter-shop {
  display: inline-block;
  font-size: 14px;
  background-color: #f2f5f8;
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
}
</style>
