<template>
  <v-app>
    <v-container class="mx-5 pa-3 d-flex">
      <v-card class="mx-3 pa-3" max-width="350" elevation="4">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header
              class="text-h6 blue--text text--lighten-1"
            >
              NEW BOOKING
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <form action="submit">
                <v-text-field
                  v-model="name"
                  label="Name"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="phoneNr"
                  label="Phone Number"
                ></v-text-field>
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
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-date-picker
          v-model="picker"
          class="ma-5"
          elevation="5"
        ></v-date-picker>
      </v-card>

      <v-card class="mx-3 flex-grow-1" elevation="4">
        <v-card-title class="text-h4 ">
          Bookings for {{ formattedDate }}
        </v-card-title>
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
      const times = [];
      for (let i = 10; i <= 21; i++) {
        for (let j = 0; j < 60; j += 15) {
          // Fix the single digit zeros
          const minutes = j < 10 ? j + '0' : j;
          times.push(`${i}:${minutes}`);
        }
      }

      times.unshift('None');
      return times;
    },
  },
  methods: {
    clearValidity() {
      this.formIsValid = true;
    },
    clearForm() {
      this.name = '';
      this.phoneNr = '';
      this.tableNr = [];
      this.startTime = '';
      this.endTime = '';
      this.comments = '';
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
        setTimeout(this.clearValidity, 2000);
        return;
      }

      const newBooking = {
        date: this.picker,
        name: this.name,
        phoneNr: this.phoneNr,
        startTime: this.startTime,
        endTime: this.endTime,
        table: this.tableNr,
        comments: this.comments,
      };
      console.log(newBooking);

      this.$store.dispatch('addBooking', newBooking);

      this.clearForm();
    },
  },
  created() {
    this.$store.dispatch('loadBookings');
  },
};
</script>

<style>
.v-button-toggle {
  flex-wrap: wrap;
}
</style>
