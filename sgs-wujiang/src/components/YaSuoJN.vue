<template>
  <div class="yuyin">
    <div class="yuyin1">
      <div class="yuyin2">死亡如风，常伴吾声</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang1">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">长路漫漫，唯剑作伴。</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang2">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">正义，好个冠冕堂皇之词。</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang3">确认</button>
      </div>
    </div>
    <div class="yuyin1">
      <div class="yuyin2">谁说我酒量不好的？</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang4">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">ha sa ki</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang3">确认</button>
      </div>
    </div>

    <div class="yuyin1">
      <div class="yuyin2">so lie ya kie tong</div>

      <div class="yuyin3">
        <button class="butt" @click="bofang3">确认</button>
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
  name: "YaSuoJN",
  components: {},
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    bofang1() {
      let music1 = new Audio();
      music1 = require("../static/audio/pojun1.mp3");
      this.$refs.audio.src = music1;
      this.$refs.audio.play();
    },
    bofang2() {
      let music2 = new Audio();
      music2 = require("../static/audio/pojun2.mp3");
      this.$refs.audio.src = music2;
      this.$refs.audio.play();
    },
    bofang3() {
      let music3 = new Audio();
      music3 = require("../static/audio/pojun4.mp3");
      this.$refs.audio.src = music3;
      this.$refs.audio.play();
    },
    bofang4() {
      let music4 = new Audio();
      music4 = require("../static/audio/pojun3.mp3");
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
