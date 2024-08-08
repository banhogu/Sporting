import React, { useState } from 'react';
import styled from 'styled-components';
import PhoneImageSrc from '../img/Hero.png'; 
import AppstoreImageSrc from '../img/Appstore.png';

function HeroSection() {
  const [isClicked, setIsClicked] = useState(false);

  const handleAppstoreClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 3000);//3초 뒤에 닫기
  };

  return (
    <HeroContainer>
      <Gradient1 />
      <Gradient2 />
      <TextContainer>
        <Text>건강한 만남,</Text>
        <PhoneImage src={PhoneImageSrc} alt="hero img" />
        <ColorText>함께 운동</ColorText><Text>하세요</Text>
      </TextContainer>
      <AppButtonsContainer>
        <AppstoreImage src={AppstoreImageSrc} alt="appstore img" onClick={handleAppstoreClick} />
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
    height: auto; 
    flex-direction: column;
  }
`;
const Gradient1 = styled.div`
  position: absolute;
  width: 591px;
  height: 521px;
  border-radius: 50%;
  background: radial-gradient(50% 50% at 50% 50%, rgba(200, 50, 255, 0.25) 0%, rgba(241, 241, 241, 0.25) 70%);
  top: 150px;
  left: -250px;

  @media (max-width: 1024px) {
    position: absolute;
    width: 900px;
    height: 900px;
    top: 200px;
    left: -400px;
  }

  @media (max-width: 480px) {
    position: absolute;
    width: 450px;
    height: 450px;
    top: 40px;
    left: -300px;
  }
`;

const Gradient2 = styled.div`
  position: absolute;
  width: 556px;
  height: 521px;
  border-radius: 50%;
  background: radial-gradient(50% 50% at 50% 50%, rgba(50, 94, 255, 0.25) 0%, rgba(241, 241, 241, 0.25) 70%);
  top: 0px;
  right: -220px;

  @media (max-width: 480px) {
    position: absolute;
    width: 450px;
    height: 450px;
    top: -200px;
    right: -250px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap; 

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
    font-size: 50px; 
  }

  @media (max-width: 480px) {
    font-size: 40px; 
  }
`;

const ColorText = styled(Text)`
  color: #325EFF;
`;

const PhoneImage = styled.img`
  height: auto;
  max-height: 500px;

  @media (max-width: 1024px) {
    height: auto;
  }

  @media (max-width: 480px) {
    width:100px;
  }

`;

const AppButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const AppstoreImage = styled.img`
  width: 500px;
  height: auto;
  margin-top: 10px;

  @media (max-width: 1024px) {
    height:auto;
    width: 400px;
  }

  @media (max-width: 480px) {
    height:auto;
    width: 300px;
    margin-bottom:20px;
  }
`;

const Message = styled.div`
  position: absolute;
  top: 50%; 
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  background-color: white;
  border: 1px solid #F5F5F5;
  z-index: 10;
`;

export default HeroSection;
