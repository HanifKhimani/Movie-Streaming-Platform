// TODO: MAKE YOUR FIREBASE ACCOUNT AND CREATE YOUR APPLICATION AND GENERATE SKD WHICH IS LOOK LIKE BELOW


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "DUMMY_API_KEY",
  authDomain: "DUMMY_AUTH_DOMAIN",
  projectId: "DUMMY_PROJECT_ID",
  storageBucket: "DUMMY_STORAGE_BUCKET",
  messagingSenderId: "DUMMY_MESSAGE_SENDER_ID",
  appId: "DUMMY_APP_ID",
  measurementId: "DUMMY_MEASUREMENT_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
