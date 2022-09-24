<template>
  <div class="yuyin">
    <div class="poj">武圣:</div>

    <div class="yuyin1">
      <div class="yuyin2">吾之所向，何人能当？！</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang1">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">大哥莫急，待我去去就来</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang2">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">敌酋虽勇，亦非关某一合之将</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang3">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">酒且斟下，关某片刻便归</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang4">确认</button>
      </div>
    </div>


    <div class="yuyin1">
      <div class="yuyin2">青龙知酒温，饮尽贼酋血！</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang5">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">刀饮青龙血，马踏佞鬼魂！</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang6">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">看尔乃插标卖首</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang7">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">关羽在此，尔等受死</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang8">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">又一个刀下亡魂</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang9">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">忠义当先，有进无退</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang10">确认</button>
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
  name: "WangYiJN",
  components: {},
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    bofang1() {
      let music1 = new Audio();
      music1 = require("../static/audio/wusheng1.mp3");
      this.$refs.audio.src = music1;
      this.$refs.audio.play();
    },
    bofang2() {
      let music2 = new Audio();
      music2 = require("../static/audio/wusheng2.mp3");
      this.$refs.audio.src = music2;
      this.$refs.audio.play();
    },
    bofang3() {
      let music3 = new Audio();
      music3 = require("../static/audio/wusheng3.mp3");
      this.$refs.audio.src = music3;
      this.$refs.audio.play();
    },
    bofang4() {
      let music4 = new Audio();
      music4 = require("../static/audio/wusheng4.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
     bofang5() {
      let music4 = new Audio();
      music4 = require("../static/audio/wusheng5.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
     bofang6() {
      let music4 = new Audio();
      music4 = require("../static/audio/wusheng6.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
     bofang7() {
      let music4 = new Audio();
      music4 = require("../static/audio/wusheng7.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
     bofang8() {
      let music4 = new Audio();
      music4 = require("../static/audio/wusheng8.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
     bofang9() {
      let music4 = new Audio();
      music4 = require("../static/audio/wusheng9.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
     bofang10() {
      let music4 = new Audio();
      music4 = require("../static/audio/wusheng10.mp3");
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
