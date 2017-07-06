import * as types from '../mutation-types'
const _ = require('lodash');

const state = {
  currentUser: {}
};

const getters = {
  currentUser: state => state.currentUser
};

const mutations = {
  [types.SIGN_IN](state) {
    state.currentUser.signedIn = true;
  },
  [types.RETRIEVE_USER](state, payload) {
    _.extend(state.currentUser, payload);
  },
  [types.SIGN_OUT](state) {
    state.currentUser = {};
  }
};

const actions = {
  signIn({commit}, payload) {
    const client = payload.client;
    return new Promise((resolve, reject) => {
      client.authenticate({
        strategy: 'local',
        email: payload.email,
        password: payload.password
      }).then(token => {
        const users = client.service('users');
        users.find({query: {email: payload.email}}).then(response => {
          commit(types.RETRIEVE_USER, response.data[0])
        });
        commit(types.SIGN_IN);
        resolve(token)
      }).catch(error => {
        reject(error)
      });
    })
  }
};

export default {
  state, getters, actions, mutations
}
