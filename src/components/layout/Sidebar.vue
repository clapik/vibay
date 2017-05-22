<template>
  <v-navigation-drawer persistent :mini-variant="mini" v-model="showSidebar">
    <v-list class="pa-0">
      <v-list-item @click="mini = mini ? !mini : mini"
                   :class="{'navigation-drawer-clickable': mini}">
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/lego/1.jpg" />
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
      <v-list-item v-for="item in items" :key="item">
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
</template>

<script>
  import {mapGetters} from 'vuex';
  export default {
    name: 'toolbar',
    data() {
      return {
        mini: false,
        items: [
          { title: 'Home', icon: 'dashboard', active: true },
          { title: 'About', icon: 'question_answer' }
        ]
      }
    },
    computed: {
      ...mapGetters(['showSidebar'])
    }
  }
</script>

<style lang="scss">
  .navigation-drawer {
    &-clickable {
      cursor: pointer;
    }

    &-mini-expand {
      position: absolute;
      top: 7px;
      right: -11px;
    }
  }
</style>
