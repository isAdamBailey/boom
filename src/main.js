import { createApp } from 'vue'
import App from './App.vue'

const gtmId = import.meta.env.VITE_GTM_ID
if (/^GTM-[A-Z0-9]+$/i.test(gtmId || '')) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: 'gtm_loaded' })
  const gtmScript = document.createElement('script')
  gtmScript.async = true
  gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`
  document.head.appendChild(gtmScript)
}

createApp(App).mount('#app')
