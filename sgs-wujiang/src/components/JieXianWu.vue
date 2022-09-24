<template>
  <div class="jiexianwu">
    <div class="wujiang">
      <XuSh></XuSh>
    </div>
    <div class="wujiang">
      <xia-h></xia-h>
    </div>
    <div class="wujiang">
      <jie-zhu-r></jie-zhu-r>
    </div>
    <div class="wujiang">
      <jie-bu-lian-s></jie-bu-lian-s>
    </div>
    <div class="wujiang">
      <jie-cao-z></jie-cao-z>
    </div>
    <div class="wujiang">
      <jie-zhong-h></jie-zhong-h>
    </div>
    <div class="wujiang">
      <jie-guan-y></jie-guan-y>
    </div>
    <div class="wujiang">
      <jie-zhen-j></jie-zhen-j>
    </div>
    <div class="wujiang">
      <jie-liu-b></jie-liu-b>
    </div>
    <div class="wujiang">
      <jie-sun-shang-x></jie-sun-shang-x>
    </div>
    <div class="wujiang">
      <jie-sun-q></jie-sun-q>
    </div>
    <div class="wujiang">
      <jie-li-r></jie-li-r>
    </div>

  </div>
</template>
<script>
import XuSh from "../components/XuSh.vue";
import JieBuLianS from './JieBuLianS.vue';
import JieCaoZ from './JieCaoZ.vue';
import JieGuanY from './JieGuanY.vue';
import JieLiR from './JieLiR.vue';
import JieLiuB from './JieLiuB.vue';
import JieSunQ from './JieSunQ.vue';
import JieSunShangX from './JieSunShangX.vue';
import JieZhenJ from './JieZhenJ.vue';
import JieZhongH from './JieZhongH.vue';
import JieZhuR from "./JieZhuR.vue";
import XiaH from "./XiaH.vue";
export default {
  name: "JieXianWu",
  components: {
    XuSh,
    XiaH,
    JieZhuR,
    JieBuLianS,
    JieCaoZ,
    JieZhongH,
    JieGuanY,
    JieZhenJ,
    JieLiuB,
    JieSunShangX,
    JieSunQ,
    JieLiR,
  },
};
</script>

<style scoped>
.jiexianwu {
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
  background-color: rgb(43, 163, 119);
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
