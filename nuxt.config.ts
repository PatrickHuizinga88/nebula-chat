// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
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
    }
})
