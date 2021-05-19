<template>
  <v-app>
    <v-container class="mx-5 pa-3 d-flex">
      <v-card class="mx-3 pa-3" max-width="350">
        <v-date-picker
          v-model="picker"
          class="ma-5"
          elevation="5"
        ></v-date-picker>
        <v-divider></v-divider>
        <form action="submit">
          <v-text-field v-model="name" label="Name" required></v-text-field>
          <v-text-field v-model="phoneNr" label="Phone Number"></v-text-field>
          <!-- START TIME PICKER -->
          <v-row>
            <v-col>
              <v-select
                :items="times"
                label="Start Time"
                filled
                v-model="startTime"
              ></v-select>
            </v-col>
            <v-col>
              <v-select
                :items="times"
                label="End Time"
                filled
                v-model="endTime"
              ></v-select>
            </v-col>
          </v-row>
          <!-- END TIME PICKER -->

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
              <v-btn value="5">Any</v-btn>
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
              <v-btn value="12">12</v-btn>
              <v-btn value="13">13</v-btn>
              <v-btn value="14">14</v-btn>
              <v-btn value="15">15</v-btn>
              <v-btn value="16">16</v-btn>
              <v-btn value="17">17</v-btn>
              <v-btn value="18">18</v-btn>
              <v-btn value="19">19</v-btn>
              <v-btn value="20">20</v-btn>
              <v-btn value="21">21</v-btn>
              <v-btn value="22">22</v-btn>
              <v-btn value="23">23</v-btn>
              <v-btn value="Any">Any</v-btn>
            </v-btn-toggle>
          </div>
          <v-textarea
            name="comments"
            label="Comments"
            rows="2"
            no-resize
            filled
            v-model="comments"
          ></v-textarea>
          <v-alert type="error" v-if="!formIsValid"
            >Please enter at least Name, Start Time and one Table</v-alert
          >
          <v-card-actions
            ><v-btn elevation="2" rounded @click="addBooking"
              >New Booking</v-btn
            ></v-card-actions
          >
        </form>
      </v-card>

      <v-card class="mx-3 flex-grow-1">
        <v-card-title> Bookings for {{ formattedDate }} </v-card-title>
        <v-row>
          <tables-booked
            class="flex pa-2 mx-3"
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
    tableNr: [],
    startTime: '',
    endTime: '',
    comments: '',
    formIsValid: true,
  }),
  computed: {
    formattedDate() {
      let todaysDate = new Date(this.picker.split('-').join(','));

      return format(todaysDate, 'EEEE, LLLL d');
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
      return this.$store.getters.getBookings;
    },
    times() {
      return this.$store.getters.getTimes;
    },
  },
  methods: {
    clearValidity() {
      this.formIsValid = true;
    },
    validateForm() {
      this.formIsValid = true;

      if (this.name === '') this.formIsValid = false;
      if (this.startTime === '' || this.startTime === 'None')
        this.formIsValid = false;
      if (this.tableNr.length == 0) this.formIsValid = false;
    },
    addBooking() {
      this.validateForm();

      if (!this.formIsValid) {
        setTimeout(this.clearValidity, 3000);
        return;
      }

      const newBooking = {
        date: this.picker,
        name: this.name,
        phoneNr: this.phoneNr,
        startTime: this.startTime,
        endTime: this.endTime,
        table: this.tableNr,
      };
      console.log(newBooking);

      this.$store.dispatch('addBooking', newBooking);
    },
  },
  created() {
    this.$store.dispatch('loadBookings');
  },
};
</script>

<style scoped>
.v-button-toggle {
  flex-wrap: wrap;
}
</style>
