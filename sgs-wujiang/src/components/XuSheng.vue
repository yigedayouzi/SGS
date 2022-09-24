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
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;徐盛（生卒年不详），字文向，琅邪莒县（今山东省莒县）人，三国时期孙吴名将。早年徐盛抗击黄祖，因功升为中郎将。在濡须浴血奋战。刘备伐吴地时，徐盛跟随陆逊攻下蜀军多处屯营；曹休伐吴时，徐盛在形势不利的情况下以少抗多，成功防御。因前后战功，徐盛先后升任建武将军、安东将军，任庐江太守。后来，曹丕大举攻吴，吴国依徐盛的建议在建业外围筑上围墙，曹丕中疑城之计而退走。黄武年间，徐盛病逝。
        徐盛曾获得君主“大壮”，三国时期仅有张辽、徐盛二人获此殊荣。他被陈寿盛赞为“江表之虎臣”。其官爵由儿子徐楷继承。
      </div>
      <div class="jineng">
        <span class="jj">技能</span><br />
        <span class="jj">破军</span
        >：技能效果：当玩家使用【杀】指定一个目标后，玩家可以将其至多X张牌扣置于该角色的武将牌旁（X为其体力值）。在玩家使用【杀】对手牌数与装备数均不大于自身的角色造成伤害时，此伤害额外＋1。

        <button class="butt" @click="push">语音</button><br /><br />
        <span class="jj">皮肤</span><br />
      
          <button class="buttony" value="3" id="b1" @click="change1">
            经典形象
          </button>
          <button class="buttony" value="2" id="b2" @click="change1">
            万夫莫当
          </button>
          <button class="buttony" value="1" id="b2" @click="change1">
            勇烈却敌
          </button>
     
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coverImgUrl: require("../assets/jxs.png"),
      coverImgUr: require("../assets/xushengpifu1.jpg"),
      fullScreenStatus: {
        pifu: false,
      },
    };
  },
  name: "XuSheng",
  components: {},
  methods: {
    change1(e) {
      let num = parseInt(e.target.value);
      switch (num) {
        case 1:
          this.coverImgUrl = require("../assets/ylqd.png");
          this.coverImgUr = require("../assets/xushengpifu3.jpg");
          break;
        case 2:
          this.coverImgUrl = require("../assets/wfmd.png");
          this.coverImgUr = require("../assets/xushengpifu2.jpg");
          break;
        case 3:
          this.coverImgUrl = require("../assets/jxs.png");
          this.coverImgUr = require("../assets/xushengpifu1.jpg");
          break;
      }
    },
    push() {
      this.$router.push("/XuSheng/XuShengJN");
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
        background: "url(" + this.coverImgUr + ")" ,
        "background-repeat": "no-repeat" ,
        "z-index":2,
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
