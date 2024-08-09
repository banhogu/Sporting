import React from "react";
import styled from "styled-components";
import Check1 from '../img/Check 1.png';
import Chat1 from '../img/Chat 1.png';

function CardComponent() {
  return (
    <CardContainer>
      <Card>
        <Title>생활 체육에 주목합니다.</Title>
        <Description>
          스포팅은 ‘생활 체육’의 가치에 주목합니다.<br />
          혼자 하기 어려웠던 운동을 근처 이웃들과 함께 합니다.
        </Description>
        <ImageContainer>
          <Image src={Check1} alt="Check Icon" />
        </ImageContainer>
      </Card>
      <Card>
        <Title>건강한 만남에 주목합니다.</Title>
        <Description>
          가벼운 산책부터 축구, 헬스와 같은 팀 스포츠까지. 함께하는
          단 하루의 건강한 추억을 만드는 커뮤니티를 꿈꿉니다.
        </Description>
        <ImageContainer>
          <Image src={Chat1} alt="Chat Icon" />
        </ImageContainer>
      </Card>
    </CardContainer>
  );
}

//mobile : 480
//tablet : 1024

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  background: #EAF3FF;
  border-radius: 10px;
  width: 463px;
  height: 353px;
  padding: 20px;
  overflow: hidden;
  margin: 10px;

  @media (max-width: 1024px) {
    width: 80%; 
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 80%; 
    padding: 10px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  
`;

const Image = styled.img`
  width: 150px; 
  height: auto;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    width: 90px; 
  }
`;

const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 22px; 
  font-weight: 700;
  color: #0029BD;

  @media (max-width: 480px) {
    font-size: 20px; 
  }
`;

const Description = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #313131CC;
  margin-top: 10px;
  line-height: 1.4; 

  @media (max-width: 480px) {
    font-size: 14px; 
  }
`;

export default CardComponent;
