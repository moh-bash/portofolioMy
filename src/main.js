import './assets/main.css'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import en from './locale/en.json'
import ar from './locale/ar.json'
const i18n = createI18n({
  locale: 'en',
  messages: {
    en: en,
    ar: ar
  }
})

createApp(App)
  .use(i18n)
  .use(router)
  .mount('#app')

