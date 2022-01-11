import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const ExploreBtn = () => {
  const router = useRouter();

  const goToExplore = (e) => {
    e.preventDefault();
    router.push("/explore");
  };

  return (
    <>
      <ExploreButton onClick={goToExplore}>
        <text>Explore</text>
      </ExploreButton>
    </>
  );
};

const ExploreButton = styled.button`
  background: #4d8c57;
  padding: 12px;
  border-radius: 4px;
  color: #fff;
  z-index: 12;
  cursor: pointer;
`;

export default ExploreBtn;
