import {createApp} from 'vue'
import 'material-icons/iconfont/material-icons.css';
import Vuesax from 'vuesax3'
import './assets/main.css'
import 'vue3-toastify/dist/index.css';

import 'vuesax3/dist/vuesax.css' //Vuesax styles
import App from './App.vue'

const app = createApp(App)
app.use(Vuesax, {
  // options here
})

// Mount vue app
app.mount('#app')