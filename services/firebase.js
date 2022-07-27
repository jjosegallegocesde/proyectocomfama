// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcKLlz68Yqkqzm_r10UAh8IZM9AK458rE",
  authDomain: "logincomfamajjg.firebaseapp.com",
  projectId: "logincomfamajjg",
  storageBucket: "logincomfamajjg.appspot.com",
  messagingSenderId: "194425060008",
  appId: "1:194425060008:web:c80eb7995949879337609d",
  measurementId: "G-2WR1LZDLNF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);