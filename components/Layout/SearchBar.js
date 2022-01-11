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

const SearchContainer = styled.div``;
const SearchInput = styled.input`
  padding-left: 16px;
  width: 350px;
  height: 50px;
  border-radius: 4px
  border: none;
  background-image: linear-gradient(-180deg, #ECE9E6, #D7DDE8);
  
`;
const Form = styled.form``;

export default SearchBar;
