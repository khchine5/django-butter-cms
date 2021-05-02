<template>
  <div class="hello">
    <img src='@/assets/logo-django.png' style="width: 250px" />
    <p>My awesome blog</p>
    <br/>
    <hr/>
    <h3>Posts on Database</h3>
    <p v-if="posts.length === 0">No posts</p>
    <div v-for="_post in posts" :key="_post.slug">
      <h3>Post Title:{{ _post.title }} </h3>  
          <h3>Post summary: </h3>{{ _post.summary }}
        <h2>Essential Links</h2>
        <router-link
            :to="{ path: '/post/' + _post.slug}" >more..</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    posts: state => state.posts.posts
  }),
  created() {
    this.$store.dispatch("posts/getPosts");

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
hr {
  max-width: 65%;
}

.msg {
  margin: 0 auto;
  max-width: 30%;
  text-align: left;
  border-bottom: 1px solid #ccc;
  padding: 1rem;
}

.msg-index {
  color: #ccc;
  font-size: 0.8rem;
  /* margin-bottom: 0; */
}

img {
  width: 250px;
  padding-top: 50px;
  padding-bottom: 50px;
}

</style>
