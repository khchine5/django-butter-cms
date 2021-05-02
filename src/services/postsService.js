import api from '@/services/api'

export default {
  fetchPosts() {
    return api.get(`posts/`)
              .then(response => response.data)
  },
  fetchPost(params) {
    return api.get(`post/` + params.slug)
              .then(response => response.data)
  }
}