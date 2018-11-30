import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import DevelopmentDepart from './pages/DevelopmentDepart.vue'
import HrDepart from './pages/HrDepart.vue'
import MarketingDepart from './pages/MarketingDepart.vue'
import TestingDepart from './pages/TestingDepart.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/development',
      name: 'Development',
      component: DevelopmentDepart
    },
    {
      path: '/marketing',
      name: 'Marketing',
      component: MarketingDepart
    },
    {
      path: '/hr',
      name: 'Hr',
      component: HrDepart
    },
    {
      path: '/testing',
      name: 'Testing',
      component: TestingDepart
    },
  ]
})
