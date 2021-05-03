import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Posts'
import PostPage from '@/components/PostPage'
import HomePage from '@/components/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/blog/',
      name: 'Posts',
      component: Posts,
    },
    {
      path: '/blog/:slug',
      name: 'Post',
      component: PostPage,
      props: true,
    },
  ]
})
