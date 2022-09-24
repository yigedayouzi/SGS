<template>
  <div class="xusheng">
    <div class="wujiangye" :style="bgstyle">
      <router-view></router-view>
    </div>
    <div class="jinengye">
      <div class="jianjie">
        <span class="jj">简介</span><br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;魏武帝曹操)155年220年3月15日),字孟德,小名阿瞒、吉利,沛国谯县)今安徽省亳州市)人。中国古代杰出的政治家、军事家、文学家、书法家、诗人。东汉末年权相,太尉曹嵩之子,曹魏的奠基者。
东汉末年,面对天下大乱,以汉献帝刘协名义征讨四方,对内消灭二袁、吕布、刘表、马超、韩遂等割据势力,对外降服南匈奴、乌桓、鲜卑等,统一中国北方地区,扩大屯田、兴修水利、奖励农桑、重视手工业、安置流民、实行“租调制”,促进中原地区经济生产和社会稳定。建安十八年,获封魏公,建立魏国,定都邺城。建安二十一年,册封魏王,权位在诸王之上。
建安二十五年)220年3月15日),曹操去世,谥号为武,安葬于高陵。其子曹丕称帝,追封皇帝,谥号为武,庙号太祖。
      </div>
      <div class="jineng">
        <span class="jj">技能</span><br />
        <span class="jj">归心：</span>
       每当你受到1点伤害后,若至少一名其他角色的区域里有牌,你可以选择所有其他角色,获得这些角色区域里的一张牌,然后将你的武将牌翻面。<br />
        <span class="jj">飞影：</span>
        锁定技,其他角色计算与你的距离时始终+1。<br />
        <button class="butt" @click="push">语音</button><br /><br />
        <span class="jj">皮肤</span><br />
        <div class="ylqd">
          <button class="buttony" value="1" id="b1" @click="change1">
            经典形象
          </button>
          <button class="buttony" value="2" id="b2" @click="change1">
            天下归心
          </button>
          <button class="buttony" value="3" id="b2" @click="change1">
           玄天通冥
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coverImgUrl: require("../assets/shencaocao1.png"),
    };
  },
  name: "ShenCao",
  components: {},
  methods: {
    change1(e) {
      let num = parseInt(e.target.value);
      switch (num) {
        case 1:
          this.coverImgUrl = require("../assets/shencaocao1.png");
          break;
        case 2:
          this.coverImgUrl = require("../assets/shencaocao2.png");
          break;
        case 3:
          this.coverImgUrl = require("../assets/shencaocao3.png");
          break;
      }
    },
    push() {
      this.$router.push("/ShenCao/ShenCaoJN");
    },
  },
  computed: {
    bgstyle() {
      return {
        background: "url(" + this.coverImgUrl + ")",
        "background-size": "cover",
        "background-position": "center",
        "border-left": "0",
        "border-radius": "20px",
      };
    },
  },
};
</script>

<style scoped>
.xusheng {
  height: 100%;
  width: 100%;
  border: solid 2px;
  border-radius: 20px;
  display: flex;
}
.jinengye {
  width: 65%;
  height: 100%;
  background-color: #efa;
  float: left;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: space-around;
}

.wujiangye {
  float: left;
  width: 35%;
  height: 100%;
  border: solid;
  display: flex;
}

.jianjie {
  border: solid 1px;
  height: 300px;
  width: 85%;
  overflow: auto;
  font-size: 20px;
}

.jineng {
  border: solid 1px;
  height: 300px;
  width: 85%;
  font-size: 20px;
  overflow: auto;
}
::-webkit-scrollbar {
    width: 0;
    height: 0;
}
.jj {
  font-size: 30px;
}

.butt {
  width: 60px;
  height: 30px;
  border-radius: 20%;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
}
.butt:hover {
  background: yellow;
}

.aud {
  width: 0px;
  height: 0px;
}

.ylqd {
  margin: 0 auto;
}

.buttony {
  width: 120px;
  height: 40px;
  margin: 5px;
  font-size: 20px;
  border-radius: 20px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
}
.buttony:hover {
  background: yellow;
}
</style>
