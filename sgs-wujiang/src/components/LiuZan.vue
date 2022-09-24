<template>
  <div class="xusheng">
    <div class="wujiangye" :style="bgstyle">
      <router-view></router-view>
    </div>
    <div class="jinengye">
      <div class="jianjie">
        <span class="jj">简介</span><br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;留赞(183年—255年),字正明,会稽长山人(今浙江金华)人,曾任左护军,有两子：留略、留平。
少为会稽郡吏,曾参与镇压黄巾起义,后被东吴大将凌统所引用,任屯骑校尉。诸葛恪率众战于东兴,留赞为前部,会战先陷阵,大败魏师,以功升左将军。
吴五凤二年(公元255年)留赞任左护军,随孙峻征淮南,因病撤军,被魏将蒋班围困于道,力战而死,时年73岁。<br>
  &nbsp;  &nbsp;  &nbsp;  &nbsp;赞为将,临敌必先被发叫天,因抗音而歌,左右应之,毕乃进战,战无不克。——《三国志·吴书·诸葛滕二孙濮阳传第十九》,“歌王”这一称呼最初便是由此而来。
      </div>
      <div class="jineng">
        <span class="jj">技能</span><br />
        <span class="jj">奋音</span
        >:当你于回合内使用第一张牌后，你每使用一张牌，若此牌与你使用的上一张颜色不同，你便可以摸一张牌。
        <button class="butt" @click="push">语音</button><br /><br />
        <span class="jj">皮肤</span><br />
        <div class="ylqd">
          <button class="buttony" value="1" id="b1" @click="change1">
            经典形象
          </button>
          <button class="buttony" value="2" id="b2" @click="change1">
            老当益壮
          </button>
          <button class="buttony" value="3" id="b2" @click="change1">
            抗音而歌
          </button>
           <button class="buttony" value="4" id="b2" @click="change1">
           灵魂歌王
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
      coverImgUrl: require("../assets/liuzan3.png"),
    };
  },
  name: "LiuZan",
  components: {},
  methods: {
    change1(e) {
      let num = parseInt(e.target.value);
      switch (num) {
        case 1:
          this.coverImgUrl = require("../assets/liuzan3.png");
          break;
        case 2:
          this.coverImgUrl = require("../assets/liuzan2.png");
          break;
        case 3:
          this.coverImgUrl = require("../assets/liuzan4.png");
          break;
          case 4:
          this.coverImgUrl = require("../assets/liuzan5.png");
          break;
      }
    },
    push() {
      this.$router.push("/LiuZan/LiuZanJN");
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
