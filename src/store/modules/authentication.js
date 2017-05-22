import * as types from '../mutation-types'

const state = {
  currentUser: {}
};

const getters = {
  currentUser: state => state.currentUser
};

const mutations = {
  [types.SIGN_IN](state, payload) {
    state.currentUser = payload;
  }
};

const actions = {
  signIn({commit, state, rootState}, payload) {
    const client = rootState.feathers.client;
    return new Promise((resolve, reject) => {
      client.authenticate({
        strategy: 'local',
        email: payload.email,
        password: payload.password
      }).then(token => {
        console.log('User is logged in');
        console.log(token);
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
