import Vue from 'vue'
import Router from 'vue-router'

import search from '../pages/search/search'
import mine from '../pages/mine/mine'
import class2 from '../pages/mine/class2'
import guanzhu from '../pages/mine/guanzhu'
import plan from '../pages/plan/plan.vue'
import plan2 from '../pages/plan/plan2.vue'
import secondmsg from '../pages/plan/secondmsg.vue'
import community from '../pages/community/community'
import communitydeday from '../pages/community/communitydeday'
import sports from '../pages/sports/sports'
import login from '../pages/login/login'
import person from '../pages/mine/person'

import hot from '@/pages/community/secondrouter/hot'
import attention from '@/pages/community/secondrouter/attention'
import topic from '@/pages/community/secondrouter/topic'
import diary from '@/pages/community/secondrouter/diary'
import city from '@/pages/community/secondrouter/city'



import comban from '@/pages/search/comban'
import searchall from '@/pages/search/searchall'
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
		  path: '/class2',
		  name: 'class2',
		  component: class2
		},{
		  path: '/guanzhu',
		  name: 'guanzhu',
		  component: guanzhu
		},{
      path: '/plan',
      name: 'plan',
      component: plan
    },{
      path: '/plan2',
      name: 'plan2',
      component: plan2
    },{
      path: '/secondmsg',
      name: 'secondmsg',
      component: secondmsg
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
      path: '/communitydeday',
      name: 'communitydeday',
      component: communitydeday
    },
    {
      path: '/sports',
      name: 'sports',
      component: sports
    },
	,
	{
	  path: '/person',
	  name: 'person',
	  component: person
	}
  ]
})
