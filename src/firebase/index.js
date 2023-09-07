// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD5Kj0SIjSX3_cuYn35r3nTg2DySUkJ6RU",
    authDomain: "e-clinic-6139c.firebaseapp.com",
    projectId: "e-clinic-6139c",
    storageBucket: "e-clinic-6139c.appspot.com",
    messagingSenderId: "351608813768",
    appId: "1:351608813768:web:f43d641806282f518d4dfd",
    measurementId: "G-RLWRHCRRN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);