<template>
  <div class="yuyin">
    <div class="poj">乱击:</div>

    <div class="yuyin1">
      <div class="yuyin2">全都去死吧！</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang1">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">弓箭手，准备放箭</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang2">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">全都去死吧</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang3">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">弓箭手，准备放箭</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang4">确认</button>
      </div>
    </div>
    <div class="yuyin1">
      <div class="yuyin2">趁敌乱而击之，必大获全胜</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang5">确认</button>
      </div>
    </div>
    <div class="yuyin1">
      <div class="yuyin2">凶顽之贼，皆以乱箭射之</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang6">确认</button>
      </div>
    </div>
    <div class="yuyin1">
      <div class="yuyin2">箭支充足，尽管取用</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang7">确认</button>
      </div>
    </div>
    <div class="yuyin1">
      <div class="yuyin2">放箭！放箭！</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang8">确认</button>
      </div>
    </div>

    
<div class="poj">血裔:</div>

    <div class="yuyin1">
      <div class="yuyin2">四世三公，名冠天下</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang9">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">诸公，皆吾功臣元勋也</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang10">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">吾袁门之裔，定一统天下</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang11">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">世受皇恩，威震海内</div>

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
  name: "YuanShaoJN",
  components: {},
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    bofang1() {
      let music1 = new Audio();
      music1 = require("../static/audio/luanji1.mp3");
      this.$refs.audio.src = music1;
      this.$refs.audio.play();
    },
    bofang2() {
      let music2 = new Audio();
      music2 = require("../static/audio/luanji2.mp3");
      this.$refs.audio.src = music2;
      this.$refs.audio.play();
    },
    bofang3() {
      let music3 = new Audio();
      music3 = require("../static/audio/luanji3.mp3");
      this.$refs.audio.src = music3;
      this.$refs.audio.play();
    },
    bofang4() {
      let music4 = new Audio();
      music4 = require("../static/audio/luanji4.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
     bofang5() {
      let music4 = new Audio();
      music4 = require("../static/audio/luanji5.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
     bofang6() {
      let music4 = new Audio();
      music4 = require("../static/audio/luanji6.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
     bofang7() {
      let music4 = new Audio();
      music4 = require("../static/audio/luanji7.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
     bofang8() {
      let music4 = new Audio();
      music4 = require("../static/audio/luanji8.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
    bofang9() {
      let music4 = new Audio();
      music4 = require("../static/audio/xueyi1.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
    bofang10() {
      let music4 = new Audio();
      music4 = require("../static/audio/xueyi2.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
    bofang11() {
      let music4 = new Audio();
      music4 = require("../static/audio/xueyi3.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
    bofang12() {
      let music4 = new Audio();
      music4 = require("../static/audio/xueyi4.mp3");
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
