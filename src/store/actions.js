import firebase from 'firebase';
import 'firebase/database';

export default {
  addBooking(context, payload) {
    const booking = {
      date: payload.date,
      name: payload.name,
      phoneNr: payload.phoneNr,
      startTime: payload.startTime,
      endTime: payload.endTime,
      table: payload.table,
    };

    firebase
      .database()
      .ref('bookings')
      .push(booking);

    context.commit('addBooking', booking);
  },
};
