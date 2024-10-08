import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import StoryView from '../views/StoryView.vue';
import ClosingView from '../views/ClosingView.vue';

const routes = [

  {
    path: '/',
    redirect: '/login',
  },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView
    },
    {
      path: '/story',
      name: 'StoryView',
      component: StoryView
    },
    {
      path: '/closing',
      name: 'ClosingView',
      component: ClosingView
    },
  ]
;

const router = createRouter({ history: createWebHistory(), routes });
export default router;
