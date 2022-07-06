<template>
  <div class="bar-color">
    <v-row no-gutters align="center" justify="center" class="relative">
      <v-col cols="12" lg="10" class="px-66">
        <v-img class="logo float-left"
               :src="require('../assets/img/logo.png')" alt="logo" title="music app logo"/>
        <v-btn icon class="float-right">

        </v-btn>
      </v-col>
    </v-row>

  </div>
</template>

<script>
export default {
  name: "HeaderView"
}
</script>

<style lang="scss" scoped>
.logo {
  height: 80px;
  width: 210px;
  margin-left: -11px;
}

.px-66 {
  padding: 6px!important;
}
</style>