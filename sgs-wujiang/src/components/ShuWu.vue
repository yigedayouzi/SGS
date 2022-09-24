<template>
  <div class="shuwu">
    <div class="wujiang">
      <jiang-w></jiang-w>
    </div>
    <div class="wujiang">
      <chen-z></chen-z>
    </div>
    <div class="wujiang">
      <huang-yue-y></huang-yue-y>
    </div>
    <div class="wujiang">
      <wei-y></wei-y>
    </div>
    <div class="wujiang">
      <wo-long-zhu-g></wo-long-zhu-g>
    </div>
    <div class="wujiang">
      <hua-m></hua-m>
    </div>
    <div class="wujiang">
      <jie-guan-y></jie-guan-y>
    </div>
    <div class="wujiang">
      <jie-liu-b></jie-liu-b>
    </div>
    <div class="wujiang">
      <mou-huang-z></mou-huang-z>
    </div>
<div class="wujiang">
      <guan-y></guan-y>
    </div>
  </div>
</template>
<script>
import ChenZ from "./ChenZ.vue";
import HuaM from "./HuaM.vue";
import HuangYueY from "./HuangYueY.vue";
import JiangW from "./JiangW.vue";
import JieGuanY from './JieGuanY.vue';
import JieLiuB from './JieLiuB.vue';
import WeiY from "./WeiY.vue";
import WoLongZhuG from "./WoLongZhuG.vue";
import MouHuangZ from "./MouHuangZ.vue";
import GuanY from './GuanY.vue';

export default {
  name: "ShuWu",
  components: {
    JiangW,
    ChenZ,
    HuangYueY,
    WeiY,
    WoLongZhuG,
    HuaM,
    JieGuanY,
    JieLiuB,
    MouHuangZ,
    GuanY,
  },
};
</script>

<style scoped>
.shuwu {
  width: 100%;
  height: 100%;
  border-radius: 30px;
  margin: 1px 1px 1px 1px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: auto;
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.wujiang {
  background-color: rgb(208, 36, 39);
  margin: 50px;
  height: 350px;
  width: 250px;
  border: solid 5px white;
  border-radius: 10px;
  box-shadow: 2px 2px 5px #000;
}
.wujiang:hover {
  border-color: rgb(233, 94, 43);
}
</style>
