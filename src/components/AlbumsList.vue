<template>
  <div>
  <v-row dense v-if="albumsList && albumsList.length>0">
    <v-col cols="12" v-if="this.$route.params.artist_name"><h2 class="ctext-h5">Albums of "{{this.$route.params.artist_name}}"</h2>
      <v-divider></v-divider>
      <br/>
    </v-col>
    <v-col
        v-for="(item, i) in albumsList"
        :key="i"
        cols="6"
    >
    <v-card class="list-cards"
    >
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-title
              class="text-h5"
              v-text="item.name"
          ></v-card-title>
          <v-card-subtitle >Released year: {{item.year_released}} </v-card-subtitle>
          <v-card-actions>
            <v-btn
                class="ml-2 mt-1 primary-color"
                outlined
                rounded
                @click="viewAlbum(item.id)"
                small
            >
              <v-icon left>
         mdi-play
        </v-icon>
        explorer album
            </v-btn>
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
    </v-col>
      <v-col cols="12">
        <v-container class="max-width">
          <PaginationLinks v-if="albumsPaginationLinks" :links="albumsPaginationLinks" @navigateToClicked="navigateTo"/>
        </v-container>
      </v-col>
    </v-row>
  <v-row v-else>
    <v-col
        cols="12"
        class="pl15"
    >
      <div
          class="mt-27"
      >
        <v-skeleton-loader
            type="avatar, article"
        ></v-skeleton-loader>
      </div>
    </v-col>
  </v-row>
  </div>
</template>

<script>
import {mapState, mapActions,mapMutations} from 'vuex'
import PaginationLinks from "@/components/PaginationLinks";

export default {
  name: 'AlbumsList',
  components: {PaginationLinks},
  created() {
    if (this.$route.params.artist_id) {
      this.changeAlbumFilter({filterKey: 'artist_id', filterValue: this.$route.params.artist_id})
    }
    else {
      this.fetchAlbums()
    }
  },
  computed:{
    ...mapState('Album', ['albumsList', 'albumsPaginationLinks']),
    ...mapState('Album', ['filters'])
  },
  methods:{
    ...mapActions('Album', ['fetchAllAlbums','changeFetchUrl',"changeAlbumFilter"]),
    ...mapMutations('Album', ['resetAlbumDetails']),

    fetchAlbums(){
      this.fetchAllAlbums()
    },
    viewAlbum(id){
      this.resetAlbumDetails()
      this.$router.push(`/album-details/${id}`)
    },
    navigateTo(newUrl) {
      this.changeFetchUrl({newFetchUrl : newUrl})
    },
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/variables.scss";
.primary-color{
  color:$primary-color;
}

.text-h5{
  color:$primary-color;
  font-family:$body-font-family;
}
.list-cards{
  border: 1px solid #ddd;
  box-shadow: none!important;
}
.album{
i{
  font-size: 80px;
  color: #12a1ce54;
}
}
.prime-color li .v-pagination__item--active{
  background:$primary-color;
}
.pl15{
  padding-left: 15%;
}
.mt-27{
  margin-top: 8%;
  i{
    font-size: 34px;
  }
}
</style>
