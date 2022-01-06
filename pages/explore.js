import React, { useState, useEffect } from "react";
import SearchBar from "../components/Layout/SearchBar";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";

const Explore = () => {
  //const userRef = collection(db, "users");

  useEffect(() => {
    console.log("Welcome to the explore page");
  }, []);
  const fetchData = () => {};
  return (
    <div>
      <SearchBar />
      {/* <input placeholder="Push data.." onChange={}/> */}
      <button>Upload data </button>
      <h1>Hello from explore</h1>
      <h1>Hello from explore</h1>
      <h1>Hello from explore</h1>
      <h1>Hello from explore</h1>
      <h1>Hello from explore</h1>

      <button onClick={fetchData}>Fetch data </button>
    </div>
  );
};

export default Explore;
