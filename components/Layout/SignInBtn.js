import React from "react";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import SignInModal from "./SignInModal";
import { motion } from "framer-motion";

const SignInButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <SignInBtn
        // as={motion.div}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={openModal}
      >
       (Old) Sign in
      </SignInBtn>
      <SignInModal open={isModalOpen} onClose={closeModal}></SignInModal>
    </>
  );
};

const SignInBtn = styled(motion.button)`
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

export default SignInButton;
