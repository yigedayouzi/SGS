<template>
  <div class="weiguo">
    <button class="dianji" @click="push"></button>
  </div>
</template>
<script>
export default {
  name: "WeiGuo",
  components: {},
  methods: {
    push() {
      this.$router.push({ path: "/WeiWu" });
    },
  },
};
</script>

<style scoped>
.weiguo {
  width: 95%;
  height: 95%;
  border-radius: 30px;
  margin: 5px;
  background: url("../assets/wei1.png");
  background-size: cover;
  background-position: center;
  border: solid;
  border-color: white;
}
.weiguo:hover {
  border-color: rgb(233, 73, 118);
}

.dianji {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  border: none;
}
</style>
