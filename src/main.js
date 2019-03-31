import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router.config'
import './plugins/axios'

import './assets/css/amazeui.min.css';
import './assets/css/wap.css';

import 'animate.css';

import config from './config/config';
window.baseUrl = config.baseUrl.https

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
