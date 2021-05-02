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
          <v-btn-toggle
            v-model="chooseGame"
            tile
            color="deep-purple accent-3"
            group
          >
            <v-btn value="Snooker">
              Snooker
            </v-btn>
            <v-btn value="Pool">
              Pool
            </v-btn>
            <v-btn value="APool">
              A. Pool
            </v-btn>
          </v-btn-toggle>
          <div v-if="chooseGame === 'Snooker'">
            <v-btn-toggle
              v-model="tableNr"
              tile
              color="deep-purple accent-3"
              multiple
            >
              <v-btn value="1">
                1
              </v-btn>
              <v-btn value="2">
                2
              </v-btn>
              <v-btn value="3">
                3
              </v-btn>
              <v-btn value="4">
                4
              </v-btn>
              <v-btn value="5">
                5
              </v-btn>
            </v-btn-toggle>
          </div>
        </form>
        <v-card-actions
          ><v-btn elevation="2" rounded>New Booking</v-btn></v-card-actions
        >
        <v-date-picker
          v-model="picker"
          class="ma-5"
          elevation="5"
        ></v-date-picker>
      </v-card>

      <v-card class="mx-3 flex-grow-1">
        <v-card-title> Bookings for {{ formattedDate }} </v-card-title>
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
    </v-container>
  </v-app>
</template>

<script>
import { format } from 'date-fns';

import TablesBooked from './components/TablesBooked.vue';

export default {
  name: 'App',
  components: { TablesBooked },
  data: () => ({
    picker: new Date().toISOString().substr(0, 10),
    name: '',
    phoneNr: '',
    chooseGame: null,
    tableNr: null,
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
  }),
  computed: {
    formattedDate() {
      let todaysDate = format(new Date(), 'LLLL d');
      return todaysDate;
    },
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
