<template>
  <div class="xusheng">
    <div class="wujiangye" :style="bgstyle">
      <router-view></router-view>
    </div>
    <div class="jinengye">
      <div class="jianjie">
        <span class="jj">简介</span><br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;亚索是一个百折不屈的艾欧尼亚人，也是一名身手敏捷的御风剑客。这位生性自负的年轻人，被误认为杀害长老的凶手——由于无法证明自己的清白，他出于自卫而杀死了自己的哥哥。虽然长老死亡的真相已然大白，亚索还是无法原谅自己的所作所为。他在家园的土地上流浪，只有疾风指引着他的剑刃。
      </div>
      <div class="jineng">
        <span class="jj">技能</span><br />
        <span class="jj">浪客之道：</span>
        锁定技，每当自己的回合开始时，获得一点护甲<br />
        <span class="jj">斩钢闪：</span>
        锁定技，你使用的杀可以多指定一个距离2以内的目标。每第三次使用杀，你可以让目标翻面<br />
        <span class="jj">风之壁障：</span>
        每轮限一次，当你成为锦囊牌的目标时，你可以使此牌结算至自己时无效。<br />
        <span class="jj">踏前斩：</span>
        每轮限三次，当你使用一次杀，本轮计算与其他角色距离-1。<br />
         <span class="jj">狂风绝息斩：</span>
        限定技，当有一名角色翻面时，你可以对其造成1点伤害，令自己获得一点护甲，并与其旁边靠近你的玩家交换位置。<br />
        <button class="butt" @click="push">语音</button><br /><br />
        <span class="jj">皮肤</span><br />
        <div class="ylqd">
          <button class="buttony" value="1" id="b1" @click="change1">
            经典形象
          </button>
          <button class="buttony" value="2" id="b2" @click="change1">
            源计划-风
          </button>
          <button class="buttony" value="3" id="b2" @click="change1">
            黑夜使者
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
      coverImgUrl: require("../assets/yasuo3.png"),
    };
  },
  name: "YaSuo",
  components: {},
  methods: {
    change1(e) {
      let num = parseInt(e.target.value);
      switch (num) {
        case 1:
          this.coverImgUrl = require("../assets/yasuo3.png");
          break;
        case 2:
          this.coverImgUrl = require("../assets/yasuo2.png");
          break;
        case 3:
          this.coverImgUrl = require("../assets/yasuo4.png");
          break;
      }
    },
    push() {
      this.$router.push("/YaSuo/YaSuoJN");
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
