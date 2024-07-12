import { createApp } from 'vue'
import App from './App.vue'
import "./style.css"
import Box from "./components/layout/Box.vue"
// import FlexWrap from "./components/layout/FlexWrap.vue"
import router from './routers'
const app = createApp(App)

app.use(router)
app.component('Layout', Box)
// app.component('FlexWrap', FlexWrap)
app.mount('#app')
