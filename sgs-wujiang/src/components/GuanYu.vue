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
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关羽（？—220年），字云长，本字长生，河东郡解县（今山西省运城市盐湖区解州镇）人。东汉末年名将。
        汉末亡命涿郡，与张飞从刘备起兵。刘备得徐州后，使关羽行太守事。建安五年（200年），曹操东进，击破刘备，关羽被俘，遂随曹操于官渡迎击袁绍军，刺袁绍大将颜良于万众之中，封汉寿亭侯，不久辞归刘备，后随刘备依附荆州牧刘表。
        建安十三年（208年），曹操入荆州，刘备率众南逃，关羽与之共至夏口。及曹操败于赤壁，刘备收江南诸郡，任命关羽为襄阳太守、荡寇将军。刘备西定益州，使关羽镇守荆州。建安二十年（215年），关羽尽逐孙权所置长沙、零陵、桂阳三郡长吏。建安二十四年（219年），拜为前将军，围攻曹操将征南将军曹仁于樊城，时值汉水泛滥，左将军于禁所督七军皆被淹没，又斩将军庞德，自许（今河南许昌）以南往往遥应，威震华夏。曹操派平寇将军徐晃往救，而吴乘机袭取江陵，关羽遂败走麦城（今湖北当阳东南），与儿子关平同为吴军俘杀。追谥壮缪侯。好《左传》，善待卒伍而骄于士大夫，以忠义见称于后世。
      </div>
      <div class="jineng">
        <span class="jj">技能</span><br />
        <span class="jj">武圣：</span>你可以将一张红色牌当普通【杀】使用或打出。
        <br />
        <button class="butt" @click="push">语音</button><br />
        <span class="jj">皮肤</span><br />

        <button class="buttony" value="1" id="b1" @click="change1">
          经典形象
        </button>
        <button class="buttony" value="2" id="b2" @click="change1">
          义薄云天
        </button>
        <button class="buttony" value="3" id="b2" @click="change1">
          单刀赴会
        </button>
        <button class="buttony" value="4" id="b2" @click="change1">
          飞龙在天
        </button>
        <button class="buttony" value="5" id="b2" @click="change1">
          啸风从龙
        </button>
        <button class="buttony" value="6" id="b2" @click="change1">
          明良千古
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coverImgUrl: require("../assets/guanyu1.jpg"),
      coverImgUr: require("../assets/guanyu1.jpg"),
      fullScreenStatus: {
        pifu: false,
      },
    };
  },
  name: "GuanYu",
  components: {},
  methods: {
    change1(e) {
      let num = parseInt(e.target.value);
      switch (num) {
        case 1:
          this.coverImgUrl = require("../assets/guanyu1.jpg");
          this.coverImgUr = require("../assets/guanyu1.jpg");
          break;
        case 2:
          this.coverImgUrl = require("../assets/guanyu2.jpg");
          this.coverImgUr = require("../assets/guanyu2.jpg");
          break;
        case 3:
          this.coverImgUrl = require("../assets/guanyu3.jpg");
          this.coverImgUr = require("../assets/guanyu3.jpg");
          break;
        case 4:
          this.coverImgUrl = require("../assets/guanyu4.jpg");
          this.coverImgUr = require("../assets/guanyu4.jpg");
          break;
        case 5:
          this.coverImgUrl = require("../assets/guanyu5.jpg");
          this.coverImgUr = require("../assets/guanyu5.jpg");
          break;
        case 6:
          this.coverImgUrl = require("../assets/guanyu6.jpg");
          this.coverImgUr = require("../assets/guanyu6.jpg");
          break;
      }
    },
    push() {
      this.$router.push("/guanyu/guanyuJN");
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
