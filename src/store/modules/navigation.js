import * as types from '../mutation-types'

const state = {
  showSidebar: true
};

const getters = {
  showSidebar: (state) => {
    return state.showSidebar
  }
};

const mutations = {
  [types.TOGGLE_SIDEBAR](state) {
    state.showSidebar = !state.showSidebar
  }
};

const actions = {};

export default {
  state, getters, actions, mutations
}
