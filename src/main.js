import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/reset.scss'

import 'amfe-flexible'

//引入vant组件
import {
    Button,
    Tabbar,
    TabbarItem,
    Cell,
    CellGroup
} from 'vant'


Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Button);
Vue.use(Cell);
Vue.use(CellGroup);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')