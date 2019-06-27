import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home/Index.vue'
import Manual from './pages/Manual/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/manual',
      name: 'manual',
      component: Manual
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './pages/About/Index.vue')
    }
  ]
})
