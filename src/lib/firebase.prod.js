/* eslint-disable no-undef */
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// eslint-disable-next-line no-unused-vars
import { seedDatabase } from '../seed';
console.log(process.env.REACT_APP_APIKEY)
const config = {
  apiKey:"AIzaSyBBAU7NFHlnkP3nLZp_jSneCCztxkNCLq4",
  authDomain: "bingify-2.firebaseapp.com",
  projectId: "bingify-2",
  storageBucket: "bingify-2.appspot.com",
  messagingSenderId: "933801777891",
  appId: "1:933801777891:web:1d77d386648c2e98ef03d6"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };