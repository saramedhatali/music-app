<template>
  <v-row dense v-if="artistsList && artistsList.length>0">
    <v-col
        v-for="(item, index) in artistsList"
        :key="item.name"
        cols="6"
    >
      <v-list three-line>
        <template>
          <v-list-item

          >
            <v-list-item-avatar class="singer">
             <v-icon>mdi-account-music-outline</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="item.name"></v-list-item-title>
                <v-list-item-subtitle >
                <v-btn
                    class="mt-1 primary-color"
                    outlined
                    rounded
                    @click="viewAlbum(item.name,item.id)"
                    small
                >
                  <v-icon left>
         mdi-play
        </v-icon>
        explorer albums
                </v-btn>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider
              class="pa-3"
              :key="index"
          ></v-divider>
        </template>

      </v-list>
    </v-col>
    <v-col cols="12">
      <v-container class="max-width">
        <PaginationLinks v-if="artistsPaginationLinks" :links="artistsPaginationLinks" @navigateToClicked="navigateTo"/>
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
</template>

<script>
import {mapActions, mapState} from "vuex";
import PaginationLinks from "@/components/PaginationLinks";

export default {
  name: "ArtistsList",
  components: {PaginationLinks},
  created() {
    this.fetchArtists()
  },
  computed:{
    ...mapState('Artist', ['artistsList', 'artistsPaginationLinks']),
    ...mapState('Artist', ['filters'])
  },
  methods:{
    ...mapActions('Artist', ['fetchAllArtists', 'changeFetchUrl']),

    fetchArtists(){
      this.fetchAllArtists()
    },
    viewAlbum(name,id){
      this.$router.push(`albums/${name}/${id}`)
    },
    navigateTo(newUrl) {
      this.changeFetchUrl({newFetchUrl : newUrl})
    },
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.text-h5{
  font-family:$body-font-family;

}
.singer{
  border: 1px solid #c5c7c5;
  padding: 25px;
  i{
    color:$primary-color;
    font-size: 25px;
  }
}
.primary-color{
  color:$primary-color;
}
.list-cards{
  border: 1px solid #ddd;
  box-shadow: none!important;
}
.album{
  div{
    color: #80808052;
    transform: rotate(-40deg);
    padding: 4px;
    font-size: 25px;
  }
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