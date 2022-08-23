<template>
  <div class="color" v-if="event">
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
<style scoped>
.color {
  padding: 10px;
  width: 700px;
  margin: 0px 0px 0px 400px;
  background-color: none;
  border-radius: 60px;
  background-color: #6979a1;
  color: #fff;
}
</style>
