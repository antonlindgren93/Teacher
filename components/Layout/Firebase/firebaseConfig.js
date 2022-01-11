import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";

//Production
const firebaseConfig = {
  apiKey: "AIzaSyDshXXn0dOnrkXv_FN26-SxHhEoTNVGH7Q",
  authDomain: "techu-83d53.firebaseapp.com",
  projectId: "techu-83d53",
  storageBucket: "techu-83d53.appspot.com",
  messagingSenderId: "962697552400",
  appId: "1:962697552400:web:2fab602d686feaf97da095",
  measurementId: "G-RRCS8R086W",
};

//Development
// const firebaseConfig = {
//   apiKey: "AIzaSyC3e_KMg1ig8EkB5rqAz3dvfN3uaZVSBNI",
//   authDomain: "teachu-development.firebaseapp.com",
//   projectId: "teachu-development",
//   storageBucket: "teachu-development.appspot.com",
//   messagingSenderId: "99658910033",
//   appId: "1:99658910033:web:e1d60c17d175ecc430eb70"
// };

export default firebaseConfig

