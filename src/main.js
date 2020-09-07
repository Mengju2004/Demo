import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
//公共重置样式
import './assets/style/reset.scss'
// 组件修改样式
import './assets/style/common.scss'

//字体图标css引入
import './assets/iconfont/iconfont.css'
import './assets/iconfont2/iconfont.css'

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
    ActionSheet,
    Swipe,
    SwipeItem,
    Card,
    Tag,
    PullRefresh,
    Toast,
    Icon,
    NavBar,
    Lazyload,
    Empty,
    CouponCell,
    CouponList,
    Popup,
    Dialog,
    ShareSheet
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
Vue.use(ActionSheet);
Vue.use(Card);
Vue.use(Tag);
Vue.use(PullRefresh);
Vue.use(Toast);
Vue.use(Icon);
Vue.use(NavBar);
Vue.use(Lazyload);
Vue.use(ShareSheet);
Vue.use(Empty);
Vue.use(CouponCell);
Vue.use(CouponList);
Vue.use(Dialog);
Vue.use(Popup);


Vue.config.productionTip = false
import ('../src/assets/style/style.css')


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')