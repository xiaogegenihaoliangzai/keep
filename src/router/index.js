import Vue from 'vue'
import Router from 'vue-router'
import search from '../pages/search/search'
import mine from '../pages/mine/mine'
import class2 from '../pages/mine/class2'
import guanzhu from '../pages/mine/guanzhu'
import person from '../pages/mine/person'
import shuju from '../pages/mine/shuju'
import biye from '../pages/mine/biye'
import plan from '../pages/plan/plan.vue'
import plan2 from '../pages/plan/plan2.vue'
import secondmsg from '../pages/plan/secondmsg.vue'
import community from '../pages/community/community'
import communitydeday from '../pages/community/communitydeday'
import sports from '../pages/sports/sports'
import login from '../pages/login/login'
import secondchecknum from '../pages/login/secondchecknum'

import hot from '@/pages/community/secondrouter/hot'

import comban from '@/pages/search/comban'
import searchall from '@/pages/search/searchall'
import timergop from '@/pages/search/timergop'
import temp from '@/pages/search/temp'
import timer from '@/pages/search/timer'
import dataall from '@/pages/search/dataAll'

Vue.use(Router)


export default new Router({
	
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },{
      path: '/temp',
      name: 'temp',
      meta:{
        keepAlive:false
      },
      component: temp
    },{
      path: '/dataall',
      name: 'dataall',
      meta:{
        keepAlive:false
      },
      component: dataall
    },{
      path: '/timer',
      name: 'timer',
      meta:{
        keepAlive:false
      },
      component: timer
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
      path: '/timergop',
      name: 'timergop',
      meta:{
        keepAlive:false
      },
      component: timergop,
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
        keepAlive:false
      },
      component: class2
    },{
      path: '/guanzhu',
      name: 'guanzhu',
      meta:{
        keepAlive:false
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
  
      ]
    },{
      path: '/communitydeday',
      name: 'communitydeday',
      meta:{
        keepAlive:true
      },
      component: communitydeday
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
      keepAlive:false
    },
    component: person
  },
  {
    path: '/shuju',
    name: 'shuju',
    meta:{
      keepAlive:false
    },
    component: shuju
  },
	{
	  path: '/biye',
	  name: 'biye',
	  meta:{
	    keepAlive:false
	  },
	  component: biye
	},
  ]
})
