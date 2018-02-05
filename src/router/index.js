import Vue from 'vue'
import Router from 'vue-router'
import StartMenu from '@/components/StartMenu'
import Game from '@/components/Game'
import Restart from '@/components/Restart'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StartMenu',
      component: StartMenu
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    },
    {
      path: '/restart',
      name: 'Restart',
      component: Restart
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
