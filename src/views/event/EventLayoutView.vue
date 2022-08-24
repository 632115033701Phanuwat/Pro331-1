<template>
  <div v-if="GStore.event">
    <h1 class="h4c">{{ GStore.event.title }}</h1>
    <div id="nav">
      <router-link class="list" :to="{ name: 'EventDetails' }"
        >Patient Details</router-link
      >
      |
      <router-link class="list" :to="{ name: 'VaccineDetail' }"
        >Vaccine Certificate</router-link
      >
      |
      <router-link class="list" :to="{ name: 'EventRegister' }"
        >Doctor Recommendation</router-link
      >
    </div>
    <router-view :event="GStore.event" />
  </div>
</template>
<script>
// import EventService from '@/services/EventService.js'
export default {
  inject: ['GStore']
}
</script>
<style>
#nav {
  margin: 1rem;
  padding: 1rem;
  background-color: none;
  width: 100%;
}
#nav a {
  text-decoration: none;
  cursor: pointer;
}

.list {
  padding: 1rem;
  background-color: none;
  border-radius: 25px;
  background-color: #9fe2bf;
  color: black;
}
.list:hover {
  background-color: #40e0d0;
  transition: 0.5s;
  color: #fff;
}
.h4c {
  margin: -35px 0 0 0;
}
</style>
