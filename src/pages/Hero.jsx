import React, { useState } from 'react';
import styled from 'styled-components';
import PhoneImageSrc from '../img/Hero.png';
import AppstoreImageSrc from '../img/Appstore.png';

function HeroSection() {
  const [isClicked, setIsClicked] = useState(false);

  const handleAppstoreClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 3000); 
  };

  return (
    <HeroContainer>
      <Gradient1 />
      <Gradient2 />
      <TextContainer>
        <Text>건강한 만남,</Text>
        <PhoneImage src={PhoneImageSrc} alt="hero img" />
        <ColorText>
          함께 운동 <span>하세요</span>
        </ColorText>
      </TextContainer>
      <AppButtonsContainer>
        <AppstoreImage
          src={AppstoreImageSrc}
          alt="appstore img"
          onClick={handleAppstoreClick}
        />
      </AppButtonsContainer>
      {isClicked && <Message>아직 준비 중입니다.</Message>}
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  overflow: hidden;

  @media (max-width: 1024px) {
    flex-direction: column; 

  @media (max-width: 480px){
    flex-direction : column;
  }
`;

const Gradient1 = styled.div`
  position: absolute;
  width: 591px;
  height: 521px;
  border-radius: 50%;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(200, 50, 255, 0.25) 0%,
    rgba(241, 241, 241, 0.25) 70%
  );
  top: 150px;
  left: -250px;

  @media (max-width: 1024px) {
    width: 450px;
    height: 450px;
    top: 50px;
    left: -200px;
  }

  @media (max-width: 480px) {
    width: 350px;
    height: 350px;
    top: 30px;
    left: -150px;
  }
`;

const Gradient2 = styled.div`
  position: absolute;
  width: 556px;
  height: 521px;
  border-radius: 50%;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(50, 94, 255, 0.25) 0%,
    rgba(241, 241, 241, 0.25) 70%
  );
  top: 0px;
  right: -220px;

  @media (max-width: 1024px) {
    width: 450px;
    height: 450px;
    top: -100px;
    right: -200px;
  }

  @media (max-width: 480px) {
    width: 350px;
    height: 350px;
    top: -150px;
    right: -150px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: relative; 
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }

  @media (max-width: 1024px) {
    width: 100%;
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const Text = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 60px;
  margin: 0 20px;
  font-weight: 700;
  color: #313131;

  @media (max-width: 1024px) {
    font-size: 30px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const ColorText = styled(Text)`
  color: #325eff;
  span {
    color: #313131;
  }
`;

const PhoneImage = styled.img`
  height: auto;
  max-height: 300px;

  @media (max-width: 800px) {
    max-height: 200px;
  }

  @media (max-width: 480px) {
    max-height: 100px;
  }
`;

const AppButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const AppstoreImage = styled.img`
  width: 400px;
  height: auto;
  margin-top: 10px;

  @media (max-width: 1024px) {
    width: 300px;
  }

  @media (max-width: 480px) {
    width: 200px;
    margin-bottom: 20px;
  }
`;

const Message = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  background-color: white;
  border: 1px solid #f5f5f5;
  z-index: 10;
`;

export default HeroSection;
