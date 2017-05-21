<template>
  <v-app id="app">
    <sidebar></sidebar>
    <toolbar></toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
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
