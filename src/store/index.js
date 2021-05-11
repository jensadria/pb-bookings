import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  tableTypes: [
    { nr: 1, game: 'Snooker' },
    { nr: 2, game: 'Snooker' },
    { nr: 3, game: 'Snooker' },
    { nr: 4, game: 'Snooker' },
    { nr: 5, game: 'Snooker' },
    { nr: 10, game: 'Pool' },
    { nr: 11, game: 'Pool' },
    { nr: 12, game: 'Pool' },
    { nr: 13, game: 'Pool' },
    { nr: 14, game: 'Pool' },
    { nr: 15, game: 'Pool' },
    { nr: 16, game: 'Pool' },
    { nr: 17, game: 'Pool' },
    { nr: 18, game: 'Pool' },
    { nr: 19, game: 'Pool' },
    { nr: 20, game: 'Pool' },
    { nr: 21, game: 'Pool' },
    { nr: 22, game: 'Pool' },
    { nr: 23, game: 'Pool' },
  ],
  timePicker: [
    '10:00',
    '10:15',
    '10:30',
    '10:45',
    '11:00',
    '11:15',
    '11:30',
    '11:45',
    '12:00',
    '12:15',
    '12:30',
    '12:45',
    '13:00',
  ],
  bookings: [
    {
      id: 1,
      name: 'Jens',
      date: new Date().toISOString().substr(0, 10),
      start_time: '10:00',
      end_time: null,
      table: ['2'],
      comments: null,
    },
    {
      id: 2,
      name: 'Gary',
      date: new Date().toISOString().substr(0, 10),
      start_time: '10:00',
      end_time: '13:00',
      table: ['1'],
      comments: null,
    },
    {
      id: 3,
      name: 'Ben',
      date: '2021-04-20',
      start_time: '13:00',
      end_time: null,

      table: ['1'],
      comments: null,
    },
    {
      id: 4,
      name: 'Baz',
      date: new Date().toISOString().substr(0, 10),
      start_time: new Date().toISOString().substr(11, 5),
      end_time: null,
      table: ['4'],
      comments: null,
    },
    {
      id: 4,
      name: 'John',
      date: '2021-04-20',
      start_time: '13:00',
      end_time: null,
      table: ['5'],
      comments: null,
    },
    {
      id: 4,
      name: 'McMuffin',
      date: '2021-04-20',
      start_time: '20:00',
      end_time: null,
      table: ['20'],
      comments: null,
    },
    {
      id: 7,
      name: 'McMuffin',
      date: '2021-04-21',
      start_time: '13:00',
      end_time: null,
      table: ['1'],
      comments: null,
    },
    {
      id: 7,
      name: 'Shawarsha',
      date: '2021-04-21',
      start_time: '13:00',
      end_time: null,
      table: ['18'],
      comments: null,
    },
  ],
};

const getters = {
  getBookings(state) {
    return state.tableTypes;
  },
};

export default new Vuex.Store({
  state,
  getters,
});
