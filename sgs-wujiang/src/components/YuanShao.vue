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
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;袁绍（？－202年6月28日），字本初，汝南郡汝阳县（今河南商水）人。袁绍出身汉末名门“汝南袁氏”，自高祖父起，四代有五人位居三公。袁绍早年任中军校尉、司隶校尉，曾指挥诛杀宦官。初平元年（190年），与董卓对立，被推举为关东联军首领。但在建安五年（200年）的官渡之战中大败于曹操。建安七年（202年），袁绍在平定冀州叛乱之后病逝。



      </div>
      <div class="jineng">
        <span class="jj">技能</span><br />
        <span class="jj">乱击：</span
        >你可以将两张花色相同的手牌当【万箭齐发】使用。
<br />
        <span class="jj">血裔：</span>
       主公技，锁定技，你的手牌上限+2X（X为其他群势力的角色数）。


        <button class="butt" @click="push">语音</button><br />
        <span class="jj">皮肤</span><br />

        <button class="buttony" value="1" id="b1" @click="change1">
          经典形象
        </button>
        <button class="buttony" value="2" id="b2" @click="change1">
         乱箭肃敌
        </button>
        <button class="buttony" value="3" id="b2" @click="change1">
          一统河北
        </button>
        <button class="buttony" value="4" id="b2" @click="change1">
         一往无前
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coverImgUrl: require("../assets/yuanshao1.jpg"),
      coverImgUr: require("../assets/yuanshao1.jpg"),
      fullScreenStatus: {
        pifu: false,
      },
    };
  },
  name: "YuanShao",
  components: {},
  methods: {
    change1(e) {
      let num = parseInt(e.target.value);
      switch (num) {
        case 1:
          this.coverImgUrl = require("../assets/yuanshao1.jpg");
          this.coverImgUr = require("../assets/yuanshao1.jpg");
          break;
        case 2:
          this.coverImgUrl = require("../assets/yuanshao2.jpg");
          this.coverImgUr = require("../assets/yuanshao2.jpg");
          break;
        case 3:
          this.coverImgUrl = require("../assets/yuanshao3.jpg");
          this.coverImgUr = require("../assets/yuanshao3.jpg");
          break;
          case 4:
          this.coverImgUrl = require("../assets/yuanshao4.jpg");
          this.coverImgUr = require("../assets/yuanshao4.jpg");
          break;
       
      }
    },
    push() {
      this.$router.push("/YuanShao/YuanShaoJN");
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
