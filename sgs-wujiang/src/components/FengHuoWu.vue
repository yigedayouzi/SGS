<template>
  <div class="fenghuowu">
    <div class="wujiang">
      <jiang-w></jiang-w>
    </div>
    <div class="wujiang">
      <ya-s></ya-s>
    </div>
    <div class="wujiang">
<wei-y></wei-y>
    </div>
    <div class="wujiang">
      <wang-j></wang-j>
    </div>
    <div class="wujiang">
      <xu-y></xu-y>
    </div>
    <div class="wujiang">
      <zhang-x></zhang-x>
    </div>
    <div class="wujiang">
      <cai-wen-j></cai-wen-j>
    </div>
    <div class="wujiang">
      <yuan-s></yuan-s>
    </div>
    <div class="wujiang">
      <wo-long-zhu-g></wo-long-zhu-g>
    </div>

  </div>
</template>
<script>

import JiangW from "./JiangW.vue";
import WangJ from "./WangJ.vue";
import YaS from "./YaS.vue";
import XuY from "./XuY.vue";
import ZhangX from "./ZhangX.vue";
import CaiWenJ from './CaiWenJ.vue';
import WeiY from './WeiY.vue';
import YuanS from './YuanS.vue';
import WoLongZhuG from './WoLongZhuG.vue';

export default {
  name: "FengHuoWu",
  components: {
    JiangW,
    ZhangX,
    XuY,
    YaS,

    WangJ,
    CaiWenJ,
    WeiY,
    YuanS,
    WoLongZhuG,
  },
};
</script>

<style scoped>
.fenghuowu {
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
  background-color: rgb(202, 48, 168);
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
