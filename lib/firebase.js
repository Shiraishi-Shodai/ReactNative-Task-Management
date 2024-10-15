// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "@firebase/database";
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3PUrDna886qU8OarTaTrXHNkNdw0Hi9I",
  authDomain: "tutorial-3d280.firebaseapp.com",
  databaseURL: "https://tutorial-3d280-default-rtdb.firebaseio.com",
  projectId: "tutorial-3d280",
  storageBucket: "tutorial-3d280.appspot.com",
  messagingSenderId: "332801672964",
  appId: "1:332801672964:web:62a5f9641cf258c9d73251",
  measurementId: "G-X5EL2LRZ08",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
// const analytics = getAnalytics(app);
