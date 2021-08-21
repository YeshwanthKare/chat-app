import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAZJbmDEIgEkFto2joQHxqU3W_2qD6A2WE',
  authDomain: 'chat-web-app-b8ae4.firebaseapp.com',
  projectId: 'chat-web-app-b8ae4',
  storageBucket: 'chat-web-app-b8ae4.appspot.com',
  messagingSenderId: '225521533724',
  appId: '1:225521533724:web:41d3c279c2931eb9c370d9',
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const database = app.database();
