<template>
  <div id="vaccine-box">
    <p v-if="event.vaccine[0] != null">
      Vaccine: {{ event.vaccine[0] }} Date: {{ event.date[0] }} Time:
      {{ event.time[0] }}
    </p>
    <p v-if="event.vaccine[1] != null">
      Vaccine: {{ event.vaccine[1] }} Date: {{ event.date[1] }} Time:
      {{ event.time[1] }}
    </p>
    <p v-if="event.vaccine[2] != null">
      Vaccine: {{ event.vaccine[2] }} Date: {{ event.date[2] }} Time:
      {{ event.time[2] }}
    </p>
    <p v-if="event.vaccine[3] != null">
      Vaccine: {{ event.vaccine[3] }} Date: {{ event.date[3] }} Time:
      {{ event.time[3] }}
    </p>
  </div>
</template>

<script>
export default {
  props: ['id', 'event'],
  inject: ['GStore'],
  methods: {
    register() {
      this.GStore.flashMessage = 'The data has been updated' + this.event.title
      setTimeout(() => {
        this.GStore.flashMessage = ''
      }, 3000)
      this.$router.push({
        name: 'EventDetails',
        params: { id: this.event.id }
      })
    }
  }
}
</script>
