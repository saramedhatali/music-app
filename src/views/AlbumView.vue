<template>
  <div class="home">
    <albums-filter show-class-custome="true"></albums-filter>
    <albums-list></albums-list>
  </div>
</template>

<script>
import AlbumsList from '@/components/AlbumsList.vue'
import AlbumsFilter from "@/components/AlbumsFilter";

export default {
  name: 'HomeView',
  components: {
    AlbumsFilter,
    AlbumsList
  }
}
</script>

