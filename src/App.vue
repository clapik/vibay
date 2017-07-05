<template>
  <v-app id="app">
    <v-navigation-drawer persistent :mini-variant="mini" v-model="showSidebar">
      <v-list class="pa-0">
        <v-list-item @click="mini = mini ? !mini : mini"
                     :class="{'navigation-drawer-clickable': mini}">
          <v-list-tile avatar tag="div">
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/lego/1.jpg"/>
              <v-icon class="navigation-drawer-mini-expand" v-if="mini" light>chevron_right</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Toan Ngo</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn light icon @click.native.stop="mini = !mini">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-item>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-item v-for="item in sidebarItems" :key="item">
          <v-list-tile v-model="item.active">
            <v-list-tile-action>
              <v-icon light>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed>
      <v-toolbar-side-icon light @click.native.stop="showSidebar = !showSidebar"/>
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
          <v-list-item v-for="item in toolbarItems"
                       :key="item"
                       @click="item.id === 'signOut' ? signOut() : null">
            <v-list-tile>
              <v-list-tile-title>{{ item.display }}</v-list-tile-title>
            </v-list-tile>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>
</template>

<script>
  import * as types from './store/mutation-types';

  export default {
    name: 'app',
    data() {
      return {
        showSidebar: true,
        mini: true,
        sidebarItems: [
          {title: 'Home', icon: 'mail', active: true},
          {title: 'Email', icon: 'mail'}
        ],
        toolbarItems: [
          {id: 'accountSettings', display: 'Account Settings'},
          {id: 'signOut', display: 'Sign Out'}
        ]
      }
    },
    methods: {
      signOut() {
        this.FeathersClient.logout().then(() => {
          this.$store.commit(types.SIGN_OUT);
        })
      }
    }
  };
</script>

<style src="./App.styl" lang="stylus"></style>
