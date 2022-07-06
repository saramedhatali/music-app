<template>
  <v-row justify="center" class="background musicApp" no-gutters>
    <v-col cols="12" lg="10" :class="['whitebackground' ,'bx-1']">
      <v-row no-gutters class="mt-3">
        <v-col class="px-1 mt-399" cols="12" lg="3">
            <side-menu></side-menu>
        </v-col>
        <v-col class="px-1" cols="12" lg="8">
          <router-view/>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import SideMenu from "@/components/SideMenu";
export default {
  name: "LayoutView",
  components: {SideMenu},
}
</script>

