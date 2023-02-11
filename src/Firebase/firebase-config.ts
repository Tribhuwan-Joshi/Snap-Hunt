import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAH1eS6whB_5jiVVX5SfGfL63n8NyiL08w",
  authDomain: "snaphunt69420.firebaseapp.com",
  projectId: "snaphunt69420",
  storageBucket: "snaphunt69420.appspot.com",
  messagingSenderId: "39722632302",
  appId: "1:39722632302:web:8f3e4d9ab5ae0776f3527f"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);