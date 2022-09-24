<template>
  <div class="yuyin">
    <div class="poj">慧识:</div>

    <div class="yuyin1">
      <div class="yuyin2">聪以知远，明以察微</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang1">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">见微知著，识人心智</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang2">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">星辰虽小，难掩其明</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang3">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">不过星霭云雾，岂可挡我七窍清明</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang4">确认</button>
      </div>
    </div>
 
      <div class="poj">天翊:</div>

      <div class="yuyin1">
        <div class="yuyin2">天命靡常，唯德是辅</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang5">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">可成吾志者，必此人也</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang6">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">此诚天赐余之主也</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang7">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">天赐明主，吾自择之</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang8">确认</button>
        </div>
      </div>
   
   
      <div class="poj">辉逝:</div>

      <div class="yuyin1">
        <div class="yuyin2">丧家之犬，主公实不足虑也</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang9">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">时势兼备，主公复有何忧</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang10">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">
            殚思极虑，以临制变
        </div>

        <div class="yuyin3">
          <button class="butt" @click="bofang11">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">沥血书辞，以效区区之忠</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang12">确认</button>
        </div>
      </div>
   

 
      <div class="poj">佐幸:</div>

      <div class="yuyin1">
        <div class="yuyin2">以聪虑难，悉咨于上</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang13">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">身计国谋，不可两遂</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang14">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">吾计均已言明，主公可自择而行</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang15">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">君以国士待吾，吾自以国士报之</div>

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
  name: "ShenGuoJiaJN",
  components: {},
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    bofang1() {
      let music1 = new Audio();
      music1 = require("../static/audio/huishi1.mp3");
      this.$refs.audio.src = music1;
      this.$refs.audio.play();
    },
    bofang2() {
      let music2 = new Audio();
      music2 = require("../static/audio/huishi2.mp3");
      this.$refs.audio.src = music2;
      this.$refs.audio.play();
    },
    bofang3() {
      let music3 = new Audio();
      music3 = require("../static/audio/huishi3.mp3");
      this.$refs.audio.src = music3;
      this.$refs.audio.play();
    },
    bofang4() {
      let music4 = new Audio();
      music4 = require("../static/audio/huishi4.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
      bofang5() {
      let music1 = new Audio();
      music1 = require("../static/audio/tianyi1.mp3");
      this.$refs.audio.src = music1;
      this.$refs.audio.play();
    },
    bofang6() {
      let music2 = new Audio();
      music2 = require("../static/audio/tianyi2.mp3");
      this.$refs.audio.src = music2;
      this.$refs.audio.play();
    },
    bofang7() {
      let music3 = new Audio();
      music3 = require("../static/audio/tianyi3.mp3");
      this.$refs.audio.src = music3;
      this.$refs.audio.play();
    },
    bofang8() {
      let music4 = new Audio();
      music4 = require("../static/audio/tianyi4.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
      bofang9() {
      let music1 = new Audio();
      music1 = require("../static/audio/huisi1.mp3");
      this.$refs.audio.src = music1;
      this.$refs.audio.play();
    },
    bofang10() {
      let music2 = new Audio();
      music2 = require("../static/audio/huisi2.mp3");
      this.$refs.audio.src = music2;
      this.$refs.audio.play();
    },
    bofang11() {
      let music3 = new Audio();
      music3 = require("../static/audio/huisi3.mp3");
      this.$refs.audio.src = music3;
      this.$refs.audio.play();
    },
    bofang12() {
      let music4 = new Audio();
      music4 = require("../static/audio/huisi4.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
      bofang13() {
      let music1 = new Audio();
      music1 = require("../static/audio/zuoxing1.mp3");
      this.$refs.audio.src = music1;
      this.$refs.audio.play();
    },
    bofang14() {
      let music2 = new Audio();
      music2 = require("../static/audio/pojun2.mp3");
      this.$refs.audio.src = music2;
      this.$refs.audio.play();
    },
    bofang15() {
      let music3 = new Audio();
      music3 = require("../static/audio/zuoxing3.mp3");
      this.$refs.audio.src = music3;
      this.$refs.audio.play();
    },
    bofang16() {
      let music4 = new Audio();
      music4 = require("../static/audio/zuoxing4.mp3");
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
  text-shadow: 0 0 10px rgb(225, 197, 197), 0 0 10px rgb(225, 197, 197),
    0 0 10px rgb(225, 197, 197), 0 0 10px rgb(225, 197, 197);
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
