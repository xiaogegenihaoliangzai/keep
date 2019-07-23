import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import listAll from '../pages/listAll'
import login from '../pages/login'

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
    },{
      path: '/login',
      name: 'login',
      component: login
    }
		
  ]
})
