import Vue from 'vue'
import Router from 'vue-router'
import StartMenu from '@/components/StartMenu'
import Game from '@/components/Game'
import Restart from '@/components/Restart'

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
      component: Restart,
      props: true
    }
  ]
})
