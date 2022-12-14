import {createRouter, createWebHashHistory} from 'vue-router'
import App from '../App.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: App
  },
  {
    path: '/convert',
    name: 'Convert',
    component: () => import(/* webpackChunkName: "about" */ '../components/HelloWorld2.vue')
  },
  {
    path: '/hello',
    name: 'Hello',
    component: () => import(/* webpackChunkName: "about" */ '../components/EncodeFunction.vue')
  }
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  base: process.env.BASE_URL || 'http://localhost:8080',
  routes
})

export default router