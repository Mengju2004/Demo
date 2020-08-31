import Vue from 'vue'
import VueRouter from 'vue-router'


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
                import ("@/views/Sleep")
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