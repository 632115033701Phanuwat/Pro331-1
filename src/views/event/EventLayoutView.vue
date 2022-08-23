<template>
  <div v-if="GStore.event">
    <h1 class="h4c">{{ GStore.event.title }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'EventDetails' }">Patient Details</router-link>
      |
      <router-link :to="{ name: 'VaccineDetail' }"
        >Vaccine Certificate</router-link
      >
      |
      <router-link :to="{ name: 'EventRegister' }"
        >Doctor Recommendation</router-link
      >
    </div>
    <router-view :event="GStore.event" />
  </div>
</template>
<script>
// import EventService from '@/services/EventService.js'
export default {
  //   props: ['id'],
  //   data() {
  //     return {
  //       event: null
  //     }
  //   },
  //   created() {
  //     EventService.getEvent(this.id)
  //       .then((response) => {
  //         this.event = response.data
  //       })
  //       .catch((error) => {
  //         if (error.response && error.response.status == 404) {
  //           this.$router.push({
  //             name: '404Resource',
  //             params: { resource: 'event' }
  //           })
  //         } else {
  //           this.$router.push({ name: 'NetworkError' })
  //         }
  //       })
  //   }
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
</style>
