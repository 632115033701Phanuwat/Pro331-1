<template>
  <h1 class="color">Vaccine Detail</h1>
  <div class="events">
    <EventCard
      class="event"
      v-for="event in events"
      :key="event.id"
      :event="event"
    ></EventCard>

    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'EventList', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
      >
        Prev Page
      </router-link>

      <router-link
        id="page-next"
        :to="{ name: 'EventList', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
      >
        Next Page
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
//import { watchEffect } from '@vue/runtime-core'
export default {
  name: 'EventListView',
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  components: {
    EventCard
  },
  data() {
    return {
      events: null,
      totalEvents: 0
    }
  },
  // created() {
  //   watchEffect(() => {
  //     EventService.getEvents(2, this.page)
  //       .then((response) => {
  //         this.events = response.data
  //         this.totalEvents = response.headers['x-total-count']
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       })
  //eslint-disable-next-line no-unused-vars
  beforeRouteEnter(routeTo, routeFrom, next) {
    EventService.getEvents(3, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        next((comp) => {
          comp.events = response.data
          comp.totalEvents = response.headers['x-total-count']
        })
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    EventService.getEvents(3, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        this.events = response.data
        this.totalEvents = response.headers['x-total-count']
        next()
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
  computed: {
    hasNextPage() {
      let totalPages = Math.ceil(this.totalEvents / 3)
      return this.page < totalPages
    }
  }
}
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* display: inline-block; */
}
.pagination {
  /* text-align: right; */
  display: flex;
  width: 830px;
  font-size: 25px;
  border: 1px #39495c;
  /* margin-bottom: 18px; */
  /* background-color: rgb(245, 252, 251); */
  border-radius: 25px;
}

.pagination a {
  flex: 1;
  /* display: flex; */
  text-decoration: none;
  color: #000000;
  /* border: 1px #39495c;
  margin-bottom: 18px;
  background-color: rgb(245, 252, 251); */
  /* border-radius: 25px; */
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
.event {
  display: inline-block;
}

.color {
  padding: 10px;
  width: 400px;
  margin: -40px 0 0 550px;
  background-color: none;
  border-radius: 25px;
  background-color: #9fe2bf;
  color: #fff;
}
</style>
