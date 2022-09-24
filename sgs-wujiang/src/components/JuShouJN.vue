<template>
  <div class="yuyin">
    <div class="poj">渐营:</div>

    <div class="yuyin1">
      <div class="yuyin2">事须缓图，欲速不达也</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang1">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">由缓至急，循循而进</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang2">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">缓而耗之，曹军自乱</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang3">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">徐以攻敌，缓图天下</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang4">确认</button>
      </div>
    </div>

    
    <div class="yuyin1">
      <div class="yuyin2">敌营虽然势小，但万不可急图</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang5">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">吾军势大，更应步步为营</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang6">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">曹军难待久战，徐图便可</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang7">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">步步为营，稳扎稳打</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang8">确认</button>
      </div>
    </div>

<div class="poj">矢北:</div>

    <div class="yuyin1">
      <div class="yuyin2">命系袁氏，一心向北</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang9">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">矢志于北，尽忠于国</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang10">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">矢志不降，克定北还</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang11">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">心如归雁，死不足拦</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang12">确认</button>
      </div>
    </div>
    <div class="yuyin1">
      <div class="yuyin2">别妄想让我说出一个降字</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang13">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">吾头可断，腰不可折</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang14">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">心系袁家之局，小挫无妨</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang15">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">既有赤心所念，何惧刀山火海</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang16">确认</button>
      </div>
    </div>

    <button class="butto" @click="back">返回</button>
  </div>

  <audio controls ref="audio" class="aud">
    <source :src="mp3url" />
  </audio>
</template>

<script>
export default {
  data() {
    return {
      mp3url: "",
    };
  },
  name: "WangJiJN",
  components: {},
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    bofang1() {
      let music1 = new Audio();
      music1 = require("../static/audio/jianying1.mp3");
      this.$refs.audio.src = music1;
      this.$refs.audio.play();
    },
    bofang2() {
      let music2 = new Audio();
      music2 = require("../static/audio/jianying2.mp3");
      this.$refs.audio.src = music2;
      this.$refs.audio.play();
    },
    bofang3() {
      let music3 = new Audio();
      music3 = require("../static/audio/jianying3.mp3");
      this.$refs.audio.src = music3;
      this.$refs.audio.play();
    },
    bofang4() {
      let music4 = new Audio();
      music4 = require("../static/audio/jianying4.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
     bofang5() {
      let music4 = new Audio();
      music4 = require("../static/audio/jianying5.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
     bofang6() {
      let music4 = new Audio();
      music4 = require("../static/audio/jianying6.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
     bofang7() {
      let music4 = new Audio();
      music4 = require("../static/audio/jianying7.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
     bofang8() {
      let music4 = new Audio();
      music4 = require("../static/audio/jianying8.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
      bofang9() {
      let music1 = new Audio();
      music1 = require("../static/audio/shibei1.mp3");
      this.$refs.audio.src = music1;
      this.$refs.audio.play();
    },
    bofang10() {
      let music2 = new Audio();
      music2 = require("../static/audio/shibei2.mp3");
      this.$refs.audio.src = music2;
      this.$refs.audio.play();
    },
    bofang11() {
      let music3 = new Audio();
      music3 = require("../static/audio/shibei3.mp3");
      this.$refs.audio.src = music3;
      this.$refs.audio.play();
    },
    bofang12() {
      let music4 = new Audio();
      music4 = require("../static/audio/shibei4.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
     bofang13() {
      let music4 = new Audio();
      music4 = require("../static/audio/shibei5.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
     bofang14() {
      let music4 = new Audio();
      music4 = require("../static/audio/shibei6.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
     bofang15() {
      let music4 = new Audio();
      music4 = require("../static/audio/shibei7.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
     bofang16() {
      let music4 = new Audio();
      music4 = require("../static/audio/shibei8.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
  },
};
</script>

<style scoped>
.yuyin {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  overflow: auto;
   background: rgba(0, 0, 0, 0);
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.yuyin1 {
  height: 40px;
  width: 100%;
  margin-top: 10px;
  border: solid 1px;
  border-radius: 20px;
  display: flex;
  overflow: hidden;
  text-align: center;
  line-height: 40px;
}

.butt {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border-color: rgb(127, 204, 204);
  transform: translateY(-6px);
  z-index: 1;
}
.butt:hover {
  background: yellow;
}

.jinengming {
  margin: 8px;
  width: 95%;
  height: 600px;
}

.poj {
height: 40px;
  margin: 5px;
  font-size: 40px;
  font-weight: 600;
text-shadow: 0 0 10px rgb(225, 197, 197) ,0 0 10px rgb(225, 197, 197),0 0 10px rgb(225, 197, 197),0 0 10px rgb(225, 197, 197);
}


.yuyin2 {
  font-size: 20px;
  flex: 4;
  height: 100%;
  overflow: auto;
  background-color: rgb(225, 197, 197);
}

.yuyin3 {
  font-size: 30px;
  flex: 1;
  height: 100%;
  background-color: rgb(229, 185, 109);
}

.aud {
  width: 0px;
  height: 0px;
}

.butto {
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  width: 80px;
  height: 40px;
  font-size: 20px;
  border-radius: 10px;
  border-color: rgb(127, 204, 204);
  margin: 30px;
}
.butto:hover {
  background: yellow;
}
</style>
