import { createRouter, createWebHistory } from 'vue-router'
import { supabase } from '@/supabase'

// Public Views
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

// Admin Views
import Admin from '../views/Admin.vue'
import AdminProjects from '../components/admin/Projects.vue'
import AdminSkills from '../components/admin/Skills.vue'
import AdminMessages from '../components/admin/Messages.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children: [
      {
        path: 'projects',
        name: 'AdminProjects',
        component: AdminProjects
      },
      {
        path: 'skills',
        name: 'AdminSkills',
        component: AdminSkills
      },
      {
        path: 'messages',
        name: 'AdminMessages',
        component: AdminMessages
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


// ====================================
// 🔒 Route Guard — حماية لوحة التحكم
// ====================================
// router.beforeEach(async (to, from, next) => {
//   const { data } = await supabase.auth.getSession()

//   const isProtected =
//     to.path.startsWith('/admin')

//   if (isProtected && !data.session) {
//     return next('/login')
//   }

//   next()
// })

export default router
