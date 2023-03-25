import Vue from 'vue'
import VueRouter from 'vue-router'
import ListaView from '../views/ListaProyecto.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/ListaView',
    name: 'ListaView',
    component: ListaView
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
