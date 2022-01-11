import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const app = initializeApp(firebaseConfig);

//const analytics = getAnalytics(app);

const db = getFirestore();

const auth = getAuth(app);

const collectionRef = collection(db, "users");

getDocs(collectionRef).then((snapshot) => {
  console.log("snapshot: " + snapshot.doc);
});

export { auth, db };
