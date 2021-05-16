import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import store from './store/index.js';
import firebase from 'firebase/app';

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: 'AIzaSyAJQmk_vatkwrU5LiWtBZalr7zBUpki4a4',
  authDomain: 'pb-bookings-d0a25.firebaseapp.com',
  databaseURL:
    'https://pb-bookings-d0a25-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'pb-bookings-d0a25',
  storageBucket: 'pb-bookings-d0a25.appspot.com',
  messagingSenderId: '664476688033',
  appId: '1:664476688033:web:1710cc295450ce08b21ae0',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  vuetify,
  store,
  render: (h) => h(App),
}).$mount('#app');
