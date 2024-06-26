import { createClient } from '@supabase/supabase-js';

export default defineNitroPlugin(async (nitroApp) => {
    const config = useRuntimeConfig();

    const url = config.public.supabase.url;
    const serviceKey = config.supabase.serviceKey;

    const supabase = createClient(url, serviceKey, {
        auth: {
            autoRefreshToken: false,
            persistSession: false,
        },
    });
});
