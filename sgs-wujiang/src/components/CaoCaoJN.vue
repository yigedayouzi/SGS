<template>
  <div class="yuyin">
   
      <span class="poj">奸雄:</span>

      <div class="yuyin1">
        <div class="yuyin2">为谋天下一统，何惜眼前小损</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang1">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">计定九州乱，雄吞天下兵</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang2">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">为谋霸业，小损无妨</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang3">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">宁负奸雄骂名，胜过英雄短命</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang4">确认</button>
        </div>
      </div>

        <div class="yuyin1">
        <div class="yuyin2">燕雀安知鸿鹄之志</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang5">确认</button>
        </div>
      </div>

        <div class="yuyin1">
        <div class="yuyin2">夫英雄者，胸怀大志，腹有良谋</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang6">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">吾好梦中杀人</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang7">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">宁教我负天下人，休教天下人负我</div>
        <div class="yuyin3">
          <button class="butt" @click="bofang8">确认</button>
        </div>
      </div>

  <span class="poj">护驾:</span>

      <div class="yuyin1">
        <div class="yuyin2">来人，将此贼拿下</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang9">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">仲康何在，速来援吾</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang10">确认</button>
        </div>
      </div>

 <div class="yuyin1">
        <div class="yuyin2">众将忠义，护我周全</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang11">确认</button>
        </div>
      </div>

       <div class="yuyin1">
        <div class="yuyin2">吾麾下无人乎？</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang12">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">护卫何在？</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang13">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">大胆逆贼，谁可擒之</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang14">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">魏将何在</div>

        <div class="yuyin3">
          <button class="butt" @click="bofang15">确认</button>
        </div>
      </div>

      <div class="yuyin1">
        <div class="yuyin2">来人，护驾</div>

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
  name: "XuYouJN",
  components: {},
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    bofang1() {
      let music1 = new Audio();
      music1 = require("../static/audio/jianxiong1.mp3");
      this.$refs.audio.src = music1;
      this.$refs.audio.play();
    },
    bofang2() {
      let music2 = new Audio();
      music2 = require("../static/audio/jianxiong2.mp3");
      this.$refs.audio.src = music2;
      this.$refs.audio.play();
    },
    bofang3() {
      let music3 = new Audio();
      music3 = require("../static/audio/jianxiong3.mp3");
      this.$refs.audio.src = music3;
      this.$refs.audio.play();
    },
    bofang4() {
      let music4 = new Audio();
      music4 = require("../static/audio/jianxiong4.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
    bofang5() {
      let music5 = new Audio();
      music5 = require("../static/audio/jianxiong5.mp3");
      this.$refs.audio.src = music5;
      this.$refs.audio.play();
    },
    bofang6() {
      let music6 = new Audio();
      music6 = require("../static/audio/jianxiong6.mp3");
      this.$refs.audio.src = music6;
      this.$refs.audio.play();
    },
    bofang7() {
      let music7 = new Audio();
      music7 = require("../static/audio/jianxiong7.mp3");
      this.$refs.audio.src = music7;
      this.$refs.audio.play();
    },
    bofang8() {
      let music8 = new Audio();
      music8 = require("../static/audio/jianxiong8.mp3");
      this.$refs.audio.src = music8;
      this.$refs.audio.play();
    },
    bofang9() {
      let music9 = new Audio();
      music9 = require("../static/audio/hujia1.mp3");
      this.$refs.audio.src = music9;
      this.$refs.audio.play();
    },
    bofang10() {
      let music10 = new Audio();
      music10 = require("../static/audio/hujia2.mp3");
      this.$refs.audio.src = music10;
      this.$refs.audio.play();
    },
    bofang11() {
      let music11 = new Audio();
      music11 = require("../static/audio/hujia3.mp3");
      this.$refs.audio.src = music11;
      this.$refs.audio.play();
    },
    bofang12() {
      let music12 = new Audio();
      music12 = require("../static/audio/hujia4.mp3");
      this.$refs.audio.src = music12;
      this.$refs.audio.play();
    },
      bofang13() {
      let music13 = new Audio();
      music13 = require("../static/audio/hujia5.mp3");
      this.$refs.audio.src = music13;
      this.$refs.audio.play();
    },
       bofang14() {
      let music14 = new Audio();
      music14 = require("../static/audio/hujia6.mp3");
      this.$refs.audio.src = music14;
      this.$refs.audio.play();
    },
     bofang15() {
      let music15= new Audio();
      music15 = require("../static/audio/hujia7.mp3");
      this.$refs.audio.src = music15;
      this.$refs.audio.play();
    },
     bofang16() {
      let music16 = new Audio();
      music16 = require("../static/audio/hujia8.mp3");
      this.$refs.audio.src = music16;
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
