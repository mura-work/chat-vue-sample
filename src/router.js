import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import User from './views/User.vue'
import Post from './views/Post.vue'
import Flex from './views/Flex.vue'
import FizzBuzz from './components/fizz_buzz.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/fizz_buzz',
      name: 'fizz_buzz',
      component: FizzBuzz
    },
    {
      path: '/users/:id',
      name: 'user',
      component: User
    },
    {
      path: '/post/:id',
      name: 'post',
      component: Post
    },
    {
      path: '/flex',
      name: 'flex',
      component: Flex
    },
  ]
})