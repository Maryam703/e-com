import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDMuzwBbm6tRWzcVFOf8Zi0UzRCY1XuvyE",
  authDomain: "ecommerce-db58f.firebaseapp.com",
  projectId: "ecommerce-db58f",
  storageBucket: "ecommerce-db58f.appspot.com",
  messagingSenderId: "854503331974",
  appId: "1:854503331974:web:a161653b1af6761eb75907",
  measurementId: "G-ZH4RXC6Q8M"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);