import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './assets/tailwind.css' 

createApp(App).use(router).mount('#app')

// import { createApp } from "vue";
// import App from "./App.vue";
// import "./registerServiceWorker";
// import router from "./router";
// import store from "./store";
// import './assets/tailwind.css';  
// import { createPinia } from 'pinia';

// //import VueSimpleAlert from "vue-simple-alert"; 

// //App.use(VueSimpleAlert, { reverseButtons: true });
// createApp(App).use(createPinia()).use(store).use(router).mount("#app");

