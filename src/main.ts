import './assets/main.css'

import { createApp } from 'vue'
import Oruga from '@oruga-ui/oruga-next'

import { tailwindConfig } from './plugins/tailwind'

import App from './App.vue'

const app = createApp(App)
app.use(Oruga, {
  ...tailwindConfig
})
app.mount('#app')
