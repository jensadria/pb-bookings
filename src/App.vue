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
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    picker: new Date().toISOString().substr(0, 10),
  }),
};
</script>
