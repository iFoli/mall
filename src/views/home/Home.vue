<template>
  <div id="home">
    <!-- 导航栏 -->
    <nav-bar class="home-nav">
      <template #center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <!-- tab-control -->
    <tab-control :titles="['流行','新款','精选']"
      @itemClick="itemClick"
      ref="TabControl1"
      class="fixed"
      v-show="isTabShow"></tab-control>
    <!-- scroll -->
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <!-- 父组件数据传子组件props -->
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
      <recommand-views :recommand="recommands"></recommand-views>
      <feature-view></feature-view>
      <!-- 绑定itemClick方法 -->
      <tab-control :titles="['流行','新款','精选']"
      @itemClick="itemClick"
      ref="TabControl2"></tab-control>
      <goods-list :goods="showGoods" />
    </scroll>
    <!-- 1. .native可以监听原生组件的点击
         2. 通过v-show来显示或隐藏图标-->
    <back-top @click.native="backTop" v-show="isShowBackTop" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";

import HomeSwiper from "./childrenComponents/HomeSwiper";
import RecommandViews from "./childrenComponents/RecommandViews";
import FeatureView from "./childrenComponents/FeatureView";

import { getHomeMultiData, getHomeData } from "network/home";
import { debounce } from "common/utils";
import { itemImageListenerMixin, backTopMixin } from "common/mixin";


export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommandViews,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
  },
  mixins: [itemImageListenerMixin ,backTopMixin],
  data() {
    return {
      banners: [],
      recommands: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabShow: false,
      saveY: 0,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    // 1.请求多个数据
    // 函数调用 -> 压入函数栈(保存函数调用过程中所有变量)
    // 函数调用结束 -> 弹出函数栈(释放函数所有的变量)
    this.getHomeMultiData();
    // 2.请求goods数据
    this.getHomeData("pop");
    this.getHomeData("new");
    this.getHomeData("sell");
  },
  activated() {
    // 活跃时回到原来的位置
    console.log("A:"+this.saveY);

    this.$refs.scroll.scrollTo(0, this.saveY);
    this.$refs.scroll.refresh();

  },
  deactivated(){
    // 离开时记录之前的位置
    this.saveY = this.$refs.scroll.getScrollY();
    console.log("D:"+this.saveY);

  },
  mounted() {},
  methods: {
    /**
     *  业务逻辑方法
     */
    // 1.tab-control点击事件
    itemClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      };
      this.$refs.TabControl1.currentIndex = index;
      this.$refs.TabControl2.currentIndex = index;

    },

    // 3.回到顶部图标的隐藏或显示
    contentScroll(position) {
      // 1.返回顶部按钮(图标)显示和隐藏
      this.isShowBackTop = -position.y > 1000;
      // 2.滚动的高度比tab-control的值大时，第一个tab-control显示
      this.isTabShow = (-position.y) > this.tabOffsetTop;
    },
    // 4.上拉加载更多
    loadMore() {
      this.getHomeData(this.currentType);
    },
    // 5.监听轮播图是否加载完成
    swiperImageLoad() {
      // 获取TabControl组中元素的高度
       this.tabOffsetTop = this.$refs.TabControl2.$el.offsetTop
    },

    /**
     * 网络请求封装的方法
     */
    // 1.获取轮播图数据
    getHomeMultiData() {
      getHomeMultiData().then(res => {
        this.banners = res.data.banner.list;
        this.recommands = res.data.recommend.list;
      });
    },
    // 2.获取商品数据
    getHomeData(type) {
      const page = this.goods[type].page + 1;
      getHomeData(type, page).then(res => {
        // .push(...数组解析，将数组中的每个元素，一个个拿出来，然后push到数组)
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // 注意是$refs  不是ref
        this.$refs.scroll.finishPullUp();
      });
    }
  }
};
</script>

<style scoped>
@import "../../assets/css/base.css";
#home {
  position: relative;
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
}
.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  overflow: hidden;
}
.fixed{
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 9;
  background-color: #fff;

}
</style>
