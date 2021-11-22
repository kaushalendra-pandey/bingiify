/* eslint-disable no-undef */
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// eslint-disable-next-line no-unused-vars
import { seedDatabase } from '../seed';
console.log(process.env.REACT_APP_APIKEY)
const config = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };