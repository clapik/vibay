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

const actions = {};

export default {
  state, getters, actions, mutations
}
