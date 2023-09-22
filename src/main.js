import { createApp } from 'vue'
import App from './App.vue'

import Vuesax from 'vuesax3'
import 'vuesax3/dist/vuesax.css'

import components from './components/index'

const app = createApp(App)
app.mount('#app')
app.use(Vuesax)

components.forEach(component => {
    app.component(component.name, component)
})
