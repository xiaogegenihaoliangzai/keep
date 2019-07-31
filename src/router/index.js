import Vue from 'vue'
import Router from 'vue-router'

import search from '../pages/search'
import mine from '../pages/mine'
import plan from '../pages/plan'
import community from '../pages/community/community'
import deday from '../pages/community/communitydeday'
import sports from '../pages/sports'
import login from '../pages/login'
//import person from '../pages/person'

import hot from '@/pages/community/secondrouter/hot'
import attention from '@/pages/community/secondrouter/attention'
import topic from '@/pages/community/secondrouter/topic'
import diary from '@/pages/community/secondrouter/diary'
import city from '@/pages/community/secondrouter/city'



import comban from '@/pages/comban'
import searchall from '@/pages/searchall'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },{
      path: '/search',
      name: 'search',
      component: search,
    },{
      path: '/comban',
      name: 'comban',
      component: comban,
    },{
      path: '/searchall',
      name: 'searchall',
      component: searchall,
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
      component: community,
      children:[		 
		  {path:"hot",component: hot},
		  {path:"attention",component: attention},
		  {path:"topic",component: topic},
		  {path:"diary",component: diary},
		  {path:"city",component: city},
		  ]
    },{
      path: '/deday',
      name: 'deday',
      component: deday
    },
    {
      path: '/sports',
      name: 'sports',
      component: sports
    }
  ]
})
