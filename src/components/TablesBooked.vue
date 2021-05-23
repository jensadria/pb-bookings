<template>
  <!-- Standard Non-Edit Mode -->
  <v-col cols="auto" lg="3" md="6">
    <v-card elevation="5" class="pb-1 ma-2">
      <v-card-title class="red darken-2 white--text pa-1"
        >Table {{ table }} - {{ gameType }}</v-card-title
      >
      <v-card
        elevation="2"
        class="pa-3 ma-3 blue lighten-4"
        v-for="booking in todaysBookingsForTable"
        :key="booking.id"
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
      </v-card>
    </v-card>
  </v-col>
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
        .sort((a, b) => a.start_time - b.start_time);
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
</style>
