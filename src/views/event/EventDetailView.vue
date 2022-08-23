<template>
  <div v-if="event">
    <h1>Name :{{ event.title }}</h1>
    <p>Age :{{ event.age }}</p>
    <p>Home :{{ event.location }}</p>
    <p>have vaccine :{{ event.NumberOfVaccine }}</p>
    <!-- <p>{{ event.description }}</p> -->
  </div>
</template>

<script>
import EventService from '@/services/EventService.js'

export default {
  props: ['id'],
  data() {
    return {
      event: null
    }
  },
  created() {
    // fetch event (by id) and set local event data
    EventService.getEvent(this.id)
      .then((response) => {
        this.event = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
