<template>
  <v-sidebar v-model="showSidebar" class="mt-0" :mobileBreakPoint="992" fixed drawer :close-on-click="false">
    <v-list>
      <v-list-item v-for="i in 8" :key="i">
        <v-list-tile>
          <v-list-tile-title>Item {{ i }}</v-list-tile-title>
        </v-list-tile>
      </v-list-item>
    </v-list>
  </v-sidebar>
</template>

<script>
  import {mapGetters} from 'vuex';
  export default {
    name: 'toolbar',
    computed: {
      ...mapGetters(['showSidebar'])
    }
  }
</script>
