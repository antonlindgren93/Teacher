import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { auth } from "./Firebase/firebase";
import { TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext";

const Login = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();


  const handleSubmit = async (e) => {
    if (!email || !password) {
      alert("Fill in the missing fields");
    }

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      handleClose();
      e.preventDefault();
      router.push("/explore");
    } catch (error) {
      console.log("ERROR " + error);
    }
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
      <Button
        variant="contained"
        size="large"
        style={{ backgroundColor: "#91c0bc" }}
        onClick={handleSubmit}
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;
