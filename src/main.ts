import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { gsap } from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import './styles/main.scss'

gsap.registerPlugin(CustomEase);

loadFonts()

createApp(App)
  .use(vuetify)
  .mount('#app')
