<template>
  <div>
    <v-row v-for="(table, index) in tableNrs" :key="table[index]">
      {{ table.nr }}
    </v-row>
  </div>
</template>

<script>
export default {
  computed: {
    tableNrs() {
      return this.$store.state.tables;
    },
  },
};
</script>

<style></style>
