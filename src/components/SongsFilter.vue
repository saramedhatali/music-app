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
                label="Search by songs name"
                clearable
            ></v-text-field>
          </v-col>
          <v-col
              class="d-flex"
              cols="12"
              sm="2"
          >
            <v-select
                v-model="songsOrderBy"
                prepend-inner-icon="mdi-sort-alphabetical-variant"
                :items="songsSortList"
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
import {mapState, mapMutations, mapActions} from "vuex";

export default {
  name: "SongsFilter",
  props: ['showClassCustome'],
  data() {
    return {
      songsSortList: [
        {
          id: '&_sort=name&_order=asc',
          name: 'Name, A-Z'
        },
        {
          id: '&_sort=name&_order=desc',
          name: 'Name, Z-A'
        },
      ]
    }
  },
  computed: {
    ...mapState('Songs', ['orderBy', 'filters']),

    songsOrderBy: {
      get() {
        return this.orderBy
      },
      set(newOrderBy) {
        this.changeSongsSort({sortValue: newOrderBy})
      }
    },
    nameFilter: {
      get() {
        return this.filters['name']
      },
      set(newName) {
        this.changeSongsFilter({filterKey: 'name', filterValue: newName})
      }
    },
  },
  methods: {
    ...mapMutations('Songs', ['setSongsOrderBy']),
    ...mapActions('Songs', ['fetchAllSongs', 'changeSongsFilter', 'changeSongsSort']),

  }
}
</script>

<style lang="scss" scoped>
.filter-custome {
  margin: -30px -21px;
  align-items: end;
  justify-content: end;
}
</style>