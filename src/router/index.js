import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue'; // Importar LoginView
import StoryView from '../views/StoryView.vue';
import ClosingView from '../views/ClosingView.vue'; // Importar ClosingView

const routes = [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'LoginView', // Ruta para LoginView
      component: LoginView
    },
    {
      path: '/story',
      name: 'StoryView',
      component: StoryView
    },
    {
      path: '/closing',
      name: 'ClosingView', // Ruta para ClosingView
      component: ClosingView
    },
  ]
;

const router = createRouter({ history: createWebHistory(), routes });
export default router;
