<template>
  <div class="fenghuo">
    <button class="dianji" @click="push"><span class="fenghuolinshan">风火<br>林山</span></button>
  </div>
</template>
<script>
export default {
  name: "FengHuo",
  components: {},
  methods: {
    push() {
      this.$router.push({ path: "/FengHuoWu" });
    },
  },
};
</script>

<style scoped>
.fenghuo {
  width: 95%;
  height: 95%;
  border-radius: 30px;
  margin: 5px;
  background-size: cover;
  background-position: center;
  border: solid;
  border-color: white;
}
.fenghuo:hover {
  border-color:rgb(233, 73, 118);
}

.dianji {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  border: none;
}

.fenghuolinshan{
font-size: 60px;
color:rgb(240, 160, 80);
text-shadow:0 0 1px currentColor,
/*highlight*/-1px -1px 1px hsl(184,80%,50%),
0 -1px 1px hsl(184,80%,55%),
1px -1px 1px hsl(184,80%,50%),
/*light shadow*/1px 1px 1px hsl(184,80%,10%),
0 1px 1px hsl(184,80%,10%),
-1px 1px 1px hsl(184,80%,10%),
/*outline*/-2px -2px 1px hsl(184,80%,15%),
-1px -2px 1px hsl(184,80%,15%),
0 -2px 1px hsl(184,80%,15%),
1px -2px 1px hsl(184,80%,15%),
2px -2px 1px hsl(184,80%,15%),
2px -1px 1px hsl(184,80%,15%),
2px 0 1px hsl(184,80%,15%),
2px 1px 1px hsl(184,80%,15%),
-2px 0 1px hsl(184,80%,15%),
-2px -1px 1px hsl(184,80%,15%),
-2px 1px 1px hsl(184,80%,15%),
/*dark shadow*/2px 2px 2px hsl(184,80%,5%),
1px 2px 2px hsl(184,80%,5%),
0 2px 2px hsl(184,80%,5%),
-1px 2px 2px hsl(184,80%,5%),
-2px 2px 2px hsl(184,80%,5%)}


</style>
