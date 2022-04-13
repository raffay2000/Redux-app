
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore/lite";
  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDlIMv7k9bgLY7T5Jqc6DH4_7r3z5qF-D8",
  authDomain: "fire-base-auth-5360b.firebaseapp.com",
  projectId: "fire-base-auth-5360b",
  storageBucket: "fire-base-auth-5360b.appspot.com",
  messagingSenderId: "915222387015",
  appId: "1:915222387015:web:4f8eb62d19d1b319891462"
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app)
export const db = getFirestore(app)
