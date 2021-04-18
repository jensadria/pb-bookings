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
      <v-col cols="5" class="flex-grow-1">
        <v-card>
          <v-card-title> Bookings for {{ picker }} </v-card-title>
          <tables-booked
            v-for="table in tablesBooked"
            :key="table.indexOf()"
          ></tables-booked>
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
    bookings: [
      {
        id: 1,
        name: 'Jens',
        date: new Date().toISOString().substr(0, 10),
        start_time: new Date().getTime(),
        table: ['2'],
        comments: null,
      },
      {
        id: 2,
        name: 'Gary',
        date: new Date().toISOString().substr(0, 10),
        start_time: new Date().getTime(),
        table: ['1'],
        comments: null,
      },
      {
        id: 1,
        name: 'Jens',
        date: new Date().toISOString().substr(0, 10),
        start_time: new Date().getTime(),
        table: ['1'],
        comments: null,
      },
    ],
  }),
  computed: {
    tablesBooked() {
      let arrayOfbookedTables = this.bookings
        .map((booking) => booking.table)
        .sort((a, b) => a - b)
        .flat();

      return [...new Set(arrayOfbookedTables)];
    },
  },
};
</script>
