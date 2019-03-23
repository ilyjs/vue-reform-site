const isDev = process.env.NODE_ENV !== 'production'

export default {
  env: {},
  modern: !isDev,
  head: {
    title: 'AIRLIFT Boiler',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'AIRLIFT Boiler' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#3B8070' },
  css: [],
  build: {},
  manifest: {
    name: 'Boiler',
    short_name: 'boiler',
    description: 'AIRLIFT Boiler',
    theme_color: '#188269'
  },
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/component-cache',
    '@nuxtjs/axios',
    '@nuxtjs/moment',
    ['nuxt-buefy', { css: true, materialDesignIcons: false }],
    [
      'nuxt-fontawesome',
      {
        component: 'fa',
        imports: [
          {
            set: '@fortawesome/pro-light-svg-icons',
            icons: ['fal']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ],
    /* [
      '@nuxtjs/google-analytics',
      {
        id: ''
      }
    ],
    [
      '@nuxtjs/google-tag-manager',
      {
        id: '',
        pageTracking: false
      }
    ],*/
    '@nuxtjs/sitemap'
  ],
  plugins: [],
  axios: {},
  render: {
    http2: {
      push: true
    },
    static: {
      maxAge: '1y',
      setHeaders(res, path) {
        if (path.includes('sw.js')) {
          res.setHeader('Cache-Control', `public, max-age=${15 * 60}`)
        }
      }
    }
  }
}
