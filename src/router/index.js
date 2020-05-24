import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/views/home'
Vue.use(VueRouter)
const routes = [{
        path: '/',
        name: 'basic',
        // redirect: { path: '/name' },
        component: () =>
            import ('@/layout/Basic.vue'),
        children: [{
            path: '/',
            component: () =>
                import ('@/views/home'),

        }]
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/login')
    }
]
const router = new VueRouter({
    routes,
    mode: 'history'
})
router.beforeEach((to, from, next) => {
    let { fullPath } = to;
    if (!localStorage.getItem('token') && fullPath !== '/login') {
        next('/login')
    } else {
        next()
    }
})
export default router