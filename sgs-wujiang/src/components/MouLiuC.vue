<template>
  <div class="caoc">
    <button class="dianji" @click="push"></button>
  </div>
</template>
<script>
export default {
  name: "MouLiuC",
  components: {},
  methods: {
    push() {
      this.$router.push({ path: "/MouLiuCheng" });
    },
  },
};
</script>

<style scoped>
.caoc {
  background: url("../assets/liucheng1.png");
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
