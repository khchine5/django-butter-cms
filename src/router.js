import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Posts'
import PostPage from '@/components/PostPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Posts
    },
    {
      path: '/post/:slug',
      name: 'Post',
      component: PostPage,
      props: true,
    },
  ]
})
