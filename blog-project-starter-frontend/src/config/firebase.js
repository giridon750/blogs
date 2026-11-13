
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAxgtIYYYUQXRK8YH6fGFkyAb-NyWe9dOo",
  authDomain: "blog-app-d1059.firebaseapp.com",
  projectId: "blog-app-d1059",
  storageBucket: "blog-app-d1059.firebasestorage.app",
  messagingSenderId: "398200211449",
  appId: "1:398200211449:web:f98c074dffbac0438a9f28",
  measurementId: "G-01Z42E4TWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)


export default auth