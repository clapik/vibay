<template>
  <v-layout row-sm child-flex-sm column>
    <v-flex xs12>
      <v-card class="grey lighten-4 elevation-0">
        <v-card-text>
          <v-container fluid>
            <v-layout row><v-flex xs8><v-text-field v-model="email" placeholder="Username"></v-text-field></v-flex></v-layout>
            <v-layout row><v-flex xs8><v-text-field v-model="password" type="password" placeholder="Password"></v-text-field></v-flex></v-layout>
            <v-layout row><v-flex xs8><v-btn @click.native.stop="signIn()">Sign In</v-btn></v-flex></v-layout>
          </v-container>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'New App',
        email: null,
        password: null
      }
    },
    methods: {
      signIn() {
        this.$store.dispatch('signIn', {
          client: this.FeathersClient,
          email: this.email,
          password: this.password
        }).then(token => console.log(token))
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
