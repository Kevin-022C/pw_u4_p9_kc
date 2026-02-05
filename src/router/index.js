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
    component: HomeView,
    meta: {
      requiereAutorizacion: true,
      esPublica: false
    }
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
    component: ConsultarUsuariosView,
    meta: {
      requiereAutorizacion: true,
      esPublica: false
    }
  },
  {
    path: '/idEstudiante',
    name: 'idEstudiante',
    component: ConsultarEstudianteId,
    meta: {
      requiereAutorizacion: true,
     
    }
  },
  {
    path: '/putEstudiante',
    name: 'putEstudiante',
    component: putEstudianteView,
    meta: {
      requiereAutorizacion: true,
     
    }
  },
  {
    path: '/patchEstudiante',
    name: 'patchEstudiante',
    component: patchEstudianteView,
    meta: {
      requiereAutorizacion: true,
     
    }
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
//configuracion de un guardian para proteger las rutas
router.beforeEach((to, from, next) => {
  const requiereAutorizacion = to.meta.requiereAutorizacion
  const esPublica = to.meta.esPublica
  const token = localStorage.getItem('token')

  if (requiereAutorizacion && !token) {
    // Si la ruta requiere autenticación y no hay token, redirigir al login
    next({ name: 'login' })
    console.log('No hay token, redirigiendo al login')
  } else if (esPublica && token) {
    // Si la ruta es pública y hay token, redirigir a la home
    next({ name: 'home' })
    console.log('Hay token, redirigiendo a la home')
  } else {
    console.log('No hay problemas, continuando con la navegación')
    // Si no hay problemas, continuar con la navegación
    next()
  }
})
export default router
