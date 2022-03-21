import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/servise',
    name: 'Servise',
    component: () => import(/* webpackChunkName: "Servise" */ '../views/Servise.vue')
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import(/* webpackChunkName: "Team" */ '../views/Team.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "Contact" */ '../views/Contact.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
