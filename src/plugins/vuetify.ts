// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '../styles/_variables.scss'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#ffffff',
          primary: '#E10075',
          secondary: '#737373'
        },
      },
    },
    variations: {
      colors: ['primary', 'secondary'],
      lighten: 3,
    }
  },
})
