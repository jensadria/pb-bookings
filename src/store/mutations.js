export default {
  addBooking(state, payload) {
    state.bookings.push(payload);
  },
  loadBookings(state, payload) {
    payload.forEach((booking) => {
      state.bookings.push(booking);
    });
  },
};
