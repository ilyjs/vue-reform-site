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
    link: [{ rel: 'stylesheet', href: 'https://use.typekit.net/cqv3gbd.css' }]
  },
  loading: { color: '#3B8070' },
  css: ['~/assets/sass/variables.scss'],
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
    ['nuxt-buefy', { css: false, materialDesignIcons: false }],
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
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-136227476-2'
      }
    ],
    [
      '@nuxtjs/google-tag-manager',
      {
        id: 'GTM-MRJC5DT',
        pageTracking: false
      }
    ],
    '@nuxtjs/sitemap'
  ],
  plugins: [],
  icon: {
    iconSrc: 'static/images/vue-reform-square.png',
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
