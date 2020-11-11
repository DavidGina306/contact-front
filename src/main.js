require('./config/config');
import Vue from 'vue';
import DashboardPlugin from './plugins/dashboard-plugin';
import App from './App.vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './routes/router';
import VueIziToast from 'vue-izitoast';
import 'izitoast/dist/css/iziToast.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserSecret)

Vue.use(DashboardPlugin);
Vue.use(VueAxios, axios);
Vue.use(VueIziToast);
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
    el: '#app',
    render: h => h(App),
    router
});
