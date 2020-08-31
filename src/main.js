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
    Tab, Tabs,
    Swipe, SwipeItem
} from 'vant'


Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Button);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Swipe);
Vue.use(SwipeItem);

Vue.config.productionTip = false
import('../src/assets/style/style.css')


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
