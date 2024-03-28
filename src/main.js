import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/lara-light-purple/theme.css'

createApp(App).use(PrimeVue).use(router).mount('#app')
