import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AlemaoProMundo from '@/components/AlemaoProMundo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/alemaomundo',
      name: 'AlemaoProMundo',
      component: AlemaoProMundo
    }
  ]
})
