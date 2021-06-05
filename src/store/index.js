import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import getters from './getters.js';
import actions from './actions.js';
import mutations from './mutations.js';

const state = {
  picker: new Date().toISOString().substr(0, 10),
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
  bookings: [],
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
