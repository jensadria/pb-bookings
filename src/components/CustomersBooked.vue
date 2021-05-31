<template
  ><v-card
    elevation="5"
    class="pb-1 ma-2"
    max-width="250px"
    min-width="250px"
    height="fit-content"
  >
    <div v-for="booking in todaysBookingsForCustomers" :key="booking.id">
      <v-card-title class="red darken-2 white--text pa-1"
        >{{ customer }} - {{ booking.startTime }}
        {{ booking.endTime ? '-' : '' }} {{ booking.endTime }}</v-card-title
      >
      <v-card elevation="2" class="pa-3 ma-3 blue lighten-4" height="auto">
        <div>
          <div></div>
          Tables:
          <span v-for="table in booking.table" :key="table">{{ table }}</span>
          <edit-dialog :booking="booking"></edit-dialog>
        </div>
        <div v-if="booking.comments">
          <v-divider class="my-2"></v-divider>
          <div class="font-italic">{{ booking.comments }}</div>
        </div>
      </v-card>
    </div></v-card
  >
</template>

<script>
export default {
  props: ['customer', 'bookings', 'today'],
  computed: {
    todaysBookingsForCustomers() {
      return this.bookings
        .filter((booking) => booking.date === this.today)
        .filter((booking) => booking.name === this.customer)
        .sort((a, b) => a.start_time - b.start_time);
    },
  },
};
</script>

<style></style>
