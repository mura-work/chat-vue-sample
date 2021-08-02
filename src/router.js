import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Users from './views/Users.vue'
import User from './views/User.vue'
import Post from './views/Post.vue'
import Flex from './views/Flex.vue'

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
      path: '/users',
      name: 'users',
      component: Users
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