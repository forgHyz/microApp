export default [
    {
        path: '/',
        component: '../layouts/index.js',
        routes: [
            {
                path: '/',
                component: './index',
            },
            {
                path: '/home',
                component: './home',
            },
            {
                path: '/umiWork',
                microApp: 'umiWork',
                microAppProps: { autoSetLoading: true, className: 'className', wrapperClassName: 'wrapperClassName' }
            },
            {
                path: '/vueWoek',
                microApp: 'vueWork',
                microAppProps: { autoSetLoading: true, className: 'className', wrapperClassName: 'wrapperClassName' }
            },
        ]
    },
    // {
    //     path: '/',
    //     component: '@pages/home',
    // },
    // { path: '/react-woek', microApp: 'reactWork' },
    // { path: '/vue-woek', microApp: 'vueWork' },
]