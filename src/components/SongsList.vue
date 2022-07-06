<template>
  <v-row dense v-if="songsList && songsList.length>0">
    <v-col cols="12" v-if="!showButton"><h3 class="pl-4">#Tracks</h3></v-col>
    <v-col
        cols="6"
        v-for="(item, index) in songsList"
        :key="item.name"
    >
      <v-list three-line>
        <template>
          <v-list-item

          >
            <v-list-item-avatar class="primary-color">
              <v-icon>mdi-music</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title >Track name: {{item.name}}</v-list-item-title>
              <v-list-item-subtitle v-html="'Track# :'+item.id"></v-list-item-subtitle>
              <v-list-item-subtitle>
                <v-btn
                    v-if="showButton"
                    class="mt-1 primary-color"
                    outlined
                    rounded
                    @click="viewAlbum(item.album_id)"
                    small
                >
                  <v-icon left>
                    mdi-play
                  </v-icon>
                  explorer album
                </v-btn>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider
              :key="index"
          ></v-divider>
        </template>
      </v-list>
    </v-col>
    <v-col cols="12">
      <v-container class="max-width">
        <PaginationLinks v-if="songsPaginationLinks" :links="songsPaginationLinks" @navigateToClicked="navigateTo"/>
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
  name: "SongsList",
  components: {PaginationLinks},
  props: {
    showButton: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  created() {
    if (!this.$route.params.id) {
      this.fetchAllSongs()
    }
  },
  computed: {
    ...mapState('Songs', ['songsList', 'songsPaginationLinks']),
    ...mapState('Songs', ['filters'])
  },
  methods: {
    ...mapActions('Songs', ['fetchAllSongs', 'changeSongsFilter', 'changeFetchUrl']),

    viewAlbum(id) {
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

.text-h5 {
  font-family: $body-font-family;

}

.primary-color {
  color: $primary-color;

  i {
    color: $primary-color;

  }
}

.list-cards {
  border: 1px solid #ddd;
  box-shadow: none !important;
}

.album {
  div {
    color: #80808052;
    transform: rotate(-40deg);
    padding: 4px;
    font-size: 25px;
  }
}

.pl15 {
  padding-left: 15%;
}

.mt-27 {
  margin-top: 8%;

  i {
    font-size: 34px;
  }
}
</style>