<template>
  <div class="shenwu">
    <div class="wujiang">
      <shen-c></shen-c>
    </div>
    <div class="wujiang">
      <shen-gan-n></shen-gan-n>
    </div>
    <div class="wujiang">
      <shen-sun-c></shen-sun-c>
    </div>
    <div class="wujiang">
      <shen-lv-b></shen-lv-b>
    </div>
    <div class="wujiang">
      <shen-zhu-g></shen-zhu-g>
    </div>
    <div class="wujiang">
      <shen-zao-y></shen-zao-y>
    </div>
    <div class="wujiang">
      <shen-tai-shi-c></shen-tai-shi-c>
    </div>
    <div class="wujiang">
      <shen-xun-y></shen-xun-y>
    </div>
    <div class="wujiang">
      <shen-zhang-l></shen-zhang-l>
    </div>
    <div class="wujiang">
      <shen-lu-x></shen-lu-x>
    </div>
     <div class="wujiang">
      <shen-guo-j></shen-guo-j>
    </div>
  </div>
</template>
<script>
import ShenGanN from "./ShenGanN.vue";
import ShenC from "./ShenC.vue";
import ShenSunC from './ShenSunC.vue';
import ShenLvB from './ShenLvB.vue';
import ShenZhuG from './ShenZhuG.vue';
import ShenZaoY from './ShenZaoY.vue';
import ShenTaiShiC from './ShenTaiShiC.vue';
import ShenXunY from './ShenXunY.vue';
import ShenZhangL from './ShenZhangL.vue';
import ShenLuX from './ShenLuX.vue';
import ShenGuoJ from './ShenGuoJ.vue';
export default {
  name: "ShenWu",
  components: {
    ShenC,
    ShenGanN,
    ShenSunC,
    ShenLvB,
    ShenZhuG,
    ShenZaoY,
    ShenTaiShiC,
    ShenXunY,
    ShenZhangL,
    ShenLuX,
    ShenGuoJ,
  },
};
</script>

<style scoped>
.shenwu {
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
  background-color: rgb(244, 214, 107);
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
