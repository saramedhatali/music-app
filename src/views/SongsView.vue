<template>
  <div>
    <songs-filter show-class-custome="true"></songs-filter>
    <songs-list></songs-list>
  </div>
</template>

<script>
import SongsList from "@/components/SongsList";
import SongsFilter from "@/components/SongsFilter";

export default {
  name: "SongsView",
  components: {SongsFilter, SongsList},
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>