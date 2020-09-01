import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'


//引入vant组件
import {
    Button,
    Tabbar,
    TabbarItem,
    PullRefresh,
    Toast,
    Icon,
    NavBar
} from 'vant'

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Button);
Vue.use(PullRefresh);
Vue.use(Toast);
Vue.use(Icon);
Vue.use(NavBar)


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')