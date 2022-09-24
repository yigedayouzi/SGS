<template>
  <div class="shuguo">
    <button class="dianji" @click="push"></button>
  </div>
</template>
<script>
export default {
  name: "ShuGuo",
  components: {},
  methods: {
    push() {
      this.$router.push({ path: "/ShuWu" });
    },
  },
};
</script>

<style scoped>
.shuguo {
  width: 95%;
  height: 95%;
  border-radius: 30px;
  background: url("../assets/shu1.png");
  margin: 5px;
  background-size: cover;
  border: 2px;
  border-color: wheat;
  background-position: center;
    border: solid;
  border-color: white;
}
.shuguo:hover{
border-color: rgb(233, 73, 118);}

.dianji {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  border: none;
}
</style>
