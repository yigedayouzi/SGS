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
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;刘静远（2001.4.16~）。哈尔滨理工大学计算机学院19届学生。拥有以下身份：<br />
        1.光能加身的传奇泰坦<br />
        2.蒙德的荣誉骑士<br />
        3.云顶之上的高超棋手<br />
        4.正在找工作的23年应届生<br />
      </div>
      <div class="jineng">
        <span class="jj">技能</span><br />
        <span class="jj">肝帝：</span
        >我还能再肝两个点儿！<br />
        <span class="jj">食客：</span>
        今天早饭吃什么？午饭吃什么？晚饭吃什么？<br />
         <span class="jj">整活：</span>
         <a class="aa">超私密学习资料点击获取</a>
       <br />
        <span class="jj">皮肤</span><br />

        <button class="buttony" value="1" id="b1" @click="change1">
          经典形象
        </button>
        <button class="buttony" value="2" id="b2" @click="change1">
          旅行者
        </button>
        <button class="buttony" value="3" id="b2" @click="change1">
         举棋若定
        </button>
        <button class="buttony" value="4" id="b2" @click="change1">
        程序员
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coverImgUrl: require("../assets/liujingyuan1.jpg"),
      coverImgUr: require("../assets/liujingyuan1.jpg"),
      fullScreenStatus: {
        pifu: false,
      },
    };
  },
  name: "KaiFa",
  components: {},
  methods: {
    change1(e) {
      let num = parseInt(e.target.value);
      switch (num) {
        case 1:
          this.coverImgUrl = require("../assets/liujingyuan1.jpg");
          this.coverImgUr = require("../assets/liujingyuan1.jpg");
          break;
        case 2:
          this.coverImgUrl = require("../assets/liujingyuan2.jpg");
          this.coverImgUr = require("../assets/liujingyuan2.jpg");
          break;
        case 3:
          this.coverImgUrl = require("../assets/liujingyuan3.jpg");
          this.coverImgUr = require("../assets/liujingyuan3.jpg");
          break;
        case 4:
          this.coverImgUrl = require("../assets/liujingyuan4.jpg");
          this.coverImgUr = require("../assets/liujingyuan4.jpg");
          break;
      }
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
.aa{
color: red;
}
</style>
