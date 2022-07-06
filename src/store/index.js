import Vue from 'vue'
import Vuex from 'vuex'
import Album from '@/store/modules/album'
import Artist from "@/store/modules/artist";
import Songs from "@/store/modules/songs";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Album,
    Artist,
    Songs
  }
})

// Interceptor : Axios , Headers , Token => Export HTTP
// Modules => Album , Artist , Songs
// MapSate (Album, AlbumList)  this.AlbumList => AlbumList.vue
// Retrive List => Action => commit ( State )


// Albums
  // .components
    // . AlbumDetails
    // . Album List
  // stores
    // index.js "albums"
  // views
    // AlbumDetailsView
    // AlbumListView
// Artist
// Songs