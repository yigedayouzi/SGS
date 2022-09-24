<template>
  <div class="weiwu">
    <div class="wujiang">
      <CaoC></CaoC>
    </div>
    <div class="wujiang">
      <xia-h></xia-h>
    </div>
    <div class="wujiang">
      <zhang-chun-h></zhang-chun-h>
    </div>
    <div class="wujiang">
      <wang-y></wang-y>
    </div>
    <div class="wujiang">
      <wang-j></wang-j>
    </div>
    <div class="wujiang">
      <jie-cao-z></jie-cao-z>
    </div>
    <div class="wujiang">
      <jie-zhong-h></jie-zhong-h>
    </div>
    <div class="wujiang">
      <cao-chon></cao-chon>
    </div>
    <div class="wujiang">
      <jie-zhen-j></jie-zhen-j>
    </div>
    <div class="wujiang">
      <zhong-y></zhong-y>
    </div>
    <div class="wujiang">
      <cao-r></cao-r>
    </div>

  </div>
</template>
<script>
import CaoC from "./CaoC.vue"
import CaoChon from './CaoChon.vue';
import CaoR from './CaoR.vue';
import JieCaoZ from './JieCaoZ.vue';
import JieZhenJ from './JieZhenJ.vue';
import JieZhongH from './JieZhongH.vue';
import WangJ from './WangJ.vue';
import WangY from './WangY.vue';
import XiaH from './XiaH.vue';
import ZhangChunH from './ZhangChunH.vue';
import ZhongY from './ZhongY.vue';
export default {
  name: "WeiWu",
  components: {
    CaoC,
    XiaH,
    ZhangChunH,
    WangY,
    WangJ,
    JieCaoZ,
    JieZhongH,
    CaoChon,
    JieZhenJ,
    ZhongY,
    CaoR,
  },
};
</script>

<style scoped>
.weiwu {
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
  background-color: rgb(153, 32, 187);
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
