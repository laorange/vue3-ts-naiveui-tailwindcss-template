import { createApp } from 'vue';
import './style.css';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router/router.ts';

const meta = document.createElement('meta');
meta.name = 'naive-ui-style';
document.head.appendChild(meta);

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
