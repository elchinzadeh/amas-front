import Vue from 'vue';
import App from './App.vue';

// Vuesax Component Framework
import Vuesax from 'vuesax';
import 'material-icons/iconfont/material-icons.css'; //Material Icons
import 'vuesax/dist/vuesax.css'; // Vuesax
Vue.use(Vuesax);

// axios
import axios from './axios.js';
Vue.prototype.$http = axios;

// Theme Configurations
import '../themeConfig.js';

// Globally Registered Components
import './globalComponents.js';

// Styles: SCSS
import './assets/scss/main.scss';

// Tailwind
import '@/assets/css/main.css';

// Vue Router
import router from './router';

// Vuex Store
import store from './store/store';

// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer';
Vue.use(VueHammer);

// PrismJS
import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

// Cookie
import VueCookies from 'vue-cookies';
Vue.use(VueCookies);

// Vee Validate
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

extend('email', {
    ...email,
    message: 'E-poçt düzgün formatda deyil'
});
extend('required', {
    ...required,
    message: 'Bu xananın doldurulması məcburidir'
});

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

// Feather font icon
require('./assets/css/iconfont.css');

// Vue select css
// Note: In latest version you have to add it separately
import VSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
Vue.component('v-select', VSelect);

// Datepicker
import Datepicker from 'vuejs-datepicker';
Vue.component('v-datepicker', Datepicker);


Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
