import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConsultarUsuariosView from '@/views/ConsultarUsuariosView.vue'
import ConsultarEstudianteId from '@/components/ConsultarEstudianteId.vue'
import putEstudianteView from '@/views/putEstudianteView.vue'
import patchEstudianteView from '@/views/patchEstudianteView.vue'
import deleteEstudianteView from '@/views/deleteEstudianteView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/consultarUsuarios',
    name: 'consultarUsuarios',
    component: ConsultarUsuariosView
  },
  {
    path: '/idEstudiante',
    name: 'idEstudiante',
    component: ConsultarEstudianteId
  },
  {
    path: '/putEstudiante',
    name: 'putEstudiante',
    component: putEstudianteView
  },
  {
    path: '/patchEstudiante',
    name: 'patchEstudiante',
    component: patchEstudianteView
  },
  {
    path: '/deleteEstudiante',
    name: 'deleteEstudiante',
    component: deleteEstudianteView 
  },
  {
    path: '/postEstudiante',
    name: 'postEstudiante',
    component: () => import(/* webpackChunkName: "postEstudiante" */ '../views/postEstudianteView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
