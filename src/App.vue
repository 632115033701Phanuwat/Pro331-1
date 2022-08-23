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

nav h1 {
  padding: 1rem;
  font-size: 35px;
  background-color: rgb(131, 253, 163);
  border-radius: 25px;

  font-weight: bold;
  color: #2c3e50;
  margin: -45px 650px 0 650px;
}

nav h1:hover {
  background-color: #40e0d0;
  transition: 0.5s;
  color: rgb(255, 255, 255);
}

/* nav a.router-link-exact-active {
  color: #fafafa;
} */
h4 {
  font-size: 20px;
}

body {
  background-image: url('~@/assets/02.jpg');
  background-size: 1650px;
  background-attachment: fixed;
}
</style>
