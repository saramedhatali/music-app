<template>
    <v-row dense>
      <v-col
          cols="12"
      >
        <v-card class="list-cards"
        >
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title
                  class="text-h5"
                  v-if="albumDetails"
              >{{albumDetails.name}} Songs</v-card-title>
              <v-card-subtitle v-if="albumDetails" > Released year: {{albumDetails.year_released}}</v-card-subtitle>
              <v-card-actions class="year-number" v-if="albumArtist" >
                Sing by: {{albumArtist.name}}
              </v-card-actions>
            </div>
            <v-avatar
                class="ma-3 album"
                size="125"
                tile
                color="#f2f2f2"
            >
              <v-icon>mdi-music</v-icon>
            </v-avatar>
          </div>
        </v-card>
        <songs-filter  show-class-custome="true"></songs-filter>
        <songs-list :show-button="false" ></songs-list>
      </v-col>
      <v-col cols="12">
        <v-container class="max-width">
        </v-container>
      </v-col>
    </v-row>
</template>

<script>
import SongsFilter from "@/components/SongsFilter";
import {mapActions,mapState} from "vuex";
import SongsList from "@/components/SongsList";
export default {
  name: "AlbumDetails",
  components: {SongsFilter, SongsList},
  computed:{
    ...mapState('Album', ['albumDetails', 'albumArtist', 'albumSongs']),
  },
  created() {
    this.fetchAlbumDetails({albumId: this.$route.params.id})
    this.changeSongsFilter({filterKey: 'album_id', filterValue: this.$route.params.id})
  },
  methods: {
    ...mapActions('Album', ['fetchAlbumDetails']),
    ...mapActions('Songs', ['changeSongsFilter']),
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.year-number{
  padding: 0 16px;
  color:$primary-color;
}
.primary-color{
  color:$primary-color;
}
.text-h5{
  color:$primary-color;
  font-family:$body-font-family;

}
.list-cards{
  margin-bottom: 15px;
  border-bottom: 1px solid #ddd;
  box-shadow: none !important;
}
.album{
  i{
    font-size: 80px;
    color: #12a1ce54;
  }
}
</style>