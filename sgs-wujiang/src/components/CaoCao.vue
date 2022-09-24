<template>
  <div class="xusheng">
    <div class="wujiangye" :style="bgstyle">
      <router-view></router-view>
    </div>
    <div class="jinengye">
      <div class="jianjie">
        <span class="jj">简介</span><br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;魏武帝曹操(155年~220年3月15日)，字孟德，小名阿瞒、吉利，沛国谯县(今安徽省亳州市)人。中国古代杰出的政治家、军事家、文学家、书法家、诗人。东汉末年权相，太尉曹嵩之子，曹魏的奠基者。
东汉末年，面对天下大乱，以汉献帝刘协名义征讨四方，对内消灭二袁、吕布、刘表、马超、韩遂等割据势力，对外降服南匈奴、乌桓、鲜卑等，统一中国北方地区，扩大屯田、兴修水利、奖励农桑、重视手工业、安置流民、实行“租调制”，促进中原地区经济生产和社会稳定。建安十八年，获封魏公，建立魏国，定都邺城。建安二十一年，册封魏王，权位在诸王之上。
建安二十五年(220年3月15日)，曹操去世，谥号为武，安葬于高陵。其子曹丕称帝，追封皇帝，谥号为武，庙号太祖。

      </div>
      <div class="jineng">
        <span class="jj">技能</span><br />
        <span class="jj">奸雄：</span>
       每当你受到伤害后，你可以立刻获得对你造成伤害的牌。<br />
        <span class="jj">护驾：</span>
       主公技，每当你需要使用或打出“闪”时，你可以让其他魏势力角色选择替你使用或打出“闪”（视为由你使用或打出）。<br />
        <button class="butt" @click="push">语音</button><br /><br />
        <span class="jj">皮肤</span><br />
        <div class="ylqd">
          <button class="buttony" value="1" id="b1" @click="change1">
            经典形象
          </button>
          <button class="buttony" value="2" id="b2" @click="change1">
            魏武大帝
          </button>
          <button class="buttony" value="3" id="b2" @click="change1">
            魏武霸业
          </button>
           <button class="buttony" value="4" id="b2" @click="change1">
            魏武东临
          </button>
           <button class="buttony" value="5" id="b2" @click="change1">
            雄吞天下
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
      coverImgUrl: require("../assets/caocao2.png"),
    };
  },
  name: "JiangWei",
  components: {},
  methods: {
    change1(e) {
      let num = parseInt(e.target.value);
      switch (num) {
        case 1:
          this.coverImgUrl = require("../assets/caocao2.png");
          break;
        case 2:
          this.coverImgUrl = require("../assets/caocao3.png");
          break;
        case 3:
          this.coverImgUrl = require("../assets/caocao4.png");
          break;
           case 4:
          this.coverImgUrl = require("../assets/caocao5.png");
          break;
           case 5:
          this.coverImgUrl = require("../assets/caocao6.png");
          break;
      }
    },
    push() {
      this.$router.push("/CaoCao/CaoCaoJN");
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
