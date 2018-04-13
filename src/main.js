// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from './pages/index'
import DetailPage from './pages/detail'
import OrderListPage from './pages/orderList'
import DetailAnalysis from './pages/detail/analysis'
import DetailCount from './pages/detail/count'
import DetailForcast from './pages/detail/forecast'
import DetailPublish from './pages/detail/publish'


import store from './store'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path:'/',
      component: IndexPage
    },
    {
      path: '/orderList',
			component: OrderListPage
    },
    {
      path:'/detail',
      component: DetailPage,
      redirect: '/detail/analysis',
      children:[
        {
          path:'analysis',
          component: DetailAnalysis,
        },
        {
          path:'forecast',  //不要加 path:'/forecast'
          component: DetailForcast
        },
        {
          path:'publish',
          component: DetailPublish
        },
        {
          path: 'count',
          component: DetailCount
        }
      ]
    }
   
  ]
 
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { Layout },
  template: '<Layout/>'
})
