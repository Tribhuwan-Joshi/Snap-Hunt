import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDZphjUHRFFrgP46ieL63zoscrHvkIagx4",
  authDomain: "snaphunt6969.firebaseapp.com",
  projectId: "snaphunt6969",
  storageBucket: "snaphunt6969.appspot.com",
  messagingSenderId: "350730597266",
  appId: "1:350730597266:web:58488da2a774a92169074b",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
