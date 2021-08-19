import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import './css/index.css';
import ArchVueHome from './components/archvue/pages/ArchVueHome.vue';
import ArchVueComponentDocumentation from './components/archvue/pages/ArchVueComponentDocumentation.vue';
import ArchVueBlog from './components/archvue/pages/ArchVueBlog.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: ArchVueHome },
    { path: '/components/:name?', name: 'components', component: ArchVueComponentDocumentation },
    { path: '/blog', name: 'blog', component: ArchVueBlog },
  ],
});

createApp(App)
  .use(router)
  .mount('#app');
