<template>
  <header>
    <v-toolbar>
      <v-toolbar-side-icon @click.native.stop="toggleSidebar()"/>
      <v-toolbar-title>Toolbar</v-toolbar-title>
    </v-toolbar>
  </header>
</template>

<script>
  import * as types from '../../store/mutation-types';
  export default {
    name: 'toolbar',
    methods: {
      toggleSidebar() {
        this.$store.commit(types.TOGGLE_SIDEBAR);
      }
    }
  }
</script>
