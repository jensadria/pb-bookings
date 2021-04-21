<template>
  <v-col cols="2">
    <v-card elevation="5" class="pb-1 ma-2">
      <v-card-title class="red darken-2 white--text pa-1"
        >Table {{ table }} - {{ gameType }}</v-card-title
      >
      <v-card
        elevation="2"
        class="pa-3 ma-3 blue lighten-4"
        v-for="booking in todaysBookingsForTable"
        :key="booking"
        ><div class="flex d-flex">
          <div
            class="flex-grow-1
"
          >
            {{ booking.name }}
          </div>
          <div>
            {{ booking.start_time }} {{ booking.end_time ? '-' : '' }}
            {{ booking.end_time }}
          </div>
        </div>
      </v-card>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ['table', 'bookings', 'today'],

  computed: {
    todaysBookingsForTable() {
      return this.bookings
        .filter((booking) => booking.date === this.today)
        .filter((booking) => booking.table.includes(this.table))
        .sort((a, b) => a.start_time - b.start_time);
    },
    gameType() {
      if (this.table <= 5) return 'Snooker';
      if (this.table >= 10 && this.table <= 23) return 'Pool';
      return '';
    },
  },
};
</script>

<style></style>
