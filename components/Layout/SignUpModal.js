import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Modal from "@mui/material/Modal";
import { motion } from "framer-motion";
import { borderRadius } from "@mui/system";
import Login from "./Login";
import SignUp from "./SignUp";

//Material UI
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#fff",
  borderRadius: 2,
  boxShadow: 24,
  p: 2,
};

const SignUpModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [value, setValue] = useState(0);

  const changeToLogin = () => {
    setValue(0);
  };
  const changeToSignup = () => {
    setValue(1);
  };

  return (
    <div>
      <SignUpBtn onClick={handleOpen}>Sign up</SignUpBtn>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={value}>
              <Tab label="Sign up" onClick={changeToLogin} />
              <Tab label="Sign in" onClick={changeToSignup} />
            </Tabs>
          </Box>
          {value ? (
            <Login handleClose={handleClose} />
          ) : (
            <SignUp handleClose={handleClose} />
          )}
        </Box>
      </Modal>
    </div>
  );
};

const SignUpBtn = styled(motion.button)`
  color: #514644;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px;
  border-radius: 3px;
  background-color: #50aba5;
  cursor: pointer;

  /* &:hover {
    transform: scale(1.1);
  } */
`;

const TabPanel = styled.div``;

export default SignUpModal;
