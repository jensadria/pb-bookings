<template>
  <div>
    <v-card elevation="2">
      <v-card-title class="blue lighten-2"
        ><span class="white--text">Table {{ table }}</span></v-card-title
      >
      <v-card-text>{{ todaysBookingsForTable }}</v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['table', 'bookings', 'today'],

  computed: {
    todaysBookingsForTable() {
      return this.bookings
        .filter((booking) => booking.date === this.today)
        .filter((booking) => booking.table.includes(this.table));
    },
  },
};
</script>

<style></style>
