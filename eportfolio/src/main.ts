import { createApp } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import '@fontsource/space-grotesk/index.css';
import '@fontsource/space-mono/index.css';
import './style.scss';

import App from './App.vue';
import Page from './Page.vue';

const app = createApp(App);

const routes: RouteRecordRaw[] = [{ path: '/', name: 'home', component: Page }];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
  },
});

app.use(router);

app.mount('#app');
