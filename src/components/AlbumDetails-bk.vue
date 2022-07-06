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
              <v-card-subtitle v-if="albumArtist" v-text="albumArtist.name"></v-card-subtitle>
              <v-card-actions class="year-number" v-if="albumDetails">
                Released year: {{albumDetails.year_released}}
              </v-card-actions>
            </div>
            <v-avatar
                class="ma-3 album"
                size="125"
                tile
                color="#f2f2f2"
            >
              <div>ALBUM</div>
              <div v-if="albumDetails"> {{albumDetails.year_released}}</div>
            </v-avatar>
          </div>
        </v-card>
        <songs-filter show-class-custome="true"></songs-filter>
        <v-list three-line>
            <template v-for="(item, index) in albumSongs">
              <v-divider
                  :key="index"
              ></v-divider>

              <v-list-item
                  :key="item.name"
              >
                <v-list-item-avatar>
                  <v-icon class="primary-color">mdi-music</v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-html="item.name"></v-list-item-title>
                  <v-list-item-subtitle v-html="'Track #:'+item.id"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
      </v-col>
      <v-col cols="12">
        <v-container class="max-width">
<!--          <v-pagination-->
<!--              v-model="page"-->
<!--              class="my-4 prime-color"-->
<!--              :length="15"-->
<!--              :total-visible="5"-->
<!--          ></v-pagination>-->
        </v-container>
      </v-col>
    </v-row>
</template>

<script>
import SongsFilter from "@/components/SongsFilter";
import {mapActions,mapState} from "vuex";
export default {
  name: "AlbumDetails",
  components: {SongsFilter},
  computed:{
    ...mapState('Album', ['albumDetails', 'albumArtist', 'albumSongs']),
  },
  created() {
    this.fetchAlbumDetails({albumId: this.$route.params.id})
  },
  methods: {
    ...mapActions('Album', ['fetchAlbumDetails'])
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.year-number{
  padding: 0 16px;
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
  div{
    color: #80808052;
    transform: rotate(-40deg);
    padding: 4px;
    font-size: 25px;
  }
}
</style>