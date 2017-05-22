import * as types from '../mutation-types';

const state = {
  state: null
};

const getters = {};

const mutations = {
  [types.SET_UP_FEATHERS](state, client) {
    state.client = client;
  }
};

const actions = {};

export default {
  state, getters, actions, mutations
}
