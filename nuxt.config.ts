const isDev = process.env.NODE_ENV !== 'production'

export default {
  env: {},
  modern: !isDev,
  head: {
    title: 'Vue Reform',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Vue Reform' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#3B8070' },
  css: ['~/node_modules/bulma-helpers/css/bulma-helpers.min.css'],
  build: {},
  manifest: {
    name: 'Vue Reform',
    short_name: 'vuereform',
    description: 'Vue Reform',
    theme_color: '#DD634D',
    start_url: 'https://vuereform.dev'
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
  icon: {
    iconSrc: 'static/images/vue-reform-logo.png',
    targetDir: 'static/icons'
  },
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
