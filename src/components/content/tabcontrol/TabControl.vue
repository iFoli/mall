<template>
  <div class="tab-control">
    <!-- 1.v-for循环获取父组件传来的titles
         2.:class动态绑定class
         3.@click处理点击事件(也是子传父事件) -->
    <div v-for="(item,index) in titles" :key="index"
    class="tab-items" :class="{active: index === currentIndex}"
    @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    data() {
      return{
        currentIndex : 0
      }
    },
    methods: {
      itemClick(index){
        this.currentIndex = index
        // $eimt()发射自定义事件
        this.$emit('itemClick',index)
      }
    },
    props: {
      titles: {
        type: Array,
        default(){
          return [];
        }
      }
    }
  }
</script>

<style>
  .tab-control{
    display: flex;
    padding: 10px 0;
    text-align: center;
  }
  .active span{
    padding: 5px;
    border-bottom: 2px solid var(--color-tint);
  }
  .active{
    color: var(--color-high-text);
  }
  .tab-items{
    flex: 1;
  }
</style>
