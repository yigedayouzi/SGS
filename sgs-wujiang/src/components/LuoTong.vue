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
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;骆统（193年－228年），字公绪。会稽郡乌伤县（今浙江义乌）人。东汉末年至三国时期吴国将领、学者，陈国相骆俊之子。
        骆统二十岁时已任乌程国相，任内有政绩，使得国中民户过万。又迁为功曹，行骑都尉。曾劝孙权尊贤纳士，省役息民。后出任为建忠中郎将。将军凌统逝世后，统领其部曲。因战功迁偏将军，封新阳亭侯，任濡须督。
        黄武七年（228年），骆统去世，年仅三十六岁。有集十卷，今已佚。
      </div>
      <div class="jineng">
        <span class="jj">技能</span><br />
        <span class="jj">勤政：</span
        >锁定技，每当你使用或打出三张牌时，你随机获得一张【杀】或【闪】；每当你使用或打出五张牌时，你随机获得一张【桃】或【酒】；每当你使用或打出八张牌时，你随机获得一张【无中生有】或【决斗】。

        <br />

        <button class="butt" @click="push">语音</button><br />
        <span class="jj">皮肤</span><br />

        <button class="buttony" value="1" id="b1" @click="change1">
          经典形象
        </button>
        <button class="buttony" value="2" id="b2" @click="change1">
          辩如悬河
        </button>
        <button class="buttony" value="3" id="b2" @click="change1">
          仁民爱物
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coverImgUrl: require("../assets/luotong1.jpg"),
      coverImgUr: require("../assets/luotong1.jpg"),
      fullScreenStatus: {
        pifu: false,
      },
    };
  },
  name: "LuoTong",
  components: {},
  methods: {
    change1(e) {
      let num = parseInt(e.target.value);
      switch (num) {
        case 1:
          this.coverImgUrl = require("../assets/luotong1.jpg");
          this.coverImgUr = require("../assets/luotong1.jpg");
          break;
        case 2:
          this.coverImgUrl = require("../assets/luotong2.jpg");
          this.coverImgUr = require("../assets/luotong2.jpg");
          break;
        case 3:
          this.coverImgUrl = require("../assets/luotong3.jpg");
          this.coverImgUr = require("../assets/luotong3.jpg");
          break;
      }
    },
    push() {
      this.$router.push("/luotong/luotongJN");
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
