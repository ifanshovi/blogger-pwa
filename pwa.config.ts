import { defineConfig } from '@/types/config';

export default defineConfig({
  manifest: {
    id: '/',
    name: 'CBT MINSEMA',
    short_name: 'MINSEMA',
    description: 'Aplikasi Computer Based Test MIN 10 Magetan',
    dir: 'ltr',
    lang: 'id-ID',
    background_color: '#ffffff',
    theme_color: '#14532d',
    display: 'standalone',
    orientation: 'portrait',
    scope: '/',
    start_url: '/',
    prefer_related_applications: false,
  },

  pwa: {
    logs: true,
  },

  oneSignal: {
    enabled: false,
    appId: '********-****-****-****-************',
    allowLocalhostAsSecureOrigin: true,
  },

  origin: 'https://www.cbtminsema.my.id',
});
