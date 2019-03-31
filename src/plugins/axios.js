import Vue from 'vue';
import axios from 'axios';

window.axios=axios;
Vue.prototype.$axios=axios;

export default axios;