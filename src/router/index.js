import { createRouter, createWebHistory } from 'vue-router'
import { supabase } from '@/supabase'

// Public Views
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

 
 
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
