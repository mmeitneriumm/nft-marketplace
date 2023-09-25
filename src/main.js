import { createApp } from 'vue'
import App from './App.vue'

import Vuesax from 'vuesax3'
import 'vuesax3/dist/vuesax.css'

import components from './components/index'
import router from './router/router'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app
    .use(Vuesax)
    .use(router)
    .mount('#app')
