import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import persistedState from 'pinia-plugin-persistedstate'  // Importa el plugin de persistencia

import App from './App.vue'
import router from './router'

// Crea la instancia de Pinia y añade el plugin de persistencia
const pinia = createPinia()
// pinia.use(persistedState)

const app = createApp(App)

app.use(pinia)  // Usa la instancia de Pinia con el plugin configurado
app.use(router)

app.mount('#app')
