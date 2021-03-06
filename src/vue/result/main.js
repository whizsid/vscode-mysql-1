import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './theme/default.css';

import UmyUi from 'umy-ui'
import 'umy-ui/lib/theme-chalk/index.css'; // 引入样式
Vue.use(UmyUi);

Vue.use(ElementUI);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
