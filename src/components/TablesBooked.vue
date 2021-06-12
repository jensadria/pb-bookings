<template>
  <!-- <v-col :cols="flex"> -->
  <v-card elevation="5" class="ma-2 mb-6 d-flex test">
    <v-card class="pa-2 red darken-2 white--text" min-width="10%" height="auto">
      <span class="text-h3 font-weight-bold">{{ table }}</span>
      {{ gameType }}
    </v-card>
    <div class="bookings blue lighten-4 pt-1">
      <v-card
        v-for="booking in todaysBookingsForTable"
        :key="booking.id"
        class="d-flex mb-1 mx-1 "
        width="auto"
        elevation="2"
        ><div class="pa-2 booking-name font-weight-black ">
          {{ booking.name }}
        </div>
        <div class="pa-2 booking-time font-weight-black">
          {{ booking.startTime }} {{ booking.endTime ? '-' : '' }}
          {{ booking.endTime }}
        </div>

        <div class="pa-2 booking-phone">{{ booking.phoneNr }}</div>
        <div class="pa-2 booking-comments font-italic">
          {{ booking.comments }}
        </div>
        <edit-dialog :booking="booking" class="edit-button"></edit-dialog>
      </v-card>
    </div>
  </v-card>

  <!-- <v-card-title class="red darken-2 white--text pa-1"
      >Table {{ table }} - {{ gameType }}</v-card-title
    >
    <v-card
      elevation="2"
      class="pa-3 ma-3 blue lighten-4"
      v-for="booking in todaysBookingsForTable"
      :key="booking.id"
      height="auto"
    >
      <div class="flex d-flex">
        <div class="flex-grow-1 font-weight-bold">
          {{ booking.name }}
        </div>
        <div>
          {{ booking.startTime }} {{ booking.endTime ? '-' : '' }}
          {{ booking.endTime }}
        </div>

        <edit-dialog :booking="booking"></edit-dialog>
      </div>
      <div v-if="booking.comments">
        <v-divider class="my-2"></v-divider>
        <div class="font-italic">{{ booking.comments }}</div>
      </div>
    </v-card> -->
  <!-- </v-col> -->
</template>

<script>
import EditDialog from '../components/EditDialog.vue';

export default {
  components: { EditDialog },
  props: ['table', 'bookings', 'today'],

  computed: {
    todaysBookingsForTable() {
      return this.bookings
        .filter((booking) => booking.date === this.today)
        .filter((booking) => booking.table.includes(this.table))
        .sort((a, b) => a.startTime - b.startTime);
    },
    gameType() {
      const tableTypes = this.$store.state.tableTypes;
      const table = tableTypes.find((x) => parseInt(x.nr) == this.table);

      return table.game;
    },
  },
};
</script>

<style scoped>
.edit-booking {
  cursor: pointer;
}
.edit-booking:hover {
  cursor: pointer;
  color: rgb(25, 118, 210);
}

.bookings {
  display: flex;
  flex-direction: column;
  /* align-items: top; */
  justify-content: space-evenly;
  width: 100%;
}

.booking-name,
.booking-time,
.booking-phone {
  flex: 1;
}

.booking-comments {
  flex: 4;
}

.edit-button {
  flex: 0.3;
  display: flex;
  align-items: center;
}
</style>
