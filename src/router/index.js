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
import secondchecknum from '../pages/login/secondchecknum'
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
      path: '/secondchecknum',
      name: 'secondchecknum',
      meta:{
        keepAlive:false
      },
      component: secondchecknum
    },{
      path: '/search',
      name: 'search',
      meta:{
        keepAlive:true
      },
      component: search,
    },{
      path: '/comban',
      name: 'comban',
      meta:{
        keepAlive:false
      },
      component: comban,
    },{
      path: '/searchall',
      name: 'searchall',
      meta:{
        keepAlive:false
      },
      component: searchall,
    },{
      path: '/mine',
      name: 'mine',
      meta:{
        keepAlive:true
      },
      component: mine
    },{
		  path: '/class2',
		  name: 'class2',
      meta:{
        keepAlive:true
      },
		  component: class2
		},{
		  path: '/guanzhu',
		  name: 'guanzhu',
      meta:{
        keepAlive:true
      },
		  component: guanzhu
		},{
      path: '/plan',
      name: 'plan',
      meta:{
        keepAlive:true
      },
      component: plan
    },{
      path: '/plan2',
      name: 'plan2',
      meta:{
        keepAlive:true
      },
      component: plan2
    },{
      path: '/secondmsg',
      name: 'secondmsg',
      meta:{
        keepAlive:true
      },
      component: secondmsg
    },{
      path: '/community',
      name: 'community',
      meta:{
        keepAlive:true
      },
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
<<<<<<< HEAD
      component: communitydeday,
      
=======
      meta:{
        keepAlive:true
      },
      component: communitydeday
>>>>>>> 1c6f12e35292287d1dd793457b5626e444bd6dd2
    },
    {
      path: '/sports',
      name: 'sports',
      meta:{
        keepAlive:true
      },
      component: sports
    },
	,
	{
	  path: '/person',
	  name: 'person',
    meta:{
      keepAlive:true
    },
	  component: person
	}
  ]
})
