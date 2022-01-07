import {createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


// import  style  from '@/assets/css/style.css'


createApp(App).use(BootstrapVue).use(IconsPlugin).use(store).use(router).mount('#app')
