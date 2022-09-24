<template>
  <div class="xusheng">
    <div class="wujiangye" :style="bgstyle">
      <router-view></router-view>
    </div>
    <div class="jinengye">
      <div class="jianjie">
        <span class="jj">简介</span><br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;姜维(202-264年)，字伯约，天水郡冀县(今甘肃甘谷县)人。三国时蜀汉名将，天水功曹姜冏之子。
        姜维年少丧父，侍奉母亲，崇拜儒家大师郑玄。诸葛亮北伐中原时，姜维受到猜忌，不得已投降蜀汉，得到蜀相诸葛亮重用。在诸葛亮去世后，姜维开始崭露头角。
        延熙十七年(254年)，拜大将军，独掌军权，继续北伐事业，大战曹魏名将邓艾、陈泰、郭淮等，互有胜负。为躲避黄皓的迫害，前往沓中屯田避祸。
        景耀七年(263年)，魏国伐蜀，姜维摆脱邓艾等人，退守剑阁，阻挡钟会进军。邓艾阴平偷袭成都，后主刘禅投降。姜维志存光复，假意投降，勾结钟会反叛，事败被杀。
      </div>
      <div class="jineng">
        <span class="jj">技能</span><br />
        <span class="jj">挑衅：</span>
        出牌阶段限一次，你可以指定一名你在其攻击范围内的角色，然后其需对你使用一张【杀】，否则令你弃置其一张牌。<br />
        <span class="jj">志继：</span>
        觉醒技,准备阶段,若你没有手牌,你回复1点体力或摸两张牌,减1点体力上限,然后获得“观星”。<br />
        <span class="jj">观星：</span>
        观星(2008版):准备阶段,你可以观看牌堆顶的X张牌(X为全场角色数且最多为5)，然后以任意顺序分配于牌堆顶或牌堆底。
        观星(界限突破2018)：准备阶段，你可以观看牌堆顶的五张牌(若存活人数小于4则改为三张)，然后将其中任意张牌置于牌堆顶，其余置于牌堆底。若你将这些牌均放至牌堆底，则结束阶段你可以再进行一次“观星”。
        <button class="butt" @click="push">语音</button><br /><br />
        <span class="jj">皮肤</span><br />
        <div class="ylqd">
          <button class="buttony" value="1" id="b1" @click="change1">
            经典形象
          </button>
          <button class="buttony" value="2" id="b2" @click="change1">
            斩将拔城
          </button>
          <button class="buttony" value="3" id="b2" @click="change1">
            烽火乱世
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
      coverImgUrl: require("../assets/jiangwei1.png"),
    };
  },
  name: "JiangWei",
  components: {},
  methods: {
    change1(e) {
      let num = parseInt(e.target.value);
      switch (num) {
        case 1:
          this.coverImgUrl = require("../assets/jiangwei1.png");
          break;
        case 2:
          this.coverImgUrl = require("../assets/jiangwei2.png");
          break;
        case 3:
          this.coverImgUrl = require("../assets/jiangwei3.png");
          break;
      }
    },
    push() {
      this.$router.push("/JiangWei/JiangWeiJN");
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
