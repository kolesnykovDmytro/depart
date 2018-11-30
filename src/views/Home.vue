<template>
  <v-container grid-list-md text-xs-center>
    <v-layout align-center justify-center row fill-height>
      <!-- <v-flex dark color="secondary" v-for="(item) in departItems" :key="'departitem${i}'" :to="item.route" xs3>
        <v-card dark color="purple">
          <v-card-text>{{item.title}}</v-card-text>
        </v-card>
      </v-flex> -->
      <v-btn dark color="secondary" v-for="(item) in departItems" :key="'departitem${i}'" :to="item.route" xs3>
          {{item.title}}
      </v-btn>

    </v-layout>
  </v-container>
</template>

<script>

  export default {
    computed: {
      departItems(){
        return [
          {
            title: 'Development',
            route: '/development'
          },
          {
            title: 'Marketing',
            route: '/marketing'
          },
          {
            title: 'Hr',
            route: '/hr'
          },
          {
            title: 'Testing',
            route: '/testing'
          },
        ]
      }
    }
  }
</script>
