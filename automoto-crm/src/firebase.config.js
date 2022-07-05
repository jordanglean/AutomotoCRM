// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCy_vvHp8IWSQkj0zGZG7AxlUZ6dSRJLHQ",
  authDomain: "automoto-crm.firebaseapp.com",
  projectId: "automoto-crm",
  storageBucket: "automoto-crm.appspot.com",
  messagingSenderId: "7568394780",
  appId: "1:7568394780:web:75ce5b41b94ff750ce2dd9",
  measurementId: "G-EHFPMXBPJQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
