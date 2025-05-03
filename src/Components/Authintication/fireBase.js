// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//!! ⚠😁😁⚠ danger ⚠😁😁⚠!!
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6fAeyNjiH6Jr0TsejIuRi6Zi9vXjVmH0",
  authDomain: "private-route-70c46.firebaseapp.com",
  projectId: "private-route-70c46",
  storageBucket: "private-route-70c46.firebasestorage.app",
  messagingSenderId: "332335408332",
  appId: "1:332335408332:web:f1ad64989efdd6bc858e69",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
