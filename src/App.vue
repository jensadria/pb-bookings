<template>
  <v-app>
    <v-container class="mx-5 pa-3 d-flex">
      <v-card class="mx-3 pa-5" max-width="370">
        <v-date-picker
          v-model="picker"
          class="ma-5"
          elevation="5"
        ></v-date-picker>
        <v-divider></v-divider>
        <form action="submit">
          <v-text-field label="Name" hide-details="auto"></v-text-field>
          <v-text-field
            v-model="phoneNr"
            label="Phone Number"
            required
          ></v-text-field>
          <!-- START TIME PICKER -->
          {{ startTime }}
          <v-menu
            ref="menu"
            v-model="menu1"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="time"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="startTime"
                label="Start Time"
                prepend-icon="mdi-clock-time-four-outline"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="menu1"
              v-model="startTime"
              full-width
              @click:minute="$refs.menu.save(time)"
            ></v-time-picker>
          </v-menu>
          <!-- END TIME PICKER -->
          <v-menu
            ref="menu"
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="time"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="endTime"
                label="End Time"
                prepend-icon="mdi-clock-time-four-outline"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="menu2"
              v-model="endTime"
              full-width
              @click:minute="$refs.menu.save(time)"
            ></v-time-picker>
          </v-menu>
          <div>
            <p>Snooker</p>
            <v-btn-toggle
              class="mb-3"
              v-model="tableNr"
              tile
              color="deep-blue accent-3"
              multiple
            >
              <v-btn value="1">1</v-btn>
              <v-btn value="2">2</v-btn>
              <v-btn value="3">3</v-btn>
              <v-btn value="4">4</v-btn>
              <v-btn value="5">5</v-btn>
            </v-btn-toggle>
            <p>Pool</p>
            <v-btn-toggle
              class="flex-wrap mb-3"
              v-model="tableNr"
              tile
              color="deep-blue accent-3"
              multiple
            >
              <v-btn value="6">6</v-btn>
              <v-btn value="8">8</v-btn>
              <v-btn value="9">9</v-btn>
              <v-btn value="10">10</v-btn>
              <v-btn value="11">11</v-btn>
              <v-btn value="12">15</v-btn>
              <v-btn value="13">16</v-btn>
              <v-btn value="17">17</v-btn>
              <v-btn value="18">18</v-btn>
              <v-btn value="19">19</v-btn>
              <v-btn value="20">20</v-btn>
              <v-btn value="21">21</v-btn>
              <v-btn value="22">22</v-btn>
              <v-btn value="23">23</v-btn>
            </v-btn-toggle>
          </div>
        </form>
        <v-card-actions
          ><v-btn elevation="2" rounded>New Booking</v-btn></v-card-actions
        >
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
    tableNr: [],
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    startTime: null,
    endTime: null,
    menu1: false,
    menu2: false,
  }),
  computed: {
    formattedDate() {
      let todaysDate = format(
        new Date(this.picker.split('-').join(',')),
        'EEEE, LLLL d'
      );
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

    bookings() {
      return this.$store.state.bookings;
    },

    timePicker() {
      return this.$store.state.timePicker;
    },
  },
};
</script>

<style scoped>
.v-button-toggle {
  flex-wrap: wrap;
}
</style>
