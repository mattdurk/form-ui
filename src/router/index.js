import Vue from 'vue'
import Router from 'vue-router'
import mainView from '../mainView'
import error404 from '../views/error-pages/error_404'
import error500 from '../views/error-pages/error_500'
import login from '../views/user-pages/login'
import register from '../views/user-pages/register'
import inquiry from '../views/inquiry'

Vue.use(Router)
export default new Router({
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '/login',
    component: mainView,
    children: [
      {
        path: '/inquiry',
        component: inquiry
      },
    ]
  },
  {
    path: '*',
    redirect: '/404',
    component: {
      render (c) { return c('router-view') }
    },
    children: [
      {
        path: '/404',
        component: error404
      },
      {
        path: '/500',
        component: error500
      },
      {
        path: '/login',
        component: login
      },
      {
        path: '/pages/register',
        component: register
      }
    ]}
  ]
})
