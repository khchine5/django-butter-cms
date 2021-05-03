<template>
  <div>
    <router-link :to="{ path: '/blog/'}" >See more of my blogs</router-link>
    <h3>Post Title:{{ post.title }} </h3>  
        <h3>Post Body: </h3>
        
        <span v-html="post.body"></span>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState({
    post: (state) => state.posts.post,
  }),
  created() {
    this.$store.dispatch("posts/getMainPost");
  },
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
