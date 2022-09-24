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
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;王基（190年－261年），字伯舆，东莱郡曲城县（今山东省招远市）人。三国时期魏国将领，追封北海太守王豹的儿子。
王基文武兼备，才德过人。东汉末年，起家东莱郡吏。魏文帝时，举孝廉出身，授郎中、青州（王凌）别驾，迁秘书郎。得到尚书仆射司马懿推荐，迁中书侍郎。谏止大兴土木，迁安平太守，坐罪免职。大将军曹爽执政时，授从事中郎，出任安丰太守、河南尹，颇有政绩。司马师执政时，授尚书、荆州刺史，跟随征南将军王昶大败孙吴，赐爵关内侯。参与平定淮南三叛（毌丘俭、文钦、诸葛诞），出谋划策，颇有功勋。善于军事，先后都督豫州、扬州 、荆州军事，受封东武县侯。
魏元帝景元二年（261年），王基去世，时年七十二，获赠司空，谥号为景。
      </div>
      <div class="jineng">
        <span class="jj">技能</span><br />
        <span class="jj">奇制：</span
        >当你于回合内使用基本牌或锦囊牌指定目标后，你可以弃置不是此牌目标的一名角色一张牌，然后该角色摸一张牌。<br />
        <span class="jj">进趋：</span>
        结束阶段，你可以摸两张牌，然后将手牌弃置至X张（X为你于此回合内发动过“奇制”的次数）。
        <button class="butt" @click="push">语音</button><br />
        <span class="jj">皮肤</span><br />

        <button class="buttony" value="1" id="b1" @click="change1">
          经典形象
        </button>
        <button class="buttony" value="2" id="b2" @click="change1">
          傲雪凌霜
        </button>
        <button class="buttony" value="3" id="b2" @click="change1">
          独秉固志
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coverImgUrl: require("../assets/wangji1.png"),
      coverImgUr: require("../assets/wangji1.jpg"),
      fullScreenStatus: {
        pifu: false,
      },
    };
  },
  name: "WangJi",
  components: {},
  methods: {
    change1(e) {
      let num = parseInt(e.target.value);
      switch (num) {
        case 1:
          this.coverImgUrl = require("../assets/wangji1.jpg");
          this.coverImgUr = require("../assets/wangji1.jpg");
          break;
        case 2:
          this.coverImgUrl = require("../assets/wangji2.jpg");
          this.coverImgUr = require("../assets/wangji2.jpg");
          break;
        case 3:
          this.coverImgUrl = require("../assets/wangji3.jpg");
          this.coverImgUr = require("../assets/wangji3.jpg");
          break;
       
      }
    },
    push() {
      this.$router.push("/WangJi/WangJiJN");
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
