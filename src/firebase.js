import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6JICAXP8Furv5oEN_wMkzDz5ank3kPtA",
  authDomain: "address-d7913.firebaseapp.com",
  projectId: "address-d7913",
  storageBucket: "address-d7913.firebasestorage.app",
  messagingSenderId: "104662974237",
  appId: "1:104662974237:web:27f993ffc27a66ed03ebf4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

