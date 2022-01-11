import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { auth } from "./Firebase/firebase";
import GoogleButton from "react-google-button";
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/router";

const SignUp = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    if (password !== confirmPassword) {
      alert("The password doesnt match");
    }
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
    //   e.preventDefault();
    //   router.push("/explore");
      console.log("Result from login with email: " + result.user);
      handleClose();
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const googleSingIn = (e) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("The display name is: " + result.user.displayName);
        const userDisplayName = result.user.displayName;
        const userToken = result.user.accessToken;
        if (userToken) {
          e.preventDefault();
          router.push("/explore");
        } else {
          console.log("No userID found");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box
      p={3}
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <TextField
        variant="outlined"
        type="email"
        label="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />
      <TextField
        variant="outlined"
        type="password"
        label="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
      />
      <TextField
        variant="outlined"
        type="password"
        label="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        fullWidth
      />
      <Button
        variant="contained"
        size="large"
        style={{ backgroundColor: "#91c0bc" }}
        onClick={handleSubmit}
      >
        Sign up
      </Button>
      <div style={{ margin: "0 auto" }}>
        <GoogleButton
          type="dark"
          onClick={googleSingIn}
          label="Sign up with Google"
        />
      </div>
    </Box>
  );
};

export default SignUp;
