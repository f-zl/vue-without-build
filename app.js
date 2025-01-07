import { createApp } from 'vue'
import router from './router.js'

const App = {
    template: "<RouterView />"
}

createApp(App).use(router).mount('#app')