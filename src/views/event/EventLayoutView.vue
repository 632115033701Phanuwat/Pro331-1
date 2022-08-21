<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'EventDetails', params: { id } }"
        >Details</router-link
      >
      |
      <router-link :to="{ name: 'EventVaccineDetail', params: { id } }"
        >Vaccine</router-link
      >
      |
      <router-link :to="{ name: 'EventComment', params: { id } }"
        >Comment</router-link
      >
      |
    </div>
    <!-- <h1>{{ air.id }}</h1> -->
    <router-view :event="event" :air="air" />
  </div>
</template>
<script>
import EventService from '@/services/EventService.js'
export default {
  props: ['id'],
  data() {
    return {
      event: null,
      air: null
    }
  },
  created() {
    EventService.getEvent(this.id)
      .then((response) => {
        this.event = response.data
      })
      .catch((error) => {
        if (error.response && error.response.status == 404) {
          this.$router.push({
            name: '404Resource',
            params: { resource: 'event' }
          })
        } else {
          this.$router.push({ name: 'NetworkError' })
        }
      })
    EventService.getEventAir(this.id)
      .then((response) => {
        this.air = response.data
      })
      .catch((error) => {
        if (error.response && error.response.status == 404) {
          this.$router.push({
            name: '404Resource',
            params: { resource: 'air' }
          })
        } else {
          this.$router.push({ name: 'NetworkError' })
        }
      })
  }
}
</script>
