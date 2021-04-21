import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  tables: [
    { nr: 1, game: 'snooker' },
    { nr: 2, game: 'snooker' },
    { nr: 3, game: 'snooker' },
    { nr: 4, game: 'snooker' },
    { nr: 5, game: 'snooker' },
    { nr: 10, game: 'pool' },
    { nr: 11, game: 'pool' },
    { nr: 12, game: 'pool' },
    { nr: 13, game: 'pool' },
    { nr: 14, game: 'pool' },
    { nr: 15, game: 'pool' },
    { nr: 16, game: 'pool' },
    { nr: 17, game: 'pool' },
    { nr: 18, game: 'pool' },
    { nr: 19, game: 'pool' },
    { nr: 20, game: 'pool' },
    { nr: 21, game: 'pool' },
    { nr: 22, game: 'pool' },
    { nr: 23, game: 'pool' },
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
      start_time: new Date().toISOString().substr(11, 5),
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

export default new Vuex.Store({
  state,
});
