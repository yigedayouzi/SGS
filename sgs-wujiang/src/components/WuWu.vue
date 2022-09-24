<template>
  <div class="wuwu">
    <div class="wujiang">
     <XuSh></XuSh>
    </div>
    <div class="wujiang">
       <liu-z></liu-z>
    </div>
    <div class="wujiang">
      <xiao-q></xiao-q>
    </div>
    <div class="wujiang">
      <luo-t></luo-t>
    </div>
    <div class="wujiang">
      <jie-zhu-r></jie-zhu-r>
    </div>
    <div class="wujiang">
      <jie-bu-lian-s></jie-bu-lian-s>
    </div>
    <div class="wujiang">
      <jie-sun-shang-x></jie-sun-shang-x>
    </div>
    <div class="wujiang">
      <jie-sun-q></jie-sun-q>
    </div>
    <div class="wujiang">
      <sun-han-h></sun-han-h>
    </div>
   
  </div>
</template>
<script>
import XiaoQ from './XiaoQ.vue'
import XuSh from "../components/XuSh.vue";
import LiuZ from './LiuZ.vue';
import LuoT from './LuoT.vue';
import JieZhuR from './JieZhuR.vue';
import JieBuLianS from './JieBuLianS.vue';
import JieSunShangX from './JieSunShangX.vue';
import JieSunQ from './JieSunQ.vue';
import SunHanH from './SunHanH.vue';
export default {
  name: "WuWu",
  components: {
    XuSh,
    LiuZ,
    XiaoQ,
    LuoT,
    JieZhuR,
    JieBuLianS,
    JieSunShangX,
    JieSunQ,
    SunHanH,

  },
};
</script>

<style scoped>
.wuwu {
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
  background-color: rgb(134, 226, 192);
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
