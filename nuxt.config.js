export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'mobility_website_v1',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/xnk0vwe.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap' }
    ],
    script: [
      { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.0/gsap.min.js",body: true},
      { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollTrigger.min.js",body: true}
    ]
  },
  target: 'static',
  css: [
    "~assets/scss/reset.scss",
    "~assets/scss/global.scss"
  ],
  styleResources: {scss: "~assets/scss/variables.scss"},
  modules: ["@nuxtjs/style-resources"],
  plugins: [],
  components: true,
  buildModules: [],
  build: {}
}
