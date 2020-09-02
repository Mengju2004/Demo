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

const routes = [{
    path: '/',
    component: () =>
        import ("@/views/Home"),
    redirect: '/index',
    children: [{
            path: '/index',
            component: () =>
                import ("@/views/Index")
        }, {
            path: '/sleep',
            component: () =>
                import ("@/views/Sleep"),
            children: [{
                // 睡眠详情页  /:id未加
                path: 'detail',
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
                import ("@/views/Mine")
        },
        {
            path: '/login',
            component: () =>
                import ('@/views/Login')
        }

    ]
}]

const router = new VueRouter({
    routes
})

export default router