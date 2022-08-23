<template>
  <div id="vaccine-box">
    <p v-if="event.vaccine[0] != null" class="vaccine">
      Vaccine: {{ event.vaccine[0] }} Date: {{ event.date[0] }} Time:
      {{ event.time[0] }}
    </p>
    <p v-if="event.vaccine[1] != null" class="vaccine1">
      Vaccine: {{ event.vaccine[1] }} Date: {{ event.date[1] }} Time:
      {{ event.time[1] }}
    </p>
    <p v-if="event.vaccine[2] != null" class="vaccine2">
      Vaccine: {{ event.vaccine[2] }} Date: {{ event.date[2] }} Time:
      {{ event.time[2] }}
    </p>
    <p v-if="event.vaccine[3] != null" class="vaccine3">
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
<style>
.vaccine {
  padding: 20px;
  /* border: 1px solid #39495c; */
  margin-bottom: 18px;
}
.vaccine1 {
  padding: 20px;
  /* border: 1px solid #39495c; */
  margin-bottom: 18px;
}
.vaccine2 {
  padding: 20px;
  /* border: 1px solid #39495c; */
  margin-bottom: 18px;
}
.vaccine3 {
  padding: 20px;
  /* border: 1px solid #39495c; */
  margin-bottom: 18px;
}
p {
  color: rgb(255, 255, 255);
  margin: 0 auto;
  background-color: rgb(229, 143, 143);
  border-radius: 35px;
  height: 40px;
  width: 550px;
}
</style>
