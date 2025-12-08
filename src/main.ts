import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import '@/utils/date.js';
import './style.css';

const app = createApp(App);

// Pinia
import { createPinia } from 'pinia';
const pinia = createPinia();
app.use(pinia);

// ElementPlus Icons
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router).mount('#app');
