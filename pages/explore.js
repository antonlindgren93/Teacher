import React, { useState, useEffect } from "react";
import SearchBar from "../components/Layout/SearchBar";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import Header from "../components/Layout/Header";
import { getAuth, onAuthStateChanged } from "@firebase/auth";

const Explore = () => {
  //const userRef = collection(db, "users");
  //const [user, setUser] = useState(null);
  const [userEmail, setUserEmail] = useState("");

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(auth.currentUser.email);
      } else {
        setUserEmail(null);
      }
    });
  }, []);

  const fetchData = () => {};
  return (
    <div>
      <Header />
      {/* <input placeholder="Push data.." onChange={}/> */}
      <button>Upload data </button>
      <h1>{userEmail}</h1>
      <h1>{userEmail}</h1>
      <h1>{userEmail}</h1>
      <h1>{userEmail}</h1>
      <h1>{userEmail}</h1>
      <h1>{userEmail}</h1>
      <h1>Hello from explore</h1>
      <h1>Hello from explore</h1>
      <h1>Hello from explore</h1>
      <h1>Hello from explore</h1>

      <button onClick={fetchData}>Fetch data </button>
    </div>
  );
};

export default Explore;
