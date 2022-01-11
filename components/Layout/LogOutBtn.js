import {
  applyActionCode,
  getAuth,
  onAuthStateChanged,
  signOut,
} from "@firebase/auth";
import React from "react";
import { useContext, useState } from "react/cjs/react.development";
import styled from "styled-components";
import app from "./Firebase/firebase";
import { UserContext } from "./UserContext";

const LogOutBtn = () => {
  //   const { user, setUser } = useContext(UserContext);

  const auth = getAuth();
  //   const handleLogOut = () => {
  //     onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //         console.log("Log out button pressed!");
  //         setIsLoggedOut(true);
  //       }
  //     });
  //   };

  return (
    <>
      <SignOutBtn onClick={() => signOut(auth)}>Log out</SignOutBtn>
    </>
  );
};

const SignOutBtn = styled.button`
  background: gold;
  color: black;
  border-radius: 3px;
  padding:4px
`;

export default LogOutBtn;
