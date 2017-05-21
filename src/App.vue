<template>
  <v-app id="app" :left-fixed-sidebar="showSidebar ? true : false">
    <toolbar></toolbar>
    <sidebar></sidebar>
    <main>
      <v-content class="pt-4">
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </main>
  </v-app>
</template>

<script>
  import {mapGetters} from 'vuex';
  import Toolbar from './components/layout/Toolbar'
  import Sidebar from './components/layout/Sidebar'

  export default {
    name: 'app',
    computed: {
      ...mapGetters(['showSidebar'])
    },
    components: {Toolbar, Sidebar}
  };
</script>

<style lang="styl">
  @import 'main.styl';
</style>
