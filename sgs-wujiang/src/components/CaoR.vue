<template>
  <div class="caoc">
    <button class="dianji" @click="push"></button>
  </div>
</template>
<script>
export default {
  name: "CaoR",
  components: {},
  methods: {
    push() {
      this.$router.push({ path: "/CaoRui" });
    },
  },
};
</script>

<style scoped>
.caoc {
  background: url("../assets/caorui1.png");
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
