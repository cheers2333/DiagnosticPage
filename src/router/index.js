import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Doctor from '../views/Doctor.vue'
import List from '../views/Doctor/List.vue'
import Patient from '../views/Patient.vue'
import Write from '../views/Patient/Write.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
      path: '/doctor',
      redirect: '/list'
  },
  {
    path: '/patient',
    redirect: '/write'
    },
  {
    path: '/doctor',
    name: 'doctor',
    component: Doctor,
    children: [
        {
            path: '/list',
            name: 'list',
            meta: {
                isLogin: true
              },
            component: List
        },
        {
            path: '/ca',
            name: 'ca',
            component: (resolve) => require(['../views/Doctor/Ca.vue'], resolve)
        }
    ]
  },
  {
    path: '/patient',
    name: 'patient',
    component: Patient,
    children: [
        {
            path: '/write',
            name: 'wirte',
            component: Write
        }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
