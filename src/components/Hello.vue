<template>
  <v-layout row-sm child-flex-sm column>
    <v-flex xs12 style="background: black">
      <v-text-field v-model="email" label="Email" hide-details single-line light></v-text-field>
      <v-text-field v-model="password" type="password" label="Search" hide-details single-line light></v-text-field>
      <v-btn @click.native.stop="signIn()">Sign In</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
  import * as types from '../store/mutation-types';
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
        return new Promise((resolve, reject) => {
          this.FeathersClient.authenticate({
            strategy: 'local',
            email: this.email,
            password: this.password
          }).then(token => {
            const users = this.FeathersClient.service('users');
            users.find({query: {email: this.email}}).then(response => {
              this.$store.commit(types.RETRIEVE_USER, response.data[0])
            });
            this.$store.commit(types.SIGN_IN);
            resolve(token)
          }).catch(error => {
            reject(error)
          });
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
