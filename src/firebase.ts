import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGZlo4yTfzN-kIK9EBkIp65yGtlf1HkRs",
  authDomain: "qr-certificate-15e98.firebaseapp.com",
  projectId: "qr-certificate-15e98",
  storageBucket: "qr-certificate-15e98.firebasestorage.app",
  messagingSenderId: "1054556890096",
  appId: "1:1054556890096:web:4c1077a9c07b58fd87b335",
  measurementId: "G-77GTYZG7HG"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
