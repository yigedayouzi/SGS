<template>
  <button class="but" @click="huishouye"></button>

  <input
    class="insearch"
    placeholder="搜索"
    v-model="message"
    @keyup.enter="push"
  />
  <el-button class="btn" type="primary" :icon="Search" @click="push"
    >Search</el-button
  >
</template>
<script lang="ts" setup>
import { Search } from "@element-plus/icons-vue";
</script>

<script lang="ts">
export default {
  data() {
    return {
      message: "",
      obj: {
        XUSHENG: "/XuShengS",
        xusheng: "/XuShengS",
        徐盛: "/XuShengS",
        CAOCAO: "/CaoCaoS",
        caocao: "/CaoCaoS",
        曹操: "/CaoCaoS",
        JIANGWEI: "/JiangWeiS",
        jiangwei: "/JiangWeiS",
        姜维: "/JiangWeiS",
        SHENCAOCAO: "/ShenCaoS",
        shencaocao: "/ShenCaoS",
        神曹操: "/ShenCaoS",
        LIUZAN: "/LiuZanS",
        liuzan: "/LiuZanS",
        留赞: "/LiuZanS",
        XUYOU: "/XuYouS",
        xuyou: "/XuYouS",
        许攸: "/XuYouS",
        YASUO: "/YaSuoS",
        yasuo: "/YaSuoS",
        亚索: "/YaSuoS",
        YANGBIAO: "/YangBiaoS",
        yangbiao: "/YangBiaoS",
        杨彪: "/YangBiaoS",
        GUANYU: "/GuanYuS",
        guanyu: "/GuanYuS",
        关羽: "/GuanYuS",
        WANGYI: "/WangYiS",
        wangyi: "/WangYiS",
        王异: "/WangYiS",
        WANGJI: "/WangJiS",
        wangji: "/WangJiS",
        王基: "/WangJiS",
        YUANSHAO: "/YuanShaoS",
        yuanshao: "/YuanShaoS",
        袁绍: "/YuanShaoS",
        LUOTONG: "/LuoTongS",
        luotong: "/LuoTongS",
        骆统: "/LuoTongS",
        JieZhuRan: "/JieZhuRanS",
        jiezhuran: "/JieZhuRanS",
        界朱然: "/JieZhuRanS",
        SHENGUOJIA: "/ShenGuoJiaS",
        shenguojia: "/ShenGuoJiaS",
        神郭嘉: "/ShenGuoJiaS",
        JUSHOU: "/JuShouS",
        jushou: "/JuShouS",
        沮授: "/JuShouS",
        WOLONGZHUGE: "WoLongZhuGeS",
        wolongzhuge: "WoLongZhuGeS",
        卧龙诸葛: "WoLongZhuGeS",
      },
    };
  },
  name: "WjSearch",

  methods: {
    huishouye() {
      this.$router.push("/");
    },
    push() {
      this.$router.push(`${this.obj[this.message]}`);
    },
  },
};
</script>

<style scoped>
* {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;

}
*:focus { outline: none; }
.insearch {
  width: 260px;
  height: 35px;
  margin: 30px 50%;
  position: absolute;
  transform: translateX(-80%);
  border-radius: 5px;
  font-size: 18px;
  border:solid blue 3px;
  border-right: none;
}
.insearch:hover{
border:solid  rgb(212, 131, 127) 4px;
 border-right: none;
}
.insearch:focus{
border:solid rgb(246, 17, 219) 4px;
background-color: rgb(236, 236, 200);
color: rgb(160, 58, 191);
font-weight: 600;
 border-right: none;
}
input::-webkit-input-placeholder {
  font-weight: 700;
  font-size: 18px;
  color: rgb(160, 58, 191);
}


.btn {
  width: 120px;
  height: 30px;
  font-size: 18px;
  margin: 0px 51%;
  padding: auto;
  transform: translateX(+120px);
  transform: translateY(-50px);
  border-color: rgb(71, 144, 144);
  border-right: solid rgb(249, 8, 233) 3px;
}

.but {
  width: 80px;
  height: 80px;
  background: url("../assets/shouye.jpg");
  border: solid 2px rebeccapurple;
  background-size: cover;
  background-position: center;
  border-radius: 100%;
}
.but:hover {
  border-color: rgb(233, 73, 118);
  cursor:pointer;
}
</style>
