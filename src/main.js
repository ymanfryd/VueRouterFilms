import Vue from 'vue'
import App from './App.vue'
import SimplePlugin from './plugins/simplePlugin'
import marked from "marked";

Vue.config.productionTip = false

Vue.use(SimplePlugin)
Vue.filter('marked', marked)

new Vue({
  render: h => h(App),
}).$mount('#app')
