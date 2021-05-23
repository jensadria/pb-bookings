<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-icon right v-bind="attrs" v-on="on">
          mdi-pencil-circle-outline
        </v-icon>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Edit Booking
        </v-card-title>

        <v-card-text>
          <v-text-field v-model="name"></v-text-field>
          <v-text-field v-model="phoneNr"></v-text-field>
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
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ['booking'],
  data() {
    return {
      dialog: false,
      name: this.booking.name,
      phoneNr: this.booking.phoneNr,
      tableNr: this.booking.table,
      startTime: this.booking.startTime,
      endTime: this.booking.endTime,
      comments: this.booking.comments,
    };
  },
  computed: {
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
};
</script>
