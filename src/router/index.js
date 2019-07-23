import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import listAll from '../pages/listAll'
import login from '../pages/login'

import community from '../pages/community';
import first from '../pages/first';

import yundong from '../pages/yundong'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/listall',
      name: 'listAll',
      component: listAll

    },
    {
      path: '/community',
      name: 'community',
      component: community

    },{
      path: '/login',
      name: 'login',
      component: login


    },
    {
      path: '/first',
      name: 'first',
      component: first


    },
    {
      path: '/yundong',
      name: 'yundong',
      component: yundong

    }
		
  ]
})
