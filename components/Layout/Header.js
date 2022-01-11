import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { FormControlUnstyled } from "@mui/base";
import { useRouter } from "next/router";
import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import ProfileDrawer from "./Drawer";
import LogOutBtn from "./LogOutBtn";
import SearchBar from "./SearchBar";
import SignInButton from "./SignInBtn";
import SignUpModal from "./SignUpModal";
import { UserContext } from "./UserContext";
import {auth} from '../../pages/index'

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [user, setUser] = useState(null);

  

  const router = useRouter();



  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(true);
      } else {
        setUser(false);
      }
    });
  }, []);

  const goToHome = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <HeaderContainer>
      {/* <Icon src="/school.png" /> */}
      <TeacherText onClick={goToHome} alt="go to homepage">
        Teacher
      </TeacherText>
      <SearchBarContainer>
        <SearchBar />
      </SearchBarContainer>

      {user ? <LogOutBtn /> : <SignUpModal />}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  display: flex;
  background-color: #232c30;
  padding: 10px;
  z-index: 500
`;

const TeacherText = styled.button`
  color: #fff;
  font-family: "Courier New", monospace;
  font-size: 30px;
  margin-left: 6px;
  display: flex;
`;

const SearchBarContainer = styled.div`
  margin: 0 auto;
`;
const LoginButton = styled.div`
  display: flex;
  right: 0;
`;

export default Header;
