import Vue from 'vue'
import VueRouter from 'vue-router'
import AdministradoresVue from '../views/Administradores.vue'
// import Home from '../views/Home.vue'
import HomeVue from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeVue 
  },
  {
    path: '/administradores',
    name: 'Administradores',
    component: AdministradoresVue
  },  
]

const router = new VueRouter({
  routes
})

export default router
