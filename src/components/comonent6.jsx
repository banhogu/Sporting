import styled from 'styled-components';
import jogging from '../../public/jogging.jpg';
import basketball from '../../public/basketball.jpg';
import footsal from '../../public/footsal.jpg';
import cycle from '../../public/cycle.jpg';
import baseball from '../../public/baseball.jpg';

const Section = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const HeadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: auto;
    margin-bottom: 0.5rem;
`;

const Title = styled.h1`
    font-weight: bold;
    margin-bottom: 0.25rem;
    text-align: center;
    width: 100%;
    font-size: 2rem;
    word-break: keep-all;
`;

const Subtitle = styled.h4`
    font-weight: 500;
    width: 100%;
    margin-top: 0.5rem;
    font-size: 1rem;
    text-align: center;
    word-break: keep-all;
`;

const SliderContainer = styled.div`
    width: 100%;
    height: auto;
    overflow: hidden;
`;

const Slider = styled.div`
    width: max-content;
    display: flex;
    flex-wrap: nowrap;
    gap: 1rem;
    padding: 1rem;
    animation: slide 20s linear infinite;

    &:hover {
        animation-play-state: paused;
    }

    @keyframes slide {
        from {
            transform: translateX(0%);
        }
        to {
            transform: translateX(-50%);  /* 슬라이더의 전체 길이 이동 */
        }
    }
`;

const CardContainer = styled.div`
    width: 180px;
    height: 240px;

    display: flex;
    flex-direction: column;
    align-items: start;
    position: relative;
`;

const ImageDiv = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 1rem;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    ${({ isEven }) => (isEven ? 'top: -15px;' : 'top: 15px;')}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  object-fit: cover;

`;

const NameLabel = styled.p`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  font-weight: bold;
  margin: 0;
`;

function Card({
  src, alt, name, index,
}) {
  const isEven = index % 2 === 0;

  return (
    <CardContainer>
      <ImageDiv isEven={isEven}>
        <Image alt={alt} src={src} />
        <NameLabel>{name}</NameLabel>
      </ImageDiv>
    </CardContainer>
  );
}

export default function ReviewSlider() {
  const logos = [
    { src: jogging, alt: 'jogging', name: '조깅' },
    { src: basketball, alt: 'basketball', name: '농구' },
    { src: footsal, alt: 'footsal', name: '풋살' },
    { src: cycle, alt: 'cycle', name: '사이클링' },
    { src: baseball, alt: 'baseball', name: '야구' },
    { src: baseball, alt: 'baseball', name: '야구' },
    { src: baseball, alt: 'baseball', name: '야구' },
    { src: baseball, alt: 'baseball', name: '야구' },
    { src: baseball, alt: 'baseball', name: '야구' },
  ];

  // 슬라이드가 끊기지 않도록 더 많은 복제
  const doubledLogos = [...logos, ...logos];

  return (
    <Section aria-label="ReviewSlider">
      <HeadingContainer>
        <Title>원하는 모든 운동을 즐겨보세요</Title>
        <Subtitle>
          즐겨보세용
        </Subtitle>
      </HeadingContainer>
      <SliderContainer>
        <Slider>
          {doubledLogos.map((logo, index) => (
            <Card
              key={index}
              src={logo.src}
              alt={logo.alt}
              name={logo.name}
              index={index}
            />
          ))}
        </Slider>
      </SliderContainer>
    </Section>
  );
}
