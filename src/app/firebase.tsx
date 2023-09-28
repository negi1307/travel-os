// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAhaexAkA1Gqbh-JGjU9lhi6mt6dPaBtU8',
  authDomain: 'travel-d100c.firebaseapp.com',
  projectId: 'travel-d100c',
  storageBucket: 'travel-d100c.appspot.com',
  messagingSenderId: '931983259896',
  appId: '1:931983259896:web:11439534ba1484f504630d',
  measurementId: 'G-S5E8L41PPT',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
