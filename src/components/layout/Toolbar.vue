<template>
  <v-toolbar fixed>
    <v-toolbar-side-icon light @click.native.stop="toggleSidebar()"/>
    <v-toolbar-title>Toolbar</v-toolbar-title>
  </v-toolbar>
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
