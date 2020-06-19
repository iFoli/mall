<template>
    <div class="tab-bar-items" @click="ItemClick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
    <!-- <div class="tab-bar-items">分类</div>
    <div class="tab-bar-items">购物车</div>
    <div class="tab-bar-items">我的</div> -->
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red',
    }
  },
  data(){
    return {
     
    }
  },
  computed: {
    isActive() {
      // indexOf 
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color: this.activeColor}: {}
    }
  },
  methods: {
    ItemClick(){
      this.$router.push(this.path).catch(err => err)
      
    }
  }
};
</script>

<style>
.tab-bar-items {
  flex: 1;
  height: 49px;
  font-size: 14px;
  text-align: center;
}
.tab-bar-items img{
  width: 24px;
  height: 24px;
  margin-bottom: 2px;
  vertical-align: middle;
}
.active{
  color: skyblue;
}
</style>  