<template>
  <swiper>
    <!-- v-for需要绑定key   :key = "" -->
    <swiper-Item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" @load="swiperImageLoad" />
      </a>
    </swiper-Item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  // 子组件使用props传出banners
  props: {
    banners: {
      type: Array,
      // 默认值必须是函数
      default() {
        return [];
      }
    }
  },
  data() {
    return{
      isLoad: false
    }
  },
  methods: {
    swiperImageLoad() {
      // 因为轮播图有4张图片发送了4次的事件
      // 通过isLoad来判断是否发送过事件
      if(!this.isLoad){
      this.$emit('swiperImageLoad');
      this.isLoad = true;
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>
