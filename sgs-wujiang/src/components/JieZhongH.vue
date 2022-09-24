<template>
  <div class="xush">
    <button class="dianji" @click="push"></button>
  </div>
</template>
<script>
export default {
  name: "JieZhongH",
  components: {},
  methods: {
    push() {
      this.$router.push({ path: "/JieZhongHui" });
    },
  },
};
</script>

<style scoped>
.xush {
  background: url("../assets/jiezhonghui1.png");
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
