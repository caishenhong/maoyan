import Vue from 'vue'
import App from './Maoyan.vue'
import router from './router'
import store from './store'
import 'u-reset.css'
import '@/style/font2/iconfont.css'
import axios from '@/api/http'
//引入移动ui框架以及样式
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'


Vue.prototype.$http = axios;
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')