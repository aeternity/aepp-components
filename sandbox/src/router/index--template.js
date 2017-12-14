import Vue from 'vue'
import Router from 'vue-router'
import Library from 'sandbox/components/Library'
// import aeAddress from '@/components/aeAddress/aeAddress.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/component/:name',
      name: 'Component',
      component: Library,
      props: true
    }
  ]
})
