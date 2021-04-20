<template>
  <v-app>
    <v-row class="mx-5 pa-5 d-flex">
      <v-col cols="3">
        <v-card>
          <v-card-actions
            ><v-btn elevation="2" rounded>New Booking</v-btn></v-card-actions
          >

          <v-row justify="left">
            <v-date-picker v-model="picker" class="ma-5"></v-date-picker>
          </v-row>
        </v-card>
      </v-col>
      <v-col class="flex-grow-1">
        <v-card>
          <v-card-title> Bookings for {{ picker }} </v-card-title>
          <v-row>
            <tables-booked
              class="flex pa-2"
              v-for="table in tablesBooked"
              :key="table"
              :table="table"
              :bookings="bookings"
              :today="picker"
            ></tables-booked>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import TablesBooked from './components/TablesBooked.vue';

export default {
  name: 'App',
  components: { TablesBooked },
  data: () => ({
    picker: new Date().toISOString().substr(0, 10),
  }),
  computed: {
    tablesBooked() {
      let arrayOfbookedTables = this.bookings
        .filter((booking) => booking.date === this.picker)
        .map((booking) => booking.table)
        .sort((a, b) => a - b)
        .flat();

      return [...new Set(arrayOfbookedTables)];
    },
    test() {
      return this.$store.state.test;
    },
    bookings() {
      return this.$store.state.bookings;
    },
  },
};
</script>
