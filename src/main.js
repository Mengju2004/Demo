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
    Tab,
    Tabs,
    Field,
    Checkbox,
    CheckboxGroup,
    Cell,
    CellGroup,
    Popup,
    Slider,
    Overlay,
    Swipe,
    SwipeItem,
    Card,
    Tag,
    PullRefresh,
    Toast,
    Icon,
    NavBar,
    Lazyload,
    Empty
} from 'vant'

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Button);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Field);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Toast);
Vue.use(Popup);
Vue.use(Slider);
Vue.use(Overlay);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Card);
Vue.use(Tag);
Vue.use(PullRefresh);
Vue.use(Icon);
Vue.use(NavBar);
Vue.use(Lazyload);

Vue.use(NavBar);
Vue.use(Empty);

Vue.config.productionTip = false
import ('../src/assets/style/style.css')


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')