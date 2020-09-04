// import Vue from 'vue'
// import VueRouter from 'vue-router'


import Vue from 'vue'
import VueRouter from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
    //首页的最近练习
    {
        path: '/recent',
        component: () =>
            import ('../components/index/indexRecent/Recent.vue')
    },
    //首页的自定义课程
    {
        path: '/custom',
        component: () =>
            import ('../components/index/indexCustom/Custom.vue')
    },
    //首页的我的喜欢
    {
        path: '/mylike',
        component: () =>
            import ('../components/index/indexMylike/Mylike.vue')
    },
    {
        path: '/',
        component: () =>
            import ("@/views/Home"),
        redirect: '/index',
        children: [{
                path: '/index',
                component: () =>
                    import ("@/views/Index"),
            },
            {
                path: '/sleep',
                component: () =>
                    import ("@/views/Sleep"),
                children: [{
                    // 睡眠详情页  /:id未加
                    path: 'detail/:id',
                    component: () =>
                        import ('../views/SleepDetail.vue'),
                }]
            }, {
                path: '/med',
                component: () =>
                    import ("@/views/Meditation")
            }, {
                path: '/music',
                component: () =>
                    import ("@/views/Music")
            }, {
                path: '/mine',
                component: () =>
                    import ("@/views/Mine"),
                children: [{
                    path: '/mine',
                    redirect: '/mineinfo',
                }, {
                    path: '/mineinfo',
                    component: () =>
                        import ("@/components/mine/MineInfo"),
                }, {
                    path: '/setinfo',
                    component: () =>
                        import ("@/components/mine/SetInfo"),
                }]
            }, {
                path: '/login',
                component: () =>
                    import ('@/views/Login')
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router