// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    app: {
        head: {
            title: 'Nebula - Powerful documents chatbot',
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            ],
            link: [
                {rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg'}
            ]
        },
    },
    css: ['~/assets/css/main.css'],
    runtimeConfig: {
        openaiApiKey: process.env.OPENAI_API_KEY,
        public: {
            supabaseUrl: process.env.SUPABASE_URL,
            supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
        }
    },
    modules: [
        '@nuxtjs/supabase',
        'shadcn-nuxt',
        '@nuxtjs/i18n',
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    shadcn: {
        prefix: '',
        componentDir: './components/ui',
    },
    i18n: {
        locales: [
            {code: 'en', file: 'en.json'},
            {code: 'nl', file: 'nl.json'},
        ],
        lazy: true,
        langDir: 'locales',
        defaultLocale: 'nl'
    }
})
