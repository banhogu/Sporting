import { useRef, useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: scale(0.95);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0.95);
    }
`;

const Section = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: 100vh; /* Increase height to ensure scrolling */
`;

const SliderContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    overflow: hidden;
    position: ${(props) => (props.isFixed ? 'fixed' : 'relative')};
    background-color: #F0F0F0;
    top: 0;
    left: 0;
`;

const Slide = styled.div`
    flex: 0 0 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: ${(props) => (props.isVisible ? 'flex' : 'none')};
    flex-direction: row;
    position: relative;
    animation: ${(props) => (props.isVisible ? css`${fadeIn} 0.5s ease-in-out` : css`${fadeOut} 0.5s ease-in-out`)};
    @media (max-width: 800px) {
        flex-direction: column;
        justify-content: space-around;
    }
`;

const getBackground = (index) => {
  switch (index) {
    case 0:
      return 'radial-gradient(50% 50% at 50% 50%, rgba(50, 94, 255, 0.25) 0%, rgba(241, 241, 241, 0.25) 100%)';
    case 1:
      return 'radial-gradient(50% 50% at 50% 50%, rgba(200, 50, 255, 0.25) 0%, rgba(241, 241, 241, 0.25) 100%)';
    case 2:
    default:
      return 'radial-gradient(50% 50% at 50% 50%, rgba(50, 94, 255, 0.25) 0%, rgba(241, 241, 241, 0.25) 100%)';
  }
};

const getTopPosition = (index) => (index === 0 ? '-125px' : '-90px');

const getSidePosition = (index) => (index === 0 || index === 2 ? 'left: -120px;' : 'right: -90px;');

const GradientCircle = styled.div`
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: ${(props) => getBackground(props.index)};
    top: ${(props) => getTopPosition(props.index)};
    ${(props) => getSidePosition(props.index)};
    z-index: 0;
    @media (max-width: 800px) {
        width: 0px;
        height: 0px;
    }
`;

const SlideDiv = styled.div`
    width: 30%;
    height: 35%;
    background-color: #F5F5F5;
    border-radius: 50px;
    border: 2px solid white;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding: 2rem;
    z-index: 1;
    @media (max-width: 1024px) {
        height: 30%;
    }
    @media (max-width: 800px) {
        border: none;
        background-color: #F0F0F0;
        box-shadow: none;
        width: 80%;
        height: 25%;
        padding: 1rem;
    }
`;

const ImgDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    margin-left: 5rem;
    overflow: hidden;
    z-index: 1;
    @media (max-width: 1024px) {
        margin-left: 2rem;
    }
    @media (max-width: 800px) {
        padding-top: 0px;
        margin-left: 0rem;
    }
`;

const TitleDiv = styled.div`
    font-size: 1.3rem;
    font-weight: 500;
    color: #325EFF;
    margin-bottom: 0.5rem;
    @media (max-width: 1024px) {
        font-size: 1.3rem;
    }
    @media (max-width: 480px) {
        font-size: 1rem;
    }
`;

const SubtitleDiv = styled.div`
    font-size: 2rem;
    font-weight: 600;
    color: black;
    word-break: keep-all;
    margin: 0;
    line-height: 1.5;
    @media (max-width: 1024px) {
        font-size: 1.6rem;
    }
`;

const TextDiv = styled.div`
    font-size: 1.3rem;
    font-weight: 500;
    word-break: keep-all;
    color: #585B5B;
    margin-top: 1rem;
    line-height: 1.5;
    @media (max-width: 1024px) {
        margin-top: 0rem;
        font-size: 1rem;
    }
`;

const SlideImage = styled.img`
    max-width: 50vw;
    max-height: 100vh;
    aspect-ratio: 1 / 2;
    object-fit: cover;
    z-index: 1;
    @media (max-width: 800px) {
        max-width: 100vw;
        max-height: 70vh;
    }
`;

export default function Introduce() {
  const containerRef = useRef(null);
  const lastScrollTop = useRef(0);
  const initialOffset = useRef(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const [prevIndex, setPrevIndex] = useState(0);
  const slides = [
    {
      title: 'SPORTING 1',
      subtitle: (
        <>
          <span className="highlight" style={{ color: '#325EFF' }}>실사용자</span>
          가 제공하는
          {' '}
          <br />
          {' '}
          근처 운동 시설 정보
        </>
      ),
      text: '체육관, 공원, 헬스장 등 운동 시설에 대한 정보 및 리뷰를 열람할 수 있습니다. 직접 가보지 않고 집에서 간편하게 확인하세요!',
      src: '/iPhone15.png',
    },
    {
      title: 'SPORTING 2',
      subtitle: (
        <>
          <span className="highlight" style={{ color: '#325EFF' }}>운동 약속 </span>
          모집 및 참여
        </>
      ),
      text: '가까운 이웃들과 운동 약속을 형성하여 가벼운 산책부터 팀 스포츠까지 함께 진행할 수 있습니다. 러닝, 농구, 배드민턴, 테니스, 헬스, 필라테스/요가, 축구/풋살, 라이딩을 즐겨보세요!',
      src: '/iPhone15.png',
    },
    {
      title: 'SPORTING 3',
      subtitle: (
        <>
          하이퍼로컬 운동
          {' '}
          <span className="highlight" style={{ color: '#325EFF' }}>
            커뮤니티
          </span>
        </>
      ),
      text: '동네에서 개최되는 체육 행사 및 이벤트 소식을 빠르게 확인해 보세요. 운동과 관련된 다양한 주제로 동네 친구들과 소통할 수 있습니다!',
      src: '/iPhone15.png',
    },
  ];

  useEffect(() => {
    if (containerRef.current) {
      initialOffset.current = containerRef.current.getBoundingClientRect().top + window.pageYOffset;
    }

    const handleScroll = () => {
      const scrollDistance = document.documentElement.scrollTop - initialOffset.current;
      const delta = scrollDistance - lastScrollTop.current;
      const threshold = window.innerHeight * 0.33; // 33% of viewport height
      if (Math.abs(delta) >= threshold) {
        if (delta > 0) {
          setPrevIndex(imageIndex);
          setImageIndex((index) => (index === slides.length - 1 ? 0 : index + 1));
        } else {
          setPrevIndex(imageIndex);
          setImageIndex((index) => (index === 0 ? slides.length - 1 : index - 1));
        }
        lastScrollTop.current = scrollDistance;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsFixed(true);
            window.addEventListener('scroll', handleScroll);
          } else {
            setIsFixed(false);
            window.removeEventListener('scroll', handleScroll);

            // 스크롤 방향에 따라 setImageIndex 설정
            const scrollDistance = document.documentElement.scrollTop - initialOffset.current;
            const delta = scrollDistance - lastScrollTop.current;

            if (delta > 0) {
              setImageIndex(2); // 아래로 스크롤해서 나갈 때
            } else {
              setImageIndex(0); // 위로 스크롤해서 나갈 때
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -100% 0px',
        threshold: 0,
      },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [imageIndex]);

  return (
    <Section ref={containerRef} aria-label="Image Slider">
      <SliderContainer isFixed={isFixed}>
        {slides.map((slide, index) => (
          <Slide key={index} isVisible={index === imageIndex}>
            <SlideDiv>
              <GradientCircle index={index} />
              <div>
                <TitleDiv>{slide.title}</TitleDiv>
                <SubtitleDiv>{slide.subtitle}</SubtitleDiv>
              </div>
              <TextDiv>{slide.text}</TextDiv>
            </SlideDiv>
            <ImgDiv>
              <SlideImage src={slide.src} alt={slide.title} />
            </ImgDiv>
          </Slide>
        ))}
      </SliderContainer>
    </Section>
  );
}
