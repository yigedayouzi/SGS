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
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;王异，或作士异（胡三省所做《三国志》及《资治通鉴》注解称皇甫谧《列女传》原文为“士氏女”而非“王氏女”），东汉末年曹操所置羌道令、益州刺史赵昂之妻，赵英、赵月之母。
    
        马超作乱凉州时，王异协助丈夫守城，多有功勋，自马超攻冀城至祁山坚守，赵昂曾出奇计九条，王异皆有参与。
        在小说《三国演义》较通行的三个版本中毛本和嘉靖本均只言王氏，而黄正甫本《三国志传》中则言明其姓名王异。
      </div>
      <div class="jineng">
        <span class="jj">技能</span><br />
        <span class="jj">贞烈：</span
        >当玩家使用【杀】指定一个目标后，玩家可以将其至多X张牌扣置于该角色的武将牌旁（X为其体力值）。在玩家使用【杀】对手牌数与装备数均不大于自身的角色造成伤害时，此伤害额外＋1。<br />
        <span class="jj">秘计：</span>
        准备或结束阶段，若你已受伤，你可以进行判定，若结果为黑色，你观看牌堆顶的X张牌（X为你已损失的体力值），然后将这些牌交给一名角色。
        <button class="butt" @click="push">语音</button><br />
        <span class="jj">皮肤</span><br />

        <button class="buttony" value="1" id="b1" @click="change1">
          经典形象
        </button>
        <button class="buttony" value="2" id="b2" @click="change1">
          决意巾帼
        </button>
        <button class="buttony" value="3" id="b2" @click="change1">
          绝色异彩
        </button>
        <button class="buttony" value="4" id="b2" @click="change1">
          轻燕掠影
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coverImgUrl: require("../assets/wangyi1.png"),
      coverImgUr: require("../assets/wangyi1.jpg"),
      fullScreenStatus: {
        pifu: false,
      },
    };
  },
  name: "WangYi",
  components: {},
  methods: {
    change1(e) {
      let num = parseInt(e.target.value);
      switch (num) {
        case 1:
          this.coverImgUrl = require("../assets/wangyi1.jpg");
          this.coverImgUr = require("../assets/wangyi1.jpg");
          break;
        case 2:
          this.coverImgUrl = require("../assets/wangyi2.jpg");
          this.coverImgUr = require("../assets/wangyi2.jpg");
          break;
        case 3:
          this.coverImgUrl = require("../assets/wangyi3.jpg");
          this.coverImgUr = require("../assets/wangyi3.jpg");
          break;
        case 4:
          this.coverImgUrl = require("../assets/wangyi4.jpg");
          this.coverImgUr = require("../assets/wangyi4.jpg");
          break;
      }
    },
    push() {
      this.$router.push("/WangYi/WangYiJN");
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
  color: rgb(164, 72, 207);
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
