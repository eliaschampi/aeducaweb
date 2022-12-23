export default {

    generate: {
        fallback: true
    },

    components: true,

    target: "server",

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        '@nuxtjs/style-resources',
        '@nuxtjs/axios',
        '@nuxtjs/robots'
    ],

    server: {
        port: 8000 // default: 3000
    },

    serverMiddleware: [
        { path: '/api', handler: '~/api' },
    ],

    axios: {
        baseURL: `${process.env.BASE_URL}/api`
    },

    robots: {
        UserAgent: '*',
        Disallow: ''
    },


    head: {
        title: 'Colegio Carrión Cusco',
        titleTemplate: '%s || Colegio Carrión',
        htmlAttrs: {
            lang: 'es'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'og:title', property: 'og:title', content: "Colegio Carrión Cusco" },
            { hid: 'og:description', property: 'og:description', content: "Colegio Carrión Cusco. Somos una comunidad educativa con estrategias y valores pensados para tu futuro" },
            { hid: 'og:url', property: 'og:url', content: "https://www.carrioneduca.edu.pe" },
            { hid: 'og:image', property: 'og:image', content: `${process.env.BASE_URL}/preview.webp` },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],

    },

    loading: {
        color: '#eec535'
    },

    css: [
        'assets/scss/style.scss'
    ],


    plugins: [
        '~/plugins/vue-awesome-swiper.js',
        '~/plugins/vuejs-paginate.js',
        '~/plugins/Mixitup.client.js',
        {
            src: '~/plugins/lightbox.js',
            ssr: false
        },
        {
            src: "~/plugins/aos",
            ssr: false
        },
        {
            src: "~/plugins/typed.js",
            ssr: true
        }
    ],


    buildModules: [
    ],


    styleResources: {
        scss: [
            '~/assets/scss/_variables.scss',
        ]
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        extend(config, ctx) {
        },
    },
}
