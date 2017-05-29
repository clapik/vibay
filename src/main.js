// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App';
import router from './router';
import store from './store';
// import * as types from './store/mutation-types';
// import client from './store/modules/feathers_client';

Vue.config.productionTip = false;
Vue.use(Vuetify);

// store.commit(types.SET_UP_FEATHERS, client);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {App}
});
