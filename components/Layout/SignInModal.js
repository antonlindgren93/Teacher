import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
import { auth } from "./Firebase/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Link from "next/link";
import { doc, setDoc } from "firebase/firestore";
//import Modal from "@mui/material/Modal";

const SignInModal = ({ open, children, onClose }) => {
  if (!open) return null;
  const [signInToggle, setSignInToggle] = useState(true);
  const [user, setUser] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [password, setPassword] = useState("");

  const toggleSwitch = () => setSignInToggle(!signInToggle);
  //const toggleLoginSwitch = () => setShowSignIn((prev) => !prev);

  const router = useRouter();

  const handleSignUp = () => {};

  const handleSignIn = () => {};

  const facebookSignIn = (e) => {
    alert("sing in with facebook will be added..");
    e.preventDefault();
    router.push("/explore");
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
        //console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Overlay>
        <Modal
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}

          //   transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          {/* <CheckBoxWrapper>
            <CheckBox id="checkbox" type="checkbox" value="true" />
            <CheckBoxLabel htmlFor="checkbox" />
          </CheckBoxWrapper> */}

          <CloseModalButton onClick={onClose}>X</CloseModalButton>

          <ModalContent>
            <H1>Login</H1>
            <EmainInput
              placeholder="Email"
              type="text"
              value={email}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <EmainInput
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <ModalSignInBtn
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Sign in
            </ModalSignInBtn>
            <SocialMediaIcons>
              <FaFacebookSquare size={24} onClick={facebookSignIn} />
              <FaGoogle size={24} onClick={googleSingIn} />
            </SocialMediaIcons>
          </ModalContent>

          <ModalSignUpSide>
            <H1>Create account</H1>
            <p>First name</p>
            <EmainInput
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <p>Last name</p>
            <EmainInput
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <p>Email</p>
            <EmainInput
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p>Password</p>
            <EmainInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ModalSignUpBtn
              onClick={handleSignUp}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Sign up
            </ModalSignUpBtn>
            <button> Already a member?</button>
          </ModalSignUpSide>
        </Modal>
      </Overlay>
    </>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

const Modal = styled(motion.div)`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: #232c30;
  color: #514644;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  margin: 0 auto;
  transform: translate(-50%, -50%);
  z-index: 10;
  border-radius: 10px;
`;

const H1 = styled.h1`
  font-size: 20px;
  margin-bottom: 10%;
`;
const EmainInput = styled.input`
  margin-bottom: 20px;
  border-radius: 5px;
  padding: 2px;
`;

const ModalSignUpSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8rem;
  background: #ece9e6;
  border-radius: 10px;
`;
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8rem;
  color: #ece9e6;

  p {
    margin-bottom: 1rem;
  }

  button {
    background: #ece9e6;
    color: #514644;
    border: none;
  }
`;
const CloseModalButton = styled(motion.button)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const ModalSignInBtn = styled(motion.button)`
  background: #91c0bc;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px;
  border-radius: 3px;
`;

const ModalSignUpBtn = styled(motion.button)`
  background: #232c30;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px;
  border-radius: 3px;
  color: #fff;
`;

const SocialMediaIcons = styled.div`
  display: flex;
`;

const CheckBoxWrapper = styled.div`
  position: fixed;
  bottom: 50%;
  right: 50%;
  left: 50%;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  position: absolute;
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

export default SignInModal;
