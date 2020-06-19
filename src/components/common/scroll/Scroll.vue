<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null
    };
  },
  props: {
    // 接收组件传来的probeType
    probeType: {
      type: Number,
      default() {
        return 0;
      }
    },
    pullUpLoad: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  mounted() {
    // 1.在mounted中创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      // 组件可以点击属性
      click: true,
      // 屏幕滑动监听 0 1 不侦听， 2 惯性监听  3
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });
    // 2.监听滚动的位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", position => {
        this.$emit("scroll", position);
      });
    }
    // 3.监听上拉加载事件
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    // 回到顶部方法，调用scroll中的scrollTo(x,y,time)
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp() && this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh() && this.scroll.refresh();
    }
  }
};
</script>

<style scoped>
</style>
