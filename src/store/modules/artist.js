import consumer from "@/services/api"
import parseHeaderLinks from "@/mixins/linksHeaderParser"

export default  {
  namespaced: true,
  state() {
    return {
      baseUrl: 'artists?_page=1&_limit=10',
      fetchUrl: 'artists?_page=1&_limit=10',
      artistsList: [],
      artistsPaginationLinks: null,
      filters:{
        name:'',
        year_released:'',
      },
      orderBy:''
    }
  },
  mutations: {
    setArtistsList(state, {artists, artistsPaginationLinks}) {
      state.artistsList = artists
      state.artistsPaginationLinks = artistsPaginationLinks
    },
    changeFilterValue(state, {filterKey, filterValue}) {
      state.filters[filterKey] = filterValue
    },
    changeSortValue(state, {sortValue}) {
      state.orderBy = sortValue
    },
    changeFetchUrl(state, {newFetchUrl}) {
      state.fetchUrl = newFetchUrl
    }
  },
  actions: {
    fetchAllArtists({state, commit}, redirectEnabled = false) {
      // filters
       const nameFilter = state.filters.name  ? `&name=${encodeURIComponent(state.filters.name)}` : ''

      const url = redirectEnabled ? state.fetchUrl : `${state.baseUrl}${state.orderBy}${nameFilter}`

      consumer.get(url).then((result) => {
        commit('setArtistsList', {artists: result.data, artistsPaginationLinks: parseHeaderLinks(result.headers?.link)})
      })
    },
    changeArtistFilter({dispatch, commit}, {filterKey, filterValue}) {
      commit('changeFilterValue', {filterKey, filterValue})
      dispatch('fetchAllArtists')
    },
    changeArtistSort({dispatch, commit}, {sortValue}) {
      commit('changeSortValue', {sortValue})
      dispatch('fetchAllArtists')
    },
    changeFetchUrl({dispatch,commit}, {newFetchUrl}) {
      commit('changeFetchUrl', {newFetchUrl})
      dispatch('fetchAllArtists', {redirectEnabled: true})
    },
  }
}
