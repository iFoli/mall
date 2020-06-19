<template>
      <tab-bar>
      <tab-bar-item path="/home" activeColor="skyblue">

        <template #item-icon>
          <img src="~assets/img/tabbar/home.svg">
        </template>
        <template #item-icon-active>
          <img src="~assets/img/tabbar/home_active.svg">
        </template>
        <template #item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/category" activeColor="skyblue">
        <template #item-icon>
          <img src="~assets/img/tabbar/category.svg" >
        </template>
        <template #item-icon-active>
          <img src="~assets/img/tabbar/category_active.svg">
        </template>
        <template #item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/cart" activeColor="skyblue">
        <template #item-icon>
          <img src="~assets/img/tabbar/cart.svg">
        </template>
        <template #item-icon-active>
          <img src="~assets/img/tabbar/cart_active.svg" alt="">
        </template>
        <template #item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/profile" activeColor="skyblue">
        <template #item-icon>
          <img src="~assets/img/tabbar/profile.svg" alt />
        </template>
        <template #item-icon-active>
          <img src="~assets/img/tabbar/profile_active.svg" alt="">
        </template>
        <template #item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>

    </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

