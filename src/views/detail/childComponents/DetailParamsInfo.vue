<template>
  <div>
    <div class="param-info" v-if="Object.keys(itemParams).length !== 0">
      <!-- 循环遍历itemParams.sizes的数据 -->
      <table v-for="(table, index) in itemParams.sizes" :key="index">
        <tr v-for="(tr, indey) in table" :key="indey">
          <td v-for="(td, indez) in tr" :key="indez" class="info-item">{{td}}</td>
        </tr>
      </table>
      <table class="info-param">
        <tr v-for="(info, index) in itemParams.infos" :key="index">
          <td class="info-param-key">{{info.key}}</td>
          <td class="param-value">{{info.value}}</td>
        </tr>
      </table>
    </div>
    <div class="info-img" v-if="itemParams.image!== ''">
      <img :src="itemParams.image" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamsInfo",
  props: {
    itemParams: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.param-info {
  padding: 21px 17px;
  border-bottom: 5px solid rgba(100, 100, 100, 0.1);
}
.param-info table {
  width: 100%;
  /* 合并table */
  border-collapse: collapse;
}
.param-info table tr td {
  height: 40px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info-param-key {
  /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
  width: 95px;
}
/* 与上层做区分 */
.info-param {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.param-value {
  color: #eb4868;
}
.info-img img {
  width: 100%;
}
</style>
