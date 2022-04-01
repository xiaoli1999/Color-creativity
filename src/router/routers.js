import Layout from '@/views/Layout.vue'

export default [
    {
        path: '/',
        name: 'index',
        component: Layout,
        children: [
            {
                path: '/Home',
                name: 'Home',
                meta: {},
                component: () => import(/* webpackChunkName: "Home" */'../views/Home.vue')
            }]
    },
    {
        path: '*',
        redirect: '/Home',
        meta: {}
    }
]
