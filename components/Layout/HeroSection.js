import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Typical from "react-typical";
import { BsChevronDoubleDown, BsChevronCompactDown } from "react-icons/bs";
import SignInBtn from "./SignInBtn";

const HeroSection = () => {
  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play();
    }, 5000);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg ref={videoRef} autoPlay loop muted>
          <source src="./start-page-video-3.mp4" type="video/mp4" />
        </VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>
          <span>Learn how to </span>
          <span>
            {
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  "code",
                  3000,
                  "play piano",
                  3000,
                  "speak spanish",
                  3000,
                  "paint",
                  3000,
                  "edit videos",
                  3000,
                  "play chess",
                  3000,
                ]}
              />
            }
          </span>
        </HeroH1>

        <HeroP>Pick up a new skill today</HeroP>
        <SignInBtn />
      </HeroContent>
      <ArrowBtnContainer>
        <ArrowBtn onClick={scrollToBottom}>
          <BsChevronDoubleDown size={40} />
        </ArrowBtn>
      </ArrowBtnContainer>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  position: relative;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
  object-fit: cover;
`;
const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const VideoBg = styled.video`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  z-index: 2;
`;
const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroH1 = styled.div`
  color: #fff;
  font-size: 48px;
  text-align: center;
`;

const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  border-width: 10;

  //text-shadow: 0 0 2px #fff;
`;



const ArrowBtnContainer = styled.div`
  align-items: center;
  position: absolute;
  bottom: 2.5%;
  left: 50%;
  z-index: 1;
`;

const ArrowBtn = styled.button`
  color: #fff;
  :hover {
    transform: scale(1.5);
    transition-duration: 0.5s;
  }
`;

export default HeroSection;
