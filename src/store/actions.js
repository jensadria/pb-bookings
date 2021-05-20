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
      comments: payload.comments,
    };

    firebase
      .database()
      .ref('bookings')
      .push(booking)
      .then((data) => {
        const key = data.key;
        context.commit('addBooking', { ...booking, id: key });
      })
      .catch((error) => console.log(error));
  },
  loadBookings(context) {
    firebase
      .database()
      .ref('bookings')
      .once('value')
      .then((data) => {
        const bookings = [];
        const obj = data.val();
        for (let key in obj) {
          bookings.push({
            id: key,
            date: obj[key].date,
            name: obj[key].name,
            phoneNr: obj[key].phoneNr,
            startTime: obj[key].startTime,
            endTime: obj[key].endTime,
            table: obj[key].table,
            comments: obj[key].comments,
          });
        }
        console.log(bookings);
        context.commit('loadBookings', bookings);
      })
      .catch((error) => console.log(error));
  },
};
