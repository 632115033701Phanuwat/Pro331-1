<template>
  <nav>
    <br />
    <blockquote></blockquote>
    <router-link :to="{ name: 'EventList' }"><h1>Home</h1></router-link>
    <br />
    <blockquote></blockquote>
    <!-- <router-link :to="{ name: 'about' }">About</router-link> -->
  </nav>
  <router-view />
</template>
<script>
export default {
  inject: ['GStore']
}
</script>
<style>
#app {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  padding: 1rem;
  font-size: 35px;
  font-weight: bold;
  color: #2c3e50;
  margin: -45px 650px 0 650px;
}
/* nav a.router-link-exact-active {
  color: #fafafa;
} */
h4 {
  font-size: 20px;
}
</style>
