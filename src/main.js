import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
//公共重置样式 - 全局默认字体大小16px
import './assets/style/reset.scss'


//引入vant组件
import {
    Button,
    Tabbar,
    TabbarItem,
    Field,
    Checkbox,
    CheckboxGroup,
    Cell,
    CellGroup,
    Toast,
    Popup,
    Slider,
    Overlay
} from 'vant'


Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Button);
Vue.use(Field);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Toast);
Vue.use(Popup);
Vue.use(Slider);
Vue.use(Overlay);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')