import postsService from '../../services/postsService'

const state = {
  posts: [],
  post: {}
}

const getters = {
  posts: state => {
    return state.posts
  },
  post: state => {
    return state.post
  }
}

const actions = {
  getPosts ({ commit }) {
    postsService.fetchPosts()
    .then(posts => {
      commit('setPosts', posts.data)
    })
  },
  getPost ({ commit}, params) {
    postsService.fetchPost(params)
    .then(post => {
      commit('setPost', post.data)
    })
  }
}

const mutations = {
  setPosts (state, posts) {
    state.posts = posts
  },
  setPost (state, post) {
    state.post = post
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}