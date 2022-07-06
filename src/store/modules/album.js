import consumer from "@/services/api"
import parseHeaderLinks from "@/mixins/linksHeaderParser";

export default  {
  namespaced: true,
  state() {
    return {
      baseUrl: 'albums?_page=1&_limit=10',
      fetchUrl: 'albums?_page=1&_limit=10',
      albumsList: [],
      albumsPaginationLinks: null,
      albumDetails:null,
      albumArtist:null,
      filters:{
        name:'',
        year_released:'',
      },
      orderBy:''
    }
  },
  mutations: {
    setAlbumsList(state, {albums, albumsPaginationLinks}) {
      state.albumsList = albums
      state.albumsPaginationLinks = albumsPaginationLinks
    },
    setAlbumOrderBy(state, orderBy) {
      state.orderBy = orderBy
    },
    changeFilterValue(state, {filterKey, filterValue}) {
      state.filters[filterKey] = filterValue
    },
    changeSortValue(state, {sortValue}) {
      state.orderBy = sortValue
    },
    setCurrentAlbumDetails(state, albumDetails) {
      state.albumDetails = albumDetails
    },
    setAlbumArtists(state) {
      consumer.get(`artists?id=${state.albumDetails.artist_id}`).then((result) => {
        state.albumArtist = result.data ? result.data[0] : null
      })
    },
    resetAlbumDetails(state) {
      state.albumDetails = null
      state.albumArtist = null
    },
    resetAlbumList(state) {
      state.filters.name = null
      state.filters.year_released = null
      state.filters.artist_id = null
    },
    changeFetchUrl(state, {newFetchUrl}) {
      state.fetchUrl = newFetchUrl
    }
  },
  actions: {
    fetchAllAlbums({state, commit}, redirectEnabled = false) {
      // filters
       const yearFilter = state.filters.year_released  ? `&year_released=${encodeURIComponent(state.filters.year_released)}` : ''
       const nameFilter = state.filters.name  ? `&name=${encodeURIComponent(state.filters.name)}` : ''
      const artistFilter = state.filters.artist_id  ? `&artist_id=${encodeURIComponent(state.filters.artist_id)}` : ''

      const url = redirectEnabled ? state.fetchUrl : `${state.baseUrl}${state.orderBy}${nameFilter}${yearFilter}${artistFilter}`

      consumer.get(url).then((result) => {
        commit('setAlbumsList', {albums: result.data, albumsPaginationLinks: parseHeaderLinks(result.headers?.link)})
      })
    },
    fetchAlbumDetails({ commit}, {albumId}) {
      consumer.get(`albums?id=${albumId}`).then((result) => {
        const albumDetails = result.data ? result.data[0] : null
        commit('setCurrentAlbumDetails', albumDetails)
        commit('setAlbumArtists', albumId)
      })
    },
    changeAlbumFilter({dispatch, commit}, {filterKey, filterValue}) {
      commit('changeFilterValue', {filterKey, filterValue})
      dispatch('fetchAllAlbums')
    },
    changeAlbumSort({dispatch, commit}, {sortValue}) {
      commit('changeSortValue', {sortValue})
      dispatch('fetchAllAlbums')
    },
    changeFetchUrl({dispatch,commit}, {newFetchUrl}) {
      commit('changeFetchUrl', {newFetchUrl})
      dispatch('fetchAllAlbums', {redirectEnabled: true})
    },
  }
}
