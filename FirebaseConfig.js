// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACUWRGrpQ3CV0IxKr4kJpatgspECcd7Ws",
  authDomain: "otobotox-storage.firebaseapp.com",
  projectId: "otobotox-storage",
  storageBucket: "otobotox-storage.appspot.com",
  messagingSenderId: "117492513215",
  appId: "1:117492513215:web:678383577dfb539962c90a",
  measurementId: "G-LRGHPZD62J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);