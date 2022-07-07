import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/UserHeader',
  //   name: 'UserHeader',
  //   component: UserHeader
  // },
  // {
  //   path: '/UserList',
  //   name: 'UserList',
  //   component: UserList
  // },
  // {
  //   path: '/UserFooter',
  //   name: 'UserFooter',
  //   //组件也可以写成一个函数的形式
  //   component: UserFooter
  // },
  // {
  //   path: '/UserItem',
  //   name: 'UserItem',
  //   //组件也可以写成一个函数的形式
  //   component: UserItem
  // },
]

const router = new VueRouter({
  routes
})

export default router
