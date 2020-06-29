import Vue from 'vue'
import vueRouter from 'vue-router'
import VueResource from 'vue-resource';
import { routes } from './routes.js';
import App from './App.vue';
import { store } from './store/store';
import { BootstrapVue } from 'bootstrap-vue';

// Set this to false to prevent the production tip on Vue startup.
Vue.config.productionTip = false;

/* starting scrolling plugin */
var VueScrollTo = require('vue-scrollto'); /* https://vue-scrollto.netlify.com/ */
Vue.use(VueScrollTo, {
  duration: 800,
  easing: "ease-in"
})

/* starting router plugin */
Vue.use(vueRouter); /* https://router.vuejs.org/ */

/* getting API data */
Vue.use(VueResource); /* https://github.com/pagekit/vue-resource */
Vue.http.options.root = 'https://centroopticofalconaro.com/API/';

// Install BootstrapVue
Vue.use(BootstrapVue)

const router = new vueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
