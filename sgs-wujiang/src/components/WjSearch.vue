<template>
  <input
    class="insearch"
    placeholder="搜索"
    v-model="message"
    @keyup.enter="push"
  />
  <button class="btn" @click="push">确认</button>
</template>

<script>
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
        JieZhuRan:"/JieZhuRanS",
        jiezhuran:"/JieZhuRanS",
        界朱然:"/JieZhuRanS",
        SHENGUOJIA:"/ShenGuoJiaS",
        shenguojia:"/ShenGuoJiaS",
        神郭嘉:"/ShenGuoJiaS",
        JUSHOU:"/JuShouS",
        jushou:"/JuShouS",
        沮授:"/JuShouS",
        WOLONGZHUGE:"WoLongZhuGeS",
        wolongzhuge:"WoLongZhuGeS",
        卧龙诸葛:"WoLongZhuGeS",
      },
    };
  },
  name: "WjSearch",
  methods: {
    push() {
      this.$router.push(`${this.obj[this.message]}`);
    },
  },
};
</script>
<style scoped>
.insearch {
  width: 200px;
  height: 30px;
  margin: 30px 50%;
  position: absolute;
  transform: translateX(-50%);
  border-radius: 10px;
  font-size: 18px;
}
input::-webkit-input-placeholder {
  font-weight: 700;
  font-size: 18px;
  
}

.btn {
  width: 60px;
  height: 30px;
  font-size: 18px;
  margin: 34px 50%;
  transform: translateX(+120px);
  border-radius: 10px;
  border-color: rgb(71, 144, 144);
}

.btn:hover {
  background: yellow;
}
</style>
