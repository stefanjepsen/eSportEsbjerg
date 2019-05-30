import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Spil from './views/Spil.vue'
import Tilmeld from './views/Tilmeld.vue'
import Lan from './views/Lan.vue'
import Training from './views/Training.vue'
import Forældre from './views/Forældre.vue'
import Discord from './views/Discord.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Spil',
      name: 'Spil',
      component: Spil
    },
    {
      path: '/Tilmeld',
      name: 'Tilmeld',
      component: Tilmeld
    },
    {
      path: '/Lan',
      name: 'Lan',
      component: Lan
    },
    {
      path: '/Training',
      name: 'Training',
      component: Training
    },
    {
      path: '/Discord',
      name: 'Discord',
      component: Discord
    },
    {
      path: '/Forældre',
      name: 'Forældre',
      component: Forældre
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
