import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/main.css'

new Vue({
  components:{App},       //  组件  在.vue文件写到所有内容都会替换到这里
  template:'<App />',   //模板入口 

  router:router   //在new Vue 内写
}).$mount('#app')   //vue管理入口  

