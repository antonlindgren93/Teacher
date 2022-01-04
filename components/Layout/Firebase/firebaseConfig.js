import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDshXXn0dOnrkXv_FN26-SxHhEoTNVGH7Q",
  authDomain: "techu-83d53.firebaseapp.com",
  projectId: "techu-83d53",
  storageBucket: "techu-83d53.appspot.com",
  messagingSenderId: "962697552400",
  appId: "1:962697552400:web:2fab602d686feaf97da095",
  measurementId: "G-RRCS8R086W",
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const authentication = getAuth(app);

