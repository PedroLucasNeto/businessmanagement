import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { i18n } from '@/translations/i18n'

import { library } from '@fortawesome/fontawesome-svg-core'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.component('fa', FontAwesomeIcon)
app.use(i18n)

app.use(createPinia())
library.add(fas, far, fab)

app.mount('#app')
