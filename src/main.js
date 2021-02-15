import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import toastPlugin from './plugins/toast';

import './assets/styles/main.scss';

Vue.config.productionTip = false;
Vue.use(toastPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
