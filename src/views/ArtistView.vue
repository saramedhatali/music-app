<template>
  <div>
 <artists-filter  show-class-custome="true"></artists-filter>
  <artists-list></artists-list>
  </div>
</template>

<script>
import ArtistsList from "@/components/ArtistsList";
import ArtistsFilter from "@/components/ArtistsFilter";
export default {
  name: "ArtistView",
  components: {ArtistsFilter, ArtistsList},
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>