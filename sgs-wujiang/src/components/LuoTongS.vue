<template>
  <div class="xushengs">
    <div class="wujiang">
     <luo-t></luo-t>
    </div>
  </div>
</template>
<script>
import LuoT from "./LuoT.vue";

export default {
  name: "LuoTongS",
  components: {
    LuoT,
  },
};
</script>

<style scoped>
.xushengs {
  width: 100%;
  height: 100%;
  border-radius: 30px;
  margin: 1px 1px 1px 1px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: auto;
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.wujiang {
  background-color: rgb(134, 226, 192);
  margin: 50px;
  height: 350px;
  width: 250px;
  border: solid 5px white;
  border-radius: 10px;
  box-shadow: 2px 2px 5px #000;
}
.wujiang:hover {
  border-color: rgb(233, 94, 43);
}
</style>
