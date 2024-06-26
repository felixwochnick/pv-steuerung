// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@nuxt/ui', "@nuxtjs/supabase"],
    extends: ['@nuxt/ui-pro'],
    ui: {
        icons: ['heroicons', 'ph'],
    },
    supabase: {
        url: process.env.API_URL,
        key: process.env.ANON_KEY,
        serviceKey: process.env.SERVICE_ROLE_KEY,
    }
});