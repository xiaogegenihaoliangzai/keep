import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import search from '../pages/search'
import mine from '../pages/mine'
import plan from '../pages/plan'
import community from '../pages/community'
import sports from '../pages/sports'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/search',
      name: 'search',
      component: search
    },{
      path: '/mine',
      name: 'mine',
      component: mine
    },{
      path: '/plan',
      name: 'plan',
      component: plan
    },{
      path: '/community',
      name: 'community',
      component: community
    },{
      path: '/sports',
      name: 'sports',
      component: sports
    }
  ]
})
