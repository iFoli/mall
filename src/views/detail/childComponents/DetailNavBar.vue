<template>
  <div>
    <!-- 导航栏 -->
    <nav-bar class="detail-nav">
      <template #left>
        <div @click="backClick">
          <img src="~assets/img/common/back.svg" class="back" />
        </div>
      </template>
      <template #center>
        <div class="title">
          <div v-for="(item,index) in title" :key="index" class="title-item"
          :class="{active: index === currentIndex}"
          @click="itemClick(index)">{{item}}</div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('titleClick', index)
    },
    backClick() {
      this.$router.back();
    }
  },
  components: {
    NavBar
  }
};
</script>

<style scoped>
@import "~assets/css/base.css";
.detail-nav {
  color: black;
}
.title {
  display: flex;
  font-size: 13px;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-tint);
}
.back {
  margin-top: 10px;
}
</style>
