<template>
  <div class="xusheng">
    <div class="wujiangye" :style="bgstyle">
      <div
        :class="[fullScreenStatus.pifu ? 'show_box fullscreen' : 'show_box']"
        :style="bgstyl"
      >
        <div
          @click="changeSize('pifu')"
          :class="[fullScreenStatus.pifu ? 'compress' : 'expand']"
        ></div>
      </div>
      <router-view></router-view>
    </div>
    <div class="jinengye">
      <div class="jianjie">
        <span class="jj">简介</span><br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;朱然（182年—249年），原名施然，字义封，丹阳故鄣（今浙江安吉）人。

毗陵侯朱治的外甥，早年被朱治收为养子。孙权统事后，朱然历任余姚长、山阴令、临川太守，加折冲校尉，率军平定山贼。曾随吕蒙擒杀关羽，以功迁昭武将军，封西安乡侯。吕蒙死后，朱然代替吕蒙镇守江陵。

夷陵之战中，与陆逊合力大破刘备，拜征北将军，封永安侯。魏国趁机攻吴，朱然坚守不出，曹真、夏侯尚、张郃等魏将围攻江陵六月之久，朱然从此名震敌国——《三国杀》中的胆守便是以此事迹为原型。

赤乌十二年（249年），朱然病逝，享年68岁。在《三国演义》中则是直接于夷陵战役追击刘备时被来接应的赵云一枪刺死。


      </div>
      <div class="jineng">
        <span class="jj">技能</span><br />
        <span class="jj">胆守：</span
        >其他角色的结束阶段，若你本回合未成为过其使用牌的目标，你摸一张牌；否则你可以弃置X张牌，对其造成1点伤害（X为你本回合成为其使用牌的目标的次数）。

        <br />

        <button class="butt" @click="push">语音</button><br />
        <span class="jj">皮肤</span><br />

        <button class="buttony" value="1" id="b1" @click="change1">
          经典形象
        </button>
        <button class="buttony" value="2" id="b2" @click="change1">
          镇守江陵
        </button>
        <button class="buttony" value="3" id="b2" @click="change1">
          临沮截击
        </button>
         <button class="buttony" value="4" id="b2" @click="change1">
          剑舞枫飞
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coverImgUrl: require("../assets/jiezhuran1.jpg"),
      coverImgUr: require("../assets/jiezhuran1.jpg"),
      fullScreenStatus: {
        pifu: false,
      },
    };
  },
  name: "JieZhuRan",
  components: {},
  methods: {
    change1(e) {
      let num = parseInt(e.target.value);
      switch (num) {
        case 1:
          this.coverImgUrl = require("../assets/jiezhuran1.jpg");
          this.coverImgUr = require("../assets/jiezhuran1.jpg");
          break;
        case 2:
          this.coverImgUrl = require("../assets/jiezhuran2.jpg");
          this.coverImgUr = require("../assets/jiezhuran2.jpg");
          break;
        case 3:
          this.coverImgUrl = require("../assets/jiezhuran3.jpg");
          this.coverImgUr = require("../assets/jiezhuran3.jpg");
          break;
           case 4:
          this.coverImgUrl = require("../assets/jiezhuran4.jpg");
          this.coverImgUr = require("../assets/jiezhuran4.jpg");
          break;
      }
    },
    push() {
      this.$router.push("/jiezhuran/jiezhuranJN");
    },
    changeSize(type) {
      this.fullScreenStatus[type] = !this.fullScreenStatus[type];
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
    bgstyl() {
      return {
        background: "url(" + this.coverImgUr + ")",
        "background-repeat": "no-repeat",
        "z-index": 2,
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
  border-top: 0px;
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
  border-bottom: solid 1px;
  border-right: solid 3px;
  display: flex;
}

.jianjie {
  border: solid 2px;
  height: 300px;
  width: 85%;
  overflow: auto;
  font-size: 20px;
  border-radius: 10px;
  border-color: rgb(216, 136, 15);
}

.jineng {
  border: solid 2px;
  height: 300px;
  width: 85%;
  font-size: 20px;
  overflow: auto;
  border-radius: 10px;
  border-color: rgb(216, 136, 15);
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
.expand,
.compress {
  position: relative;
  width: 40px;
  height: 40px;
  background-image: url(../assets/expand.png);
  background-size: 100%;
  cursor: pointer;
}
.compress {
  background-image: url(../assets/compress.png);
}
.fullscreen {
  position: fixed !important;
  left: 50% !important;
  transform: translateX(-25%);
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
}
.show_box {
  height: 40px;
  width: 40px;
}
</style>
