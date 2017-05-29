import * as types from '../mutation-types'

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
  [types.SIGN_OUT](state) {
    state.currentUser = {};
  }
};

const actions = {};

export default {
  state, getters, actions, mutations
}
