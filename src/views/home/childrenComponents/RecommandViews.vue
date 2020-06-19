<template>
  <div class="recommand-views">
    <div  v-for="(item,index) in recommand" :key="index" class="recommand-item">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
        <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RecommandViews',
    props: {
      recommand:{
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style>
  .recommand-views{
    display: flex;
    padding: 10px 0 30px;
    width: 100%;
    text-align: center;
    font-size: 14px;
    border-bottom: 8px solid #eee;
  }
  .recommand-item{
    flex: 1;
  }
  .recommand-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;

  }
</style>
