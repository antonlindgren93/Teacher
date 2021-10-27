import React from "react";
import styled from "styled-components";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
  FaRedditSquare,
} from "react-icons/fa";
import { BsArrowBarUp } from "react-icons/bs";
// import Image from "next/image";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterImage src="/school.png" />
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="">Sign up</FooterLink>
              <FooterLink to="">About us</FooterLink>
              <FooterLink to="">Contact us</FooterLink>
              <FooterLink to="">How it works</FooterLink>
              <FooterLink to="">Term of services</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Explore</FooterLinkTitle>
              <FooterLink to="">Home</FooterLink>
              <FooterLink to="">About</FooterLink>
              <FooterLink to="">Profile</FooterLink>
              <FooterLink to="">Teachers</FooterLink>
              <FooterLink to="">FAQ</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>#teacher</FooterLinkTitle>
              <FooterIcons>
                <FooterLink to="">
                  <FaRedditSquare size={24} />
                </FooterLink>
                <FooterLink to="">
                  <FaTwitterSquare size={24} />
                </FooterLink>
                <FooterLink to="">
                  <FaLinkedin size={24} />
                </FooterLink>
                <FooterLink to="">
                  <FaInstagram size={24} />
                </FooterLink>
                <FooterLink to="">
                  <FaFacebookSquare size={24} />
                </FooterLink>
              </FooterIcons>
              <FooterIconScroll>
                <button>
                  <BsArrowBarUp onClick={scrollToTop} size={36} color="white" />
                </button>
              </FooterIconScroll>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #232c30;
  /* display: flexbox; */
`;
const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;

  /* flex-grow: 4; */
`;
const FooterImage = styled.img`
  width: 128px;
  height: 128px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;
const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

const FooterIcons = styled.div`
  display: flex;
  align-items: row;
`;
const FooterIconScroll = styled.div`
  display: flex;
  align-items: row;
`;

const FooterLinkTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`;

const FooterLink = styled.div`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: #50aba5;
    transition: 0.3s ease-out;
  }
`;

export default Footer;
