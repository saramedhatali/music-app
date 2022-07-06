import consumer from "@/services/api"
import parseHeaderLinks from "@/mixins/linksHeaderParser"

export default  {
  namespaced: true,
  state() {
    return {
      baseUrl: 'songs?_page=1&_limit=10',
      fetchUrl: 'songs?_page=1&_limit=10',
      songsList: [],
      songsPaginationLinks: null,
      filters: {
        name: '',
        album_id: '',
      },
      orderBy: ''
    }
  },
  mutations: {
    setSongsList(state, {songs, songsPaginationLinks}) {
      state.songsList = songs
      state.songsPaginationLinks = songsPaginationLinks
    },
    setSongsOrderBy(state, orderBy) {
      state.orderBy = orderBy
    },
    changeFilterValue(state, {filterKey, filterValue}) {
      state.filters[filterKey] = filterValue
    },
    changeSortValue(state, {sortValue}) {
      state.orderBy = sortValue
    },
    changeFetchUrl(state, {newFetchUrl}) {
      state.fetchUrl = newFetchUrl
    },
    resetSongsList(state) {
      state.filters.name = null
      state.filters.album_id = null
    },
  },
  actions: {
    fetchAllSongs({state, commit}, redirectEnabled = false) {
      // filters
       const nameFilter = state.filters.name  ? `&name=${encodeURIComponent(state.filters.name)}` : ''
       const albumFilter = state.filters.album_id  ? `&album_id=${encodeURIComponent(state.filters.album_id)}` : ''

      const url = redirectEnabled ? state.fetchUrl : `${state.baseUrl}${state.orderBy}${nameFilter}${albumFilter}`

      consumer.get(url).then((result) => {
        commit('setSongsList', {songs: result.data, songsPaginationLinks: parseHeaderLinks(result.headers?.link)})
      })
    },
    changeSongsFilter({dispatch, commit}, {filterKey, filterValue}) {
      commit('changeFilterValue', {filterKey, filterValue})
      dispatch('fetchAllSongs')
    },
    changeSongsSort({dispatch, commit}, {sortValue}) {
      commit('changeSortValue', {sortValue})
      dispatch('fetchAllSongs')
    },
    changeFetchUrl({dispatch,commit}, {newFetchUrl}) {
      commit('changeFetchUrl', {newFetchUrl})
      dispatch('fetchAllSongs', {redirectEnabled: true})
    },
  }
}
