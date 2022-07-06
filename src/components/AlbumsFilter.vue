<template>
  <div>
    <v-form>
      <v-container>
        <v-row :class="showClassCustome?'filter-custome':''">
          <v-col
              cols="12"
              sm="4"
          >
            <v-text-field
                prepend-inner-icon="mdi-magnify"
                v-model="nameFilter"
                label="Search by album name"
                clearable
            ></v-text-field>
          </v-col>
          <v-col
              cols="12"
              sm="3"
          >
            <v-text-field
                prepend-inner-icon="mdi-magnify"
                v-model="yearReleasedFilter"
                label="Search by album year"
                clearable
            ></v-text-field>
          </v-col>
          <v-col
              class="d-flex"
              cols="12"
              sm="2"
          >
            <v-select
                v-model="albumOrderBy"
                prepend-inner-icon="mdi-sort-alphabetical-variant"
                :items="albumSortList"
                item-text="name"
                item-value="id"
                label="Sort"
            >
            </v-select>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions}  from "vuex";

export default {
  name: "AlbumsFilter",
  props:['showClassCustome'],
  data() {
    return {
      albumSortList:[
        {
          id: '&_sort=name&_order=asc',
          name: 'Name, A-Z'
        },
        {
          id: '&_sort=name&_order=desc',
          name: 'Name, Z-A'
        },
        {
          id: '&_sort=year_released&_order=asc',
          name: 'Year, A-Z'
        },
        {
          id: '&_sort=year_released&_order=desc',
          name: 'Year, Z-A'
        },
      ]
    }
  },
  computed:{
    ...mapState('Album', ['orderBy', 'filters']),

    albumOrderBy: {
      get(){
        return this.orderBy
      },
      set(newOrderBy){
        this.changeAlbumSort({sortValue: newOrderBy})
      }
    },
    yearReleasedFilter: {
      get(){
        return this.filters['year_released']
      },
      set(newYearReleased){
        this.changeAlbumFilter({filterKey: 'year_released', filterValue: newYearReleased})
      }
    },
    nameFilter: {
      get(){
        return this.filters['name']
      },
      set(newName){
        this.changeAlbumFilter({filterKey: 'name', filterValue: newName})
      }
    },
  },
  methods:{
    ...mapMutations('Album', ['setAlbumOrderBy']),
    ...mapActions('Album', ['fetchAllAlbums','changeAlbumFilter','changeAlbumSort'])
  }
}
</script>

<style lang="scss" scoped>
.filter-custome{
margin: -30px -21px;
align-items: end;
justify-content: end;
}
</style>