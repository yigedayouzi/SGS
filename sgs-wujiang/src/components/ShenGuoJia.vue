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
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;郭嘉（170年－207年），字奉孝，颍川阳翟（今河南禹州）人。东汉末年曹操帐下著名谋士。
        郭嘉出身颍川郭氏。原为袁绍部下，后转投曹操，为曹操统一中国北方立下了功勋，官至军师祭酒，封洧阳亭侯。在曹操征伐乌丸时病逝，年仅三十八岁。谥号贞侯。史书上称他“才策谋略，世之奇士”。曹操称赞他见识过人，是自己的“奇佐”。
      </div>
      <div class="jineng">
        <span class="jj">技能</span><br />
        <span class="jj">慧识：</span
        >出牌阶段限一次，若你的体力上限小于10，你可以进行判定：若结果与此阶段内以此法进行判定的结果的花色均不同，且此时你的体力上限小于10，你可以重复此流程并加1点体力上限，然后你可以将所有生效的判定牌交给一名角色。若其手牌数为全场最多，你减1点体力上限。<br />
        <span class="jj">天翊：</span>
        觉醒技，准备阶段，若全场角色在本局游戏中均受到过伤害，你加2点体力上限，回复1点体力，然后令一名角色获得“佐幸”。<br>
        <span class="jj">辉逝：</span>
        限定技，出牌阶段，你可以选择一名角色，若其：有未触发的觉醒技，且你的体力上限不小于X（X为全场角色数），则你选择其中一个觉醒技，然后该角色视为满足觉醒条件；没有未触发的觉醒技，其摸四张牌。若如此做，你减2点体力上限。<br>
        <span class="jj">佐幸：</span>
        准备阶段，若神郭嘉存活且体力上限大于1，你可令神郭嘉减1点体力上限。若如此做，本回合接下来的出牌阶段限一次，你可视为使用一张普通锦囊牌。<br>
        <button class="butt" @click="push">语音</button><br />
        <span class="jj">皮肤</span><br />

        <button class="buttony" value="1" id="b1" @click="change1">
          经典形象
        </button>
        <button class="buttony" value="2" id="b2" @click="change1">
          虎年清明
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coverImgUrl: require("../assets/shenguojia1.jpg"),
      coverImgUr: require("../assets/shenguojia1.jpg"),
      fullScreenStatus: {
        pifu: false,
      },
    };
  },
  name: "ShenGuoJia",
  components: {},
  methods: {
    change1(e) {
      let num = parseInt(e.target.value);
      switch (num) {
        case 1:
          this.coverImgUrl = require("../assets/shenguojia1.jpg");
          this.coverImgUr = require("../assets/shenguojia1.jpg");
          break;
        case 2:
          this.coverImgUrl = require("../assets/shenguojia2.jpg");
          this.coverImgUr = require("../assets/shenguojia2.jpg");
          break;
      }
    },
    push() {
      this.$router.push("/ShenGuoJia/ShenGuoJiaJN");
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
