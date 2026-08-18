// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZQ5sYfmpXXN7jYKa_uYKMTXgupTrAjxQ",
  authDomain: "netflixgpt-10772.firebaseapp.com",
  projectId: "netflixgpt-10772",
  storageBucket: "netflixgpt-10772.firebasestorage.app",
  messagingSenderId: "34577218809",
  appId: "1:34577218809:web:6b060ce9704e7bdc24f628",
  measurementId: "G-YMXC7R6K1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();