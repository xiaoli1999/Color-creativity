import Layout from '@/views/Layout.vue'

export default [
    {
        path: '/',
        name: 'index',
        component: Layout,
        redirect: '/Home',
        children: [
            {
                path: '/Home',
                name: 'Home',
                meta: {},
                component: () => import(/* webpackChunkName: "Home" */'../views/Home.vue')
            },
            {
                path: '/Info',
                name: 'Info',
                meta: {},
                component: () => import(/* webpackChunkName: "Info" */'../views/Info.vue')
            }
        ]
    },
    {
        path: '*',
        redirect: '/Home',
        meta: {}
    }
]
