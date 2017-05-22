<template>
  <v-toolbar fixed>
    <v-toolbar-side-icon light @click.native.stop="toggleSidebar()"/>
    <!--<v-toolbar-title>Toolbar</v-toolbar-title>-->
    <v-text-field prepend-icon="search" label="Search..." hide-details single-line light></v-text-field>
    <v-spacer></v-spacer>
    <v-btn icon light>
      <v-icon>shopping_cart</v-icon>
    </v-btn>
    <v-btn icon light>
      <v-icon>account_circle</v-icon>
    </v-btn>
    <v-menu transition="v-scale-transition" offset-y>
      <v-btn icon light slot="activator">
        <v-icon>more_vert</v-icon>
      </v-btn>
      <v-list>
        <v-list-item v-for="item in menus" :key="item">
          <v-list-tile>
            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
  import * as types from '../../store/mutation-types';
  export default {
    name: 'toolbar',
    data() {
      return {
        menus: [
          {name: 'Account Settings'},
          {name: 'Sign Out'}
        ]
      }
    },
    methods: {
      toggleSidebar() {
        this.$store.commit(types.TOGGLE_SIDEBAR);
      }
    }
  }
</script>
