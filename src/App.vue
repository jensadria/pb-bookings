<template>
  <v-app>
    <v-container class="mx-5 pa-5 d-flex">
      <v-card class="mx-3 pa-5">
        <form action="submit">
          <v-text-field label="Name" hide-details="auto"></v-text-field>
          <v-text-field
            v-model="phoneNr"
            label="Phone Number"
            required
          ></v-text-field>
        </form>
        <v-card-actions
          ><v-btn elevation="2" rounded>New Booking</v-btn></v-card-actions
        >
        <v-date-picker v-model="picker" class="ma-5"></v-date-picker>
      </v-card>

      <v-card class="mx-3 flex-grow-1">
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
      <calendar></calendar>
    </v-container>
  </v-app>
</template>

<script>
import TablesBooked from './components/TablesBooked.vue';

export default {
  name: 'App',
  components: { TablesBooked },
  data: () => ({
    picker: new Date().toISOString().substr(0, 10),
    name: '',
    phoneNr: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
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
