<template>
  <div class="yuyin">
   
      <span class="poj">挑衅:</span>

      <div class="yuyin1">
        <div class="yuyin2">黄毛小儿，怕死，就滚回去！哈哈哈哈！</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang1">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">来来来，战个痛快</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang2">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">哈哈哈！不敢来的，都是懦夫</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang3">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">你去吧，我不斩无名之将</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang4">确认</button>
        </div>
      </div>
      <span class="poj">志继:</span>
      <div class="yuyin1">
        <div class="yuyin2">知遇之恩，大于天</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang5">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">继往开来，重兴大汉之荣光</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang6">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">丞相，一切交给我，您放心去吧</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang7">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">这仁德之世，我会拼死守护</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang8">确认</button>
        </div>
      </div>
      <span class="poj">观星:</span>
      <div class="yuyin1">
        <div class="yuyin2">放手一搏，或未可知</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang9">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">璀璨星河，伴我同行</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang10">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">知天易，逆天安不可违？</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang11">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">观今夜天象，忆丞相遗志</div>

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
  name: "JiangWeiJN",
  components: {},
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    bofang1() {
      let music1 = new Audio();
      music1 = require("../static/audio/tiaoxin1.mp3");
      this.$refs.audio.src = music1;
      this.$refs.audio.play();
    },
    bofang2() {
      let music2 = new Audio();
      music2 = require("../static/audio/tiaoxin2.mp3");
      this.$refs.audio.src = music2;
      this.$refs.audio.play();
    },
    bofang3() {
      let music3 = new Audio();
      music3 = require("../static/audio/tiaoxin3.mp3");
      this.$refs.audio.src = music3;
      this.$refs.audio.play();
    },
    bofang4() {
      let music4 = new Audio();
      music4 = require("../static/audio/tiaoxin4.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
    bofang5() {
      let music5 = new Audio();
      music5 = require("../static/audio/zhiji1.mp3");
      this.$refs.audio.src = music5;
      this.$refs.audio.play();
    },
    bofang6() {
      let music6 = new Audio();
      music6 = require("../static/audio/zhiji2.mp3");
      this.$refs.audio.src = music6;
      this.$refs.audio.play();
    },
    bofang7() {
      let music7 = new Audio();
      music7 = require("../static/audio/zhiji3.mp3");
      this.$refs.audio.src = music7;
      this.$refs.audio.play();
    },
    bofang8() {
      let music8 = new Audio();
      music8 = require("../static/audio/zhiji4.mp3");
      this.$refs.audio.src = music8;
      this.$refs.audio.play();
    },
    bofang9() {
      let music9 = new Audio();
      music9 = require("../static/audio/guanxing1.mp3");
      this.$refs.audio.src = music9;
      this.$refs.audio.play();
    },
    bofang10() {
      let music10 = new Audio();
      music10 = require("../static/audio/guanxing2.mp3");
      this.$refs.audio.src = music10;
      this.$refs.audio.play();
    },
    bofang11() {
      let music11 = new Audio();
      music11 = require("../static/audio/guanxing3.mp3");
      this.$refs.audio.src = music11;
      this.$refs.audio.play();
    },
    bofang12() {
      let music12 = new Audio();
      music12 = require("../static/audio/guanxing4.mp3");
      this.$refs.audio.src = music12;
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
  background-color: rgb(229, 185, 109);
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
  text-align: center;
  line-height: 40px;
  overflow: hidden;
}

.butt {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border-color: rgb(127, 204, 204);
  overflow: hidden;
  transform: translateY(-6px);
}
.butt:hover {
  background: yellow;
}

.jinengming {
  margin: 8px;
  width: 95%;
  height: 600px;
  overflow: auto;
}

.poj {
  margin: 5px;
  font-size: 30px;
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
