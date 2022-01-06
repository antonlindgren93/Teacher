import React, { useState } from "react";
import styled from "styled-components";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search for skill..."
        onChange={handleChange}
      />
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;
`;
const SearchInput = styled.input`
  padding-left: 16px;
  width: 300px;
  height: 50px;
  border-radius: 4px
  border: none;
  background-image: linear-gradient(-255deg, #B2FEFA, #0ED2F7);
  color: #fff;
`;
const Form = styled.form``;

export default SearchBar;
