<template>
  <div class="xusheng">
    <div class="wujiangye" :style="bgstyle">
      <div
        :class="[fullScreenStatus.pifu ? 'show_box fullscreen' : 'show_box']"
        :style="bgstyl"
      >
        <div
          @click="changeSize('pifu')"
          :class="[fullScreenStatus.pifu ? 'compress' : 'expand']"
        ></div>
      </div>
      <router-view></router-view>
    </div>
    <div class="jinengye">
      <div class="jianjie">
        <span class="jj">简介</span><br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;杨彪（142年～225年），字文先。弘农郡华阴县（今陕西省华阴市）人。东汉末年名臣，太尉杨赐之子、名士杨修之父。
杨彪少年时受家学熏陶，初举孝廉、茂才。其后征拜为议郎，参与续写《东观汉记》。任京兆尹时，揭发黄门令王甫的贪赃行为，使其被定罪诛杀。累任侍中、五官中郎将、卫尉等职。汉献帝时，遍历三公之职。权臣董卓意图迁都时，杨彪据理力争；献帝东迁时，杨彪尽节护主。曹操挟献帝定都许县后，将杨彪下狱，获释后又任太常。他见汉室衰微，便诈称脚疾，不理世事。曹魏建立后，拒绝出任太尉，改光禄大夫，待以客礼。
黄初六年（225年），去世，享年八十四岁。其著作现仅存《答曹公书》一篇。
      </div>
      <div class="jineng">
        <span class="jj">技能</span><br />
        <span class="jj">昭汉：</span
        >锁定技，你于游戏的前四个准备阶段增加一点体力上限并回复1点体力；之后的三个准备阶段扣减一点体力上限。<br />
        <span class="jj">让节：</span>
        当你受到1点伤害后，你可以选择一项并摸一张牌：1.移动场上的一张牌；2.从牌堆或弃牌堆中获得一张你指定类型的牌。<br>
        <span class="jj">义争：</span>
       出牌阶段限一次，你可选择一名体力值不大于你的角色拼点：若你赢，跳过其下个摸牌阶段；若你没赢，你扣减一点体力上限。
        <button class="butt" @click="push">语音</button><br />
        <span class="jj">皮肤</span><br />

        <button class="buttony" value="1" id="b1" @click="change1">
          经典形象
        </button>
        <button class="buttony" value="2" id="b2" @click="change1">
          舐犊情深
        </button>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coverImgUrl: require("../assets/yangbiao1.png"),
      coverImgUr: require("../assets/yangbiao1.jpg"),
      fullScreenStatus: {
        pifu: false,
      },
    };
  },
  name: "YangBiao",
  components: {},
  methods: {
    change1(e) {
      let num = parseInt(e.target.value);
      switch (num) {
        case 1:
          this.coverImgUrl = require("../assets/yangbiao1.jpg");
          this.coverImgUr = require("../assets/yangbiao1.jpg");
          break;
        case 2:
          this.coverImgUrl = require("../assets/yangbiao2.jpg");
          this.coverImgUr = require("../assets/yangbiao2.jpg");
          break;
      }
    },
    push() {
      this.$router.push("/yangbiao/yangbiaoJN");
    },
    changeSize(type) {
      this.fullScreenStatus[type] = !this.fullScreenStatus[type];
    },
  },
  computed: {
    bgstyle() {
      return {
        background: "url(" + this.coverImgUrl + ")",
        "background-size": "cover",
        "background-position": "center",
        "border-left": "0",
        "border-radius": "20px",
      };
    },
    bgstyl() {
      return {
        background: "url(" + this.coverImgUr + ")",
        "background-repeat": "no-repeat",
        "z-index": 2,
      };
    },
  },
};
</script>

<style scoped>
.xusheng {
  height: 100%;
  width: 100%;
  border: solid 2px;
  border-radius: 20px;
  display: flex;
  border-top: 0px;
}
.jinengye {
  width: 65%;
  height: 100%;
  background-color: #efa;
  float: left;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: space-around;
}

.wujiangye {
  float: left;
  width: 35%;
  height: 100%;
  border-bottom: solid 1px;
  border-right: solid 3px;
  display: flex;
}

.jianjie {
  border: solid 2px;
  height: 300px;
  width: 85%;
  overflow: auto;
  font-size: 20px;
  border-radius: 10px;
  border-color: rgb(216, 136, 15);
}

.jineng {
  border: solid 2px;
  height: 300px;
  width: 85%;
  font-size: 20px;
  overflow: auto;
  border-radius: 10px;
  border-color: rgb(216, 136, 15);
}

.jj {
  font-size: 30px;
  color: rgb(164, 72, 207);
}

.butt {
  width: 60px;
  height: 30px;
  border-radius: 20%;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
}
.butt:hover {
  background: yellow;
}

.aud {
  width: 0px;
  height: 0px;
}

.ylqd {
  margin: 0 auto;
}

.buttony {
  width: 120px;
  height: 40px;
  margin: 5px;
  font-size: 20px;
  border-radius: 20px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
}
.buttony:hover {
  background: yellow;
}
.expand,
.compress {
  position: relative;
  width: 40px;
  height: 40px;
  background-image: url(../assets/expand.png);
  background-size: 100%;
  cursor: pointer;
}
.compress {
  background-image: url(../assets/compress.png);
}
.fullscreen {
  position: fixed !important;
  left: 50% !important;
  transform: translateX(-25%);
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
}
.show_box {
  height: 40px;
  width: 40px;
}
</style>
