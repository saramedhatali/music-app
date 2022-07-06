<template>
  <v-row class="pagnation"
  >
      <v-btn v-if="links &&  links.first"
          tile
         class="primrary-color"
          @click.prevent="navigateTo(links.first)"
      >
        <v-icon left>
          mdi-page-first
        </v-icon>
        First
      </v-btn>
      <v-btn
          tile
          v-if="links &&  links.prev"
          outlined
          class="prime-color"
          @click.prevent="navigateTo(links.prev)"
      >
        <v-icon left>
          mdi-chevron-left
        </v-icon>
        Prev
      </v-btn>
      <v-btn v-if="links &&  links.next"
          tile
          outlined
          class="prime-color"
          @click.prevent="navigateTo(links.next)"
      >
        <v-icon left>
          mdi-chevron-right
        </v-icon>
        Next
      </v-btn>
      <v-btn v-if="links &&  links.last"
          tile
          class="primrary-color"
          @click.prevent="navigateTo(links.last)"
      >
        <v-icon left>
          mdi-page-last
        </v-icon>
        Last
      </v-btn>
  </v-row>
</template>

<script>
export default {
  name: "PaginationLinks",
  props: {
    links: {
      type: Object,
      required: true,
    },
  },
  methods: {
    navigateTo(newUrl) {
      this.$emit('navigateToClicked', newUrl)
    },
  },
}
</script>
<style lang="scss" scoped>
@import "@/assets/variables.scss";
.primrary-color{
  margin-left: 10px;
  color:#fff;
  background: $primary-color;
  border-radius:5px;
}
.prime-color{
  margin-left: 10px;
  color: $primary-color;
  border-radius:5px;

}
.pagnation{
  float: right;
  margin-top: 24px;
}
</style>