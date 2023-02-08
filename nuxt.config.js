import themeColor from './utils/theme'

export default {
  ssr: false,
  head: {
    titleTemplate: 'practice',
    title: 'تست',
    htmlAttrs: {
      lang: 'fa'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@/assets/main.scss'
  ],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
  ],

  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  vuetify: {
    rtl: true,
    icons: {
      iconfont: 'fa',
    },
    theme: {
      options: { customProperties: true },
      themes: themeColor
    }
  },

  build: {
  }
}
