<template>
  <div class="xush">
    <button class="dianji" @click="push"></button>
  </div>
</template>
<script>
export default {
  name: "ZhongY",
  components: {},
  methods: {
    push() {
      this.$router.push({ path: "/ZhongYao" });
    },
  },
};
</script>

<style scoped>
.xush {
  background: url("../assets/zhongyao1.png");
  width: 100%;
  height: 100%;
}

.dianji {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  border: none;
}
</style>
