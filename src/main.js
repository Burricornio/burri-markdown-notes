import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import 'tailwindcss/tailwind.css'

// Load notes JSON
// import notes from '@/seed.json'
// store.commit('setNotes', notes)

// Check auth process
store.dispatch('checkAuth')

createApp(App).use(store).mount('#app')
