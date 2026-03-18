import { createApp } from 'vue'
import App from './App.vue'

const GA_MEASUREMENT_ID = 'G-20FJRY7NR2'

if (import.meta.env.PROD) {
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_MEASUREMENT_ID)

  const gaScript = document.createElement('script')
  gaScript.async = true
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`
  document.head.appendChild(gaScript)
}

createApp(App).mount('#app')
