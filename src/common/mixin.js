import {
  debounce
} from "common/utils";
import {
  POP,
  SELL,
  NEW
} from "common/const";

import BackTop from "components/content/backtop/BackTop";
// 推荐数据的混入
export const itemImageListenerMixin = {
  data() {
    return {
      itemImageListener: null
    }
  },
  mounted() {
    // 接受GoodsItem.vue传来的方法
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.itemImageListener = () => {
      refresh();
    }
    this.$bus.$on("itemImageLoad", this.itemImageListener);
  }
}
// 回到顶部组件混入
export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    // 回到顶部方法
    backTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
  }
}

export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}
