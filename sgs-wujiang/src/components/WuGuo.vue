<template>
  <div class="wuguo">
    <button class="dianji" @click="push"></button>
  </div>
</template>
<script>
export default {
  name: "WuGuo",
  components: {},
  methods: {
    push() {
      this.$router.push({ path: "/WuWu" });
    },
  },
};
</script>

<style scoped>
.wuguo {
  width: 95%;
  height: 95%;
  border-radius: 30px;
  margin: 5px;
  background: url("../assets/wu1.png");
  background-size: cover;
  background-position: center;
  border: solid;
  border-color: white;
}
.wuguo:hover {
  border-color: rgb(233, 73, 118);
}

.dianji {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  border: none;
}
</style>
