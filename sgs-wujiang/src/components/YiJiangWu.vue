<template>
  <div class="yijiangwu">
    <div class="wujiang">
      <zhang-chun-h></zhang-chun-h>
    </div>
    <div class="wujiang">
        <wang-y></wang-y>
    </div>
    <div class="wujiang">
      <xu-sh></xu-sh>
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
      <zhong-y></zhong-y>
    </div>
    <div class="wujiang">
      <cao-r></cao-r>
    </div>
    <div class="wujiang">
      <gong-sun-y></gong-sun-y>
    </div>
 <div class="wujiang">
      <ju-sh></ju-sh>
    </div>
  </div>
</template>
<script>
import WangY from './WangY.vue';
import XuSh from './XuSh.vue';
import ZhangChunH from "./ZhangChunH.vue";
import JieCaoZ from "./JieCaoZ.vue";
import JieZhongH from './JieZhongH.vue';
import CaoChon from './CaoChon.vue';
import ZhongY from './ZhongY.vue';
import CaoR from './CaoR.vue';
import GongSunY from './GongSunY.vue';
import JuSh from './JuSh.vue';
export default {
  name: "YiJiangWu",
  components: {
    ZhangChunH,
    WangY,
    XuSh,
    JieCaoZ,
    JieZhongH,
    CaoChon,
    ZhongY,
    CaoR,
    GongSunY,
    JuSh,
  },
};
</script>

<style scoped>
.yijiangwu {
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
  background-color: rgb(35, 56, 34);
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
