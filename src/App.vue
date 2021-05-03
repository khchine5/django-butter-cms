<template>
  <div id="app">
    <header>
      <div class="content">
        <a href="/">Khchine5 blog (based on ButterCMS + django + Vuejs)</a>
      </div>
    </header>
    <div class="content main">
      <a href="/">
        <img src="@/assets/my_butter_cms.png" style="width: 250px" />
      </a>
      <p>My awesome blog</p>
      <br />
      <hr />
      <h3>Posts on My Butter CMS Account</h3>
      <router-view  />
    </div>
    <footer>
      <p class="content">
        Made with ♥ by <a href="https://khchine5.vercel.app/">Hamza Khchine</a>.
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
html,
body,
#app {
  margin: 0;
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
}
header,
footer {
  background-color: #61bdff;
  width: 100%;
  padding: 1em 0;
  flex: 0 0 auto;
}
.content {
  width: 38em;
  max-width: 100%;
  margin: auto;
  box-sizing: border-box;
  padding: 0 1em;
}
.main {
  flex: 1 1 100%;
  padding: 3em 1em;
}
h1 a:before {
  display: inline-block;
  content: "";
  width: 1.5em;
  height: 1.5em;
  position: relative;
  top: 0.25em;
  background-image: url("/static/logo.svg");
  background-repeat: no-repeat;
}
h1 a {
  color: inherit;
  text-decoration: none;
}
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