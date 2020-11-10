/*!

=========================================================
* BootstrapVue Argon Dashboard - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/bootstrap-vue-argon-dashboard
* Copyright 2020 Full Contatcs (https://www.creative-tim.com)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from 'vue';
import DashboardPlugin from './plugins/dashboard-plugin';
import App from './App.vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
// router setup
import router from './routes/router';
import VueMask from 'v-mask';
import VueTheMask from 'vue-the-mask';
import { VueMaskDirective } from 'v-mask'
Vue.use(VueTheMask)
    // plugin setup
Vue.use(DashboardPlugin);
Vue.use(VueAxios, axios);
Vue.use(VueMask);
Vue.directive('mask', VueMaskDirective);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App),
    router
});