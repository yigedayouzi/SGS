<template>
  <div class="da">
    <div class="search">
      <wj-search-2></wj-search-2>
    </div>

    <div class="select">
      <div class="index">
        <div class="wei">
          <WeiGuo></WeiGuo>
        </div>

        <div class="shu">
          <ShuGuo></ShuGuo>
        </div>

        <div class="wu">
          <WuGuo></WuGuo>
        </div>

        <div class="qun">
          <QunXiong></QunXiong>
        </div>
      </div>

      <div class="show">
        <router-view></router-view>
      </div>

      <div class="man">
        <div class="wei">
          <YiJiang></YiJiang>
        </div>

        <div class="shu">
          <jie-xian></jie-xian>
        </div>

        <div class="wu">
          <feng-huo></feng-huo>
        </div>

        <div class="qun">
          <ShenJ></ShenJ>
        </div>
      </div>
    </div>

    <div class="footer" ref="mainDiv"></div>
  </div>
</template>

<script>
import YiJiang from "./components/YiJiang.vue";
import WjSearch2 from "./components/WjSearch2.vue";
import WeiGuo from "./components/WeiGuo.vue";
import ShuGuo from "./components/ShuGuo.vue";
import QunXiong from "./components/QunXiong.vue";
import WuGuo from "./components/WuGuo.vue";
import JieXian from "./components/JieXian.vue";
import FengHuo from "./components/FengHuo.vue";
import ShenJ from "./components/ShenJ.vue";

export default {
  methods: {
    getDivHeight() {
      const screenheight = window.innerHeight;
      this.$refs.mainDiv.style.height = screenheight - 793+ "px";
      // 793 为 头部组件高度 + 底部组件高度
      // mainDiv 为需控制高度自适应盒子，通过 ref="mainDiv" 绑定
    },
  },
  // 在 mounted 生命周期监听窗口变化并触发上文处理函数，修改高度
  mounted() {
    this.getDivHeight();
    window.addEventListener("resize", this.getDivHeight);
  },
  unmounted() {
    window.removeEventListener("resize", this.getDivHeight, false);
  },

  name: "App",

  components: {
    WeiGuo,
    ShuGuo,
    QunXiong,
    WuGuo,
    YiJiang,
    JieXian,
    FengHuo,
    ShenJ,
    WjSearch2,
  },
};
</script>

<style>
* {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.search {
  box-sizing: border-box;
  background-color: bisque;
  height: 90px;
  width: 100%;
  overflow: hidden;
  background-size: 600px 90px;
  border: solid 3px;
}
.select {
  height: 700px;
  width: 100%;
  display: flex;
  background: url("./assets/beijing.jpg");
  background-size: cover;
  border-right: solid 3px;
  border-left: solid 3px;
  border-bottom: solid 3px;
  box-sizing: border-box;
}
.footer {
  background-color: bisque;
  width: 100%;
  position: absolute;
  top: 790px;
  bottom: 0px;
  height: 0px;
  min-height: 90px;
  border-bottom: solid 3px;
  border-left: solid 3px;
  border-right: solid 3px;
}
.index {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.show {
  flex: 6;
}

.man {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.wei {
  flex: 1;
}
.shu {
  flex: 1;
}
.wu {
  flex: 1;
}
.qun {
  flex: 1;
  margin-bottom: 5px;
}
</style>
