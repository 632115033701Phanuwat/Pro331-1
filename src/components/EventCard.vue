<template>
  <router-link
    class="event-link"
    :to="{ name: 'EventDetails', params: { id: event.id } }"
  >
    <div class="event-card">
      <h1>{{ event.title }}</h1>
      <span>Have vaccine : {{ event.NumberOfVaccine }}</span>
    </div>
  </router-link>
</template>
<script>
export default {
  name: 'EventCard',
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #000000;
  margin: 35px 0 0 0;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 20px 10px 20px 10px rgba(10, 10, 10, 0.2);
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
