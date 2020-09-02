import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
//公共重置样式
import './assets/style/reset.scss'
//字体图标css引入
import './assets/iconfont/iconfont.css'

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
    Swipe, SwipeItem,
    Tab, Tabs,
    Card,
    Tag,
    NavBar, 
    Empty
} from 'vant'


Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Button);
Vue.use(Field);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Card);
Vue.use(Tag);
Vue.use(NavBar);
Vue.use(Empty);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')