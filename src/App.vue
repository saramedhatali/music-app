<template>
  <v-app id="app">
   <header-view/>
   <layout-view/>
  </v-app>
</template>
<script>
import HeaderView from "@/views/HeaderView";
import LayoutView from "@/views/LayoutView";
export default {
  components: {LayoutView, HeaderView},
}
</script>
<style lang="scss">
@import "./assets/global.scss";
@import "./assets/font.scss";

</style>
