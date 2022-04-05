import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vuelos',
    name: 'Vuelos',
    component: () => import(/* webpackChunkName: "vuelos" */ '../views/Vuelos.vue')
  },
  {
    path: '/reservas',
    name: 'Reservar',
    component: () => import(/* webpackChunkName: "reservas" */ '../views/Reservar.vue')
  },
  {
    path: '/empleados',
    name: 'Empleados',
    component: () => import(/* webpackChunkName: "empleados" */ '../views/Empleados.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const tokenValido = (token) => {
  if ((token.toString()).startsWith('Bearer')) {
    return true
  }
  return false
}


router.beforeEach((to, from, next) => {
  console.log("to "+ "'" +to.path+ "'")
  console.log("from "+"'" +from.path+ "'")
  console.log("next "+"'" +next.path+ "'")
  if (to.path == "/") {
    next()
  }
  if (tokenValido(tokenGenerado)) {
    console.log("Token valido")
    next()
  } else {
    console.log("Token inválido")
  }

})

export default router
