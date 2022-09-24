<template>
  <div class="yuyin">
   
      <div class="poj">成略:</div>

      <div class="yuyin1">
        <div class="yuyin2">得胜之略，已在我心中</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang1">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">妙计良策，片刻即出</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang2">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">决胜之策，已在我胸中，哈哈哈哈~</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang3">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">阿瞒若想得胜，只能依我此计</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang4">确认</button>
        </div>
      </div>

        <div class="yuyin1">
        <div class="yuyin2">需知尽知，谋略即成</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang13">确认</button>
        </div>
      </div>

        <div class="yuyin1">
        <div class="yuyin2">计略已成，此战必胜</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang14">确认</button>
        </div>
      </div>


      <div class="poj">恃才:</div>
      <div class="yuyin1">
        <div class="yuyin2">阿瞒帐下谋臣如云，哪个有我这般功绩</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang5">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">若不是我许子远，阿瞒焉能进这邺城</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang6">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">此战，难道不全凭我计策精妙？</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang7">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">阿瞒，这次你可要靠我啦</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang8">确认</button>
        </div>
      </div>

 <div class="yuyin1">
        <div class="yuyin2">天下局势，皆因我计更易</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang15">确认</button>
        </div>
      </div>

       <div class="yuyin1">
        <div class="yuyin2">孟德尚且敬我，汝意欲何为？</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang16">确认</button>
        </div>
      </div>


      <span class="poj">寸目:</span>
      <div class="yuyin1">
        <div class="yuyin2">袁氏既败，天下即定</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang9">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">我既有功，赏赐自然要取</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang10">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">谁胜谁负，又与我何干？</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang11">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">今日不考明日之事</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang12">确认</button>
        </div>
      </div>

<div class="yuyin1">
        <div class="yuyin2">计谋能做到的，就不需要想什么大局</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang17">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">一计只划一事</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang18">确认</button>
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
  name: "XuYouJN",
  components: {},
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    bofang1() {
      let music1 = new Audio();
      music1 = require("../static/audio/chenglue1.mp3");
      this.$refs.audio.src = music1;
      this.$refs.audio.play();
    },
    bofang2() {
      let music2 = new Audio();
      music2 = require("../static/audio/chenglue2.mp3");
      this.$refs.audio.src = music2;
      this.$refs.audio.play();
    },
    bofang3() {
      let music3 = new Audio();
      music3 = require("../static/audio/chenglue3.mp3");
      this.$refs.audio.src = music3;
      this.$refs.audio.play();
    },
    bofang4() {
      let music4 = new Audio();
      music4 = require("../static/audio/chenglue4.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
    bofang5() {
      let music5 = new Audio();
      music5 = require("../static/audio/shicai1.mp3");
      this.$refs.audio.src = music5;
      this.$refs.audio.play();
    },
    bofang6() {
      let music6 = new Audio();
      music6 = require("../static/audio/shicai2.mp3");
      this.$refs.audio.src = music6;
      this.$refs.audio.play();
    },
    bofang7() {
      let music7 = new Audio();
      music7 = require("../static/audio/shicai3.mp3");
      this.$refs.audio.src = music7;
      this.$refs.audio.play();
    },
    bofang8() {
      let music8 = new Audio();
      music8 = require("../static/audio/shicai4.mp3");
      this.$refs.audio.src = music8;
      this.$refs.audio.play();
    },
    bofang9() {
      let music9 = new Audio();
      music9 = require("../static/audio/cunmu1.mp3");
      this.$refs.audio.src = music9;
      this.$refs.audio.play();
    },
    bofang10() {
      let music10 = new Audio();
      music10 = require("../static/audio/cunmu2.mp3");
      this.$refs.audio.src = music10;
      this.$refs.audio.play();
    },
    bofang11() {
      let music11 = new Audio();
      music11 = require("../static/audio/cunmu3.mp3");
      this.$refs.audio.src = music11;
      this.$refs.audio.play();
    },
    bofang12() {
      let music12 = new Audio();
      music12 = require("../static/audio/cunmu4.mp3");
      this.$refs.audio.src = music12;
      this.$refs.audio.play();
    },
      bofang13() {
      let music13 = new Audio();
      music13 = require("../static/audio/chenglue5.mp3");
      this.$refs.audio.src = music13;
      this.$refs.audio.play();
    },
       bofang14() {
      let music14 = new Audio();
      music14 = require("../static/audio/chenglue6.mp3");
      this.$refs.audio.src = music14;
      this.$refs.audio.play();
    },
     bofang15() {
      let music15= new Audio();
      music15 = require("../static/audio/shicai5.mp3");
      this.$refs.audio.src = music15;
      this.$refs.audio.play();
    },
     bofang16() {
      let music16 = new Audio();
      music16 = require("../static/audio/shicai6.mp3");
      this.$refs.audio.src = music16;
      this.$refs.audio.play();
    },
     bofang17() {
      let music17 = new Audio();
      music17 = require("../static/audio/cunmu5.mp3");
      this.$refs.audio.src = music17;
      this.$refs.audio.play();
    },
     bofang18() {
      let music18 = new Audio();
      music18 = require("../static/audio/cunmu6.mp3");
      this.$refs.audio.src = music18;
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
  height: 20px;
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
