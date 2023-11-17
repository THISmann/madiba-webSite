import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ServiceView from '@/views/ServiceView.vue'
import ContactView from '@/views/ContactView.vue'
import ArrivageView from '@/views/ArrivageView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/apropos',
    name: 'Apropos',
    component: AboutView
  },
  {
    path: '/services',
    name: 'services',
    component: ServiceView
  },
  {
    path: '/arrivages',
    name: 'arrivages',
    component: ArrivageView
  },
  {
    path: '/contacts',
    name: 'Contact',
    component: ContactView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
