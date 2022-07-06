<template>
  <div>
  <v-card
      class="mx-auto list-menu"
      tile

  >
    <v-list shaped>
      <v-subheader>DISCOVER</v-subheader>
      <v-list-item-group
          v-model="selectedItem"
          class="primary-color" mandatory
      >
        <router-link class="links"
                     :to="item.id" v-for="(item, i) in items"
                     :key="i">
          <v-list-item  @click="handelMenuItemClicked(i)"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list-item-group>
    </v-list>
  </v-card>
  <div class="copyRight">
    <v-divider>
    </v-divider>
    <div>
    <span>Copy Right:2022 -</span>
    <span>Music App:2022 </span>
    <span>Enjoy Music </span>
    </div>
  </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "SideMenu",
  data() {
    return {
      selectedItem: 0,
      items: [
        {text: 'Albums', icon: 'mdi-folder-music-outline', id: '/'},
        {text: 'Artists', icon: 'mdi-account-music-outline', id: '/artists'},
        {text: 'Songs', icon: 'mdi-music', id: '/songs'},
      ],
    }
  },
  mounted() {
    this.$route.name === 'ArtistView'? this.selectedItem = 1 : this.selectedItem = 0
    this.$route.name === 'AlbumDetailsView' ||  this.$route.name === 'AlbumView' ? this.selectedItem = 0 : ''
    this.$route.name === 'SongsView' ? this.selectedItem = 2 : ''
  },
  methods:{
    ...mapMutations('Album', ['resetAlbumList']),
    ...mapMutations('Songs', ['resetSongsList']),
    handelMenuItemClicked(index){
      this.selectedItem=index
     this.resetAlbumList()
     this.resetSongsList()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.list-menu {
  box-shadow: none !important;
}

.router-link-active {
  color: $primary-color;
}

.links {
  text-decoration: none;
}
.copyRight{
  div{
    margin-top: 10px;
    margin-left: 10px;
  }
  span {
    font-weight: bolder;
    font-size: 13px;
    color: #75757569;
  }
}
</style>