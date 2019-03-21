import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import vip from '../components/vip'
import shopcar from '../components/shopcar'
import search from '../components/search'
import newList from '../news/newList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/vip',
      name: 'vip',
      component: vip
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: shopcar
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path:'/home/newList',
      name:'newList',
      component:newList
    }
  ],
  linkActiveClass:'mui-active'//注意激活样式的用法
})
