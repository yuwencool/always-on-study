import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  beforeCreate() {
    // 打开事件总线
    Vue.prototype.$bus = this;
  }
}).$mount('#app')
