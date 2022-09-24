<template>
  <div class="qunxiongwu">
    <div class="wujiang">
      <xu-y></xu-y>
    </div>
    <div class="wujiang">
      <zhang-x></zhang-x>
    </div>
    <div class="wujiang">
      <mou-liu-c></mou-liu-c>
    </div>
    <div class="wujiang">
      <cai-wen-j></cai-wen-j>
    </div>
    <div class="wujiang">
      <yuan-s></yuan-s>
    </div>
    <div class="wujiang">
      <jie-li-r></jie-li-r>
    </div>
    <div class="wujiang">
      <qu-y></qu-y>
    </div>
    <div class="wujiang">
      <li-j></li-j>
    </div>
    <div class="wujiang">
      <liu-y></liu-y>
    </div>
      <div class="wujiang">
     <yang-b></yang-b>
    </div>
      <div class="wujiang">
    <ju-sh></ju-sh>
    </div>
    
  </div>
</template>
<script>
import CaiWenJ from "./CaiWenJ.vue";
import MouLiuC from "./MouLiuC.vue";
import XuY from "./XuY.vue";
import YuanS from "./YuanS.vue";
import ZhangX from "./ZhangX.vue";
import JieLiR from "./JieLiR.vue";
import QuY from './QuY.vue';
import LiJ from './LiJ.vue';
import LiuY from './LiuY.vue';
import YangB from './YangB.vue';
import JuSh from './JuSh.vue';

export default {
  name: "QunXiongWu",
  components: {
    XuY,
    ZhangX,
    MouLiuC,
    CaiWenJ,
    YuanS,
    JieLiR,
    QuY,
    LiJ,
    LiuY,
    YangB,
    JuSh,
   
  },
};
</script>

<style scoped>
.qunxiongwu {
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
  background-color: rgb(201, 212, 213);
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
