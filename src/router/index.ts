import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import BasicLayout from '../components/layout/BasicLayout.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
    {
      path: '/',
      name: 'BasicLayout',
      component: BasicLayout,
      children: [
        {path: '', name: 'Home', component: Home},
        {path: 'home', name: 'Home', component: Home},
        {
          path: 'user',
          name: 'SideBarLayout',
          component: () => import('../components/layout/SideBarLayout.vue'),
          children: [
            {path: '/', name: 'UserProfile', component: () => import('../components/user/user-profile.vue')},

          ]
        }

      ]
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
