<template>
  <div id="detail">
    <!-- 导航栏 -->
    <detail-nav-bar @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <!-- Scroll-view -->
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
      <!-- 轮播图 -->
      <detail-swiper :topImages="topImages"></detail-swiper>
      <!-- 基础信息数据 -->
      <detail-base-info :goods="goods"></detail-base-info>
      <!-- 商家信息 -->
      <detail-shop-info :shop="shop"></detail-shop-info>
      <!-- 获取商品信息 -->
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <!-- 商品参数信息 -->
      <detail-params-info :itemParams="itemParams" ref="itemParams"></detail-params-info>
      <!-- 商品评论信息 -->
      <detail-comment-info :comment="comment" ref="comment"></detail-comment-info>
      <!-- 推荐信息 -->
      <goods-list :goods="recommands" ref="recommands"></goods-list>
    </scroll>
    <!-- 底部导航栏 -->
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <!-- 回到顶部按钮 -->
    <back-top @click.native="backTop" v-show="isShowBackTop" />
  </div>
</template>

<script>
import DetailNavBar from "./childComponents/DetailNavBar";
import DetailSwiper from "./childComponents/DetailSwiper";
import DetailBaseInfo from "./childComponents/DetailBaseInfo";
import DetailShopInfo from "./childComponents/DetailShopInfo";
import DetailGoodsInfo from "./childComponents/DetailGoodsInfo";
import DetailParamsInfo from "./childComponents/DetailParamsInfo";
import DetailCommentInfo from "./childComponents/DetailCommentInfo";
import DetailBottomBar from "./childComponents/DetailBottomBar";

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";

import { debounce } from "common/utils";
import { itemImageListenerMixin, backTopMixin } from "common/mixin";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend
} from "network/detail";
import { mapActions } from "vuex";
export default {
  name: "Detail",
  mixins: [itemImageListenerMixin, backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      itemParams: {},
      comment: {},
      recommands: [],
      themTopsY: [],
      getThemeTopsY: null,
      currentIndex: 0,
      message: "",
      isShow: false
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    GoodsList
  },
  methods: {
    ...mapActions(["addCart"]),
    imageLoad() {
      this.$refs.scroll.refresh();
      this.getThemeTopsY();
    },
    titleClick(index) {
      console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themTopsY[index], 200);
    },
    contentScroll(position) {
      // 1.返回顶部按钮(图标)显示和隐藏
      this.isShowBackTop = -position.y > 1000;
      const positionY = -position.y;
      for (let i = 0; i < this.themTopsY.length - 1; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.themTopsY[i] &&
          positionY < this.themTopsY[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
    },
    addToCart() {
      // 1.创建对象
      const product = {};
      // 2.对象信息
      product.iid = this.iid;
      product.imgURL = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.newPrice = this.goods.nowPrice;
      // 3.添加到Store中
      this.addCart(product).then(res => {
        // this.isShow = true;
        // this.message = res;

        // setTimeout(() => {
        //   this.isShow = false;
        //   this.message = "";
        // },1500);
        console.log(this.$toast);

        this.$toast.show(res , 2000)
      });
      // this.$store.dispatch("addCart", product);
    }
  },
  created() {
    // 1.保存传入iid
    this.iid = this.$route.params.iid;
    // 2.根据iid请求数据
    getDetail(this.iid).then(res => {
      let data = res.result;
      console.log(data);
      // 1.获取轮播图数据
      this.topImages = data.itemInfo.topImages;
      // 2.获取商品详情数据(面向对象思想)
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 3.商家信息
      this.shop = new Shop(data.shopInfo);
      // 4.获取商品信息
      this.detailInfo = data.detailInfo;
      // 5.取出参数信息
      this.itemParams = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 6.取出评论信息
      this.comment = data.rate;
    });
    // 3.请求推荐数据
    getRecommend().then(res => {
      this.recommands = res.data.list;
    });

    this.getThemeTopsY = debounce(() => {
      this.themTopsY = [];
      this.themTopsY.push(0);
      this.themTopsY.push(this.$refs.itemParams.$el.offsetTop - 44);
      // 有的商品可能没有评论，所以需要判断
      if (this.$refs.comment.$el.offsetTop != null) {
        this.themTopsY.push(this.$refs.comment.$el.offsetTop - 44);
      } else {
        this.themTopsY.push(this.$refs.recommands.$el.offsetTop - 44);
      }
      this.themTopsY.push(this.$refs.recommands.$el.offsetTop - 44);
      // 在数组尾部添加一个最大值
      this.themTopsY.push(Number.MAX_VALUE);
      console.log(this.themTopsY);
    }, 100);
  },
  mounted() {},
  // 在destroyed中取消
  destroyed() {
    this.$bus.$off("itemImageLoad", this.itemImageListener);
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.content {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
</style>
