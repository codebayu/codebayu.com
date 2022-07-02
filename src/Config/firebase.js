import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBiQlnrIndBvRrTKGFWaIP35ApoT_w4nH4",
  authDomain: "portfolio-efd48.firebaseapp.com",
  projectId: "portfolio-efd48",
  storageBucket: "portfolio-efd48.appspot.com",
  messagingSenderId: "940155261720",
  appId: "1:940155261720:web:013d66d88912001238446d",
  measurementId: "G-HX2V9VBWRR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);