<template>
  <div class="yuyin">
    <div class="poj">八阵:</div>

    <div class="yuyin1">
      <div class="yuyin2">太极生两仪，两仪生四象，四象生八卦</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang1">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">你可识得此阵？</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang2">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">你可识得此阵？</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang3">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">太极生两仪，两仪生四象，四象生八卦</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang4">确认</button>
      </div>
    </div>
    
    <div class="yuyin1">
      <div class="yuyin2">敢入此阵者，就准备面对天地之威吧</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang5">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">天有八门，地有八方</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang6">确认</button>
      </div>
    </div>

    
<div class="poj">火计:</div>

    <div class="yuyin1">
      <div class="yuyin2">此火可助我军大获全胜</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang7">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">燃烧吧</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang8">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">燃烧吧</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang9">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">此火可助我军大获全胜</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang10">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">黄龙翔天，离火灭世</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang11">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">天火熊熊，燃尽汝躯</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang12">确认</button>
      </div>
    </div>

    <div class="poj">看破:</div>

    <div class="yuyin1">
      <div class="yuyin2">你的计谋被识破了</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang13">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">雕虫小技</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang14">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">雕虫小技</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang15">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">你的计谋被识破了</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang16">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">一切都逃不过我的法眼</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang17">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">我，就是智慧的化身</div>

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
  name: "WoLongZhuGeJN",
  components: {},
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    bofang1() {
      let music1 = new Audio();
      music1 = require("../static/audio/bazhen1.mp3");
      this.$refs.audio.src = music1;
      this.$refs.audio.play();
    },
    bofang2() {
      let music2 = new Audio();
      music2 = require("../static/audio/bazhen2.mp3");
      this.$refs.audio.src = music2;
      this.$refs.audio.play();
    },
    bofang3() {
      let music3 = new Audio();
      music3 = require("../static/audio/bazhen3.mp3");
      this.$refs.audio.src = music3;
      this.$refs.audio.play();
    },
    bofang4() {
      let music4 = new Audio();
      music4 = require("../static/audio/bazhen4.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
     bofang5() {
      let music4 = new Audio();
      music4 = require("../static/audio/bazhen5.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
     bofang6() {
      let music4 = new Audio();
      music4 = require("../static/audio/bazhen6.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
     bofang7() {
      let music4 = new Audio();
      music4 = require("../static/audio/huoji1.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
     bofang8() {
      let music4 = new Audio();
      music4 = require("../static/audio/huoji2.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
    bofang9() {
      let music4 = new Audio();
      music4 = require("../static/audio/huoji3.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
    bofang10() {
      let music4 = new Audio();
      music4 = require("../static/audio/huoji4.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
    bofang11() {
      let music4 = new Audio();
      music4 = require("../static/audio/huoji5.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
    bofang12() {
      let music4 = new Audio();
      music4 = require("../static/audio/huoji6.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },

     bofang13() {
      let music4 = new Audio();
      music4 = require("../static/audio/kanpo1.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
     bofang14() {
      let music4 = new Audio();
      music4 = require("../static/audio/kanpo2.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
     bofang15() {
      let music4 = new Audio();
      music4 = require("../static/audio/kanpo3.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
     bofang16() {
      let music4 = new Audio();
      music4 = require("../static/audio/kanpo4.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
       bofang17() {
      let music4 = new Audio();
      music4 = require("../static/audio/kanpo5.mp3");
      this.$refs.audio.src = music4;
      this.$refs.audio.play();
    },
       bofang18() {
      let music4 = new Audio();
      music4 = require("../static/audio/kanpo6.mp3");
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
