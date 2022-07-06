import Vue from 'vue'
import VueRouter from 'vue-router'
import AlbumView from "@/views/AlbumView";
import ArtistView from "@/views/ArtistView";
import songsView from "@/views/SongsView";
import AlbumDetailsView from "@/views/AlbumDetailsView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AlbumView',
    component: AlbumView
  },
  {
    path: '/albums/:artist_name?/:artist_id?',
    name: 'AlbumView',
    component: AlbumView
  },
  {
    path: '/artists',
    name: 'ArtistView',
     component: ArtistView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   //component: () => import(/* webpackChunkName: "ArtistView" */ '../views/ArtistView')
  },
  {
    path: '/album-details/:id',
    name: 'AlbumDetailsView',
     component: AlbumDetailsView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   //component: () => import(/* webpackChunkName: "ArtistView" */ '../views/ArtistView')
  },
  {
    path: '/songs/',
    name: 'SongsView',
     component:songsView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
