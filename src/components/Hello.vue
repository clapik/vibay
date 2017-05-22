<template>
  <v-layout row-sm child-flex-sm column>
    <v-flex xs12 style="background: black">
      <v-text-field v-model="email" label="Email" hide-details single-line light></v-text-field>
      <v-text-field v-model="password" label="Search" hide-details single-line light></v-text-field>
      <v-btn @click.native.stop="signIn()">Sign In</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'New App',
        email: 'toan',
        password: 'secret'
      }
    },
    methods: {
      signIn() {
        this.$store.dispatch('signIn', {email: this.email, password: this.password});
//        this.$store.commit(types.SET_UP_FEATHERS)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
