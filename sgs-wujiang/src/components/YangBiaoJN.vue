<template>
  <div class="yuyin">
    <div class="poj">昭汉:</div>

    <div class="yuyin1">
      <div class="yuyin2">天道昭昭，再兴如光武亦可期</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang1">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">汉祚将终，我又岂能无憾</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang2">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">兴复汉室，文先自当尽力而为</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang3">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">风雨飘摇，徒增忠臣嗟叹</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang4">确认</button>
      </div>
    </div>

    
<div class="poj">让节:</div>

    <div class="yuyin1">
      <div class="yuyin2">公既执掌权柄，又何必令君臣遭乱</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang5">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">公虽权倾朝野，亦当尊圣上之意</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang6">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">百般忍让，只求皇上不受波及</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang7">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">天下动之易，安之甚难，惟明公虑焉</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang8">确认</button>
      </div>
    </div>

    <div class="poj">义争:</div>

    <div class="yuyin1">
      <div class="yuyin2">一人劫天子，一人质公卿，此可行邪</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang9">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">诸君举事，当上顺天心，奈何如是！</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang10">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">国祚尚为汉，天子尚姓刘，岂有妄为之理</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang11">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">仗势欺君，实在是天地不容！</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang12">确认</button>
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
  name: "YangBiaoJN",
  components: {},
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    bofang1() {
      let music1 = new Audio();
      music1 = require("../static/audio/zhaohan1.mp3");
      this.$refs.audio.src = music1;
      this.$refs.audio.play();
    },
    bofang2() {
      let music2 = new Audio();
      music2 = require("../static/audio/zhaohan2.mp3");
      this.$refs.audio.src = music2;
      this.$refs.audio.play();
    },
    bofang3() {
      let music3 = new Audio();
      music3 = require("../static/audio/zhaohan3.mp3");
      this.$refs.audio.src = music3;
      this.$refs.audio.play();
    },
    bofang4() {
      let music4 = new Audio();
      music4 = require("../static/audio/zhaohan4.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
     bofang5() {
      let music4 = new Audio();
      music4 = require("../static/audio/rangjie1.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
     bofang6() {
      let music4 = new Audio();
      music4 = require("../static/audio/rangjie2.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
     bofang7() {
      let music4 = new Audio();
      music4 = require("../static/audio/rangjie3.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
     bofang8() {
      let music4 = new Audio();
      music4 = require("../static/audio/rangjie4.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
    bofang9() {
      let music4 = new Audio();
      music4 = require("../static/audio/yizhen1.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
    bofang10() {
      let music4 = new Audio();
      music4 = require("../static/audio/yizhen2.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
    bofang11() {
      let music4 = new Audio();
      music4 = require("../static/audio/yizhen3.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
    bofang12() {
      let music4 = new Audio();
      music4 = require("../static/audio/yizhen4.mp3");
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
