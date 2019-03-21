// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import mintui from 'mint-ui'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import 'mint-ui/lib/style.css'
import '../lib/dist/css/mui.css'
import '../lib/examples/hello-mui/css/icons-extra.css'
// import './assets/css/common.css'
Vue.config.productionTip = false
Vue.use(mintui);
Vue.use(vueResource);
// 设置服务器的根地址
// Vue.http.options.root='/root'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
