import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import feathers from './modules/feathers'
import authentication from './modules/authentication'
import navigation from './modules/navigation'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    feathers,
    authentication,
    navigation
  },
  strict: debug
})
