import React from 'react';

const component3 = () => {
  const containerStyle = {
    width: '100vw',
    minHeight: 'calc(100vh + 1600px)',
    margin: '0 auto',
    background: '#F0F0F0',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const cardStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '260px',
    padding: '40px',
    border: '2px solid #FFFFFF',
    borderRadius: '40px',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.05)',
    width: '632px', // 카드의 고정 너비 설정
    height: 'auto', // 카드의 고정 높이 설정 제거
    backgroundColor: 'rgba(255, 255, 255, 0.35)', // 카드 배경색 설정
    textAlign: 'left',
    position: 'relative', // 카드 컨테이너를 기준으로 절대 위치 설정
    backdropFilter: 'blur(25px)', // backdrop-filter 설정
    boxSizing: 'border-box',
  };

  const cardStyle1 = {
    ...cardStyle,
    marginRight: '380px', // 첫 번째 카드 왼쪽으로 이동
  };

  const cardStyle2 = {
    ...cardStyle,
    marginLeft: '380px', // 두 번째 카드 오른쪽으로 이동
  };

  const cardStyle3 = {
    ...cardStyle,
    marginRight: '380px', // 세 번째 카드 왼쪽으로 이동
  };

  const textContainerStyle = {
    flex: 1,
    position: 'relative', // 텍스트 컨테이너를 기준으로 절대 위치 설정
    zIndex: 1, // 텍스트가 그라데이션 원 위에 오도록 설정
  };

  const headingStyle = {
    fontSize: '0.875rem',
    color: '#3B82F6', // Heading color
    marginBottom: '-1.5rem',
    marginLeft: '0.15rem',
    fontWeight: 900,
    fontFamily: 'Roboto',
  };

  const subHeadingStyle = {
    fontFamily: 'Roboto',
    fontSize: '2.25rem',
    fontWeight: 900,
    color: '#1F2937', // Subheading color
    marginBottom: '2.rem',
  };

  const highlightedTextStyle = {
    color: '#325EFF', // 특정 부분만 파란색으로 설정
  };

  const paragraphStyle = {
    fontFamily: 'Roboto',
    fontSize: '1.125rem',
    color: '#6B7280', 
    lineHeight: '1.75rem',
  };

  const imageStyle = {
    width: '390px', // 이미지의 너비 조정
    height: '809px', // 이미지의 높이 조정
    objectFit: 'cover',
    borderRadius: '10px',
    position: 'absolute',
  };

  const image1Style = {
    ...imageStyle,
    right: '-420px', // 첫 번째 박스 오른쪽에 배치
  };

  const image2Style = {
    ...imageStyle,
    left: '-420px', // 두 번째 박스 왼쪽에 배치
  };

  const image3Style = {
    ...imageStyle,
    right: '-420px', // 세 번째 박스 오른쪽에 배치
  };

  const gradientStyle1 = {
    position: 'absolute',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: 'radial-gradient(50% 50% at 50% 50%, rgba(50, 94, 255, 0.25) 0%, rgba(241, 241, 241, 0.25) 100%)',
    top: '-110px',
    left: '-110px',
    zIndex: 0,
  };

  const gradientStyle2 = {
    position: 'absolute',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: 'radial-gradient(50% 50% at 50% 50%, rgba(200, 50, 255, 0.25) 0%, rgba(241, 241, 241, 0.25) 100%)',
    top: '-90px',
    right: '-90px',
    zIndex: 0,
  };

  const gradientStyle3 = {
    position: 'absolute',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: 'radial-gradient(50% 50% at 50% 50%, rgba(50, 94, 255, 0.25) 0%, rgba(241, 241, 241, 0.25) 100%)',
    top: '-90px',
    left: '-90px',
    zIndex: 0,
  };

  const responsiveStyle = `
    @media (max-width: 1024px) {
      .cardStyle1, .cardStyle2, .cardStyle3 {
        flex-direction: column !important;
        align-items: center !important;
        margin-right: 0 !important;
        margin-left: 0 !important;
      }
      .image1Style, .image2Style, .image3Style {
        position: relative !important;
        right: 0 !important;
        left: 0 !important;
        margin-bottom: 20px;
        width: 100% !important;
        max-width: 350px !important;
      }
      .gradientStyle1, .gradientStyle2, .gradientStyle3 {
        width: 200px !important;
        height: 200px !important;
        top: -60px !important;
        left: -60px !important;
        right: -60px !important;
      }
    }

    @media (max-width: 480px) {
      .cardStyle1, .cardStyle2, .cardStyle3 {
        width: 90vw !important;
        padding: 20px !important;
      }
      .subHeadingStyle {
        font-size: 1.5rem !important;
      }
      .paragraphStyle {
        font-size: 1rem !important;
      }
      .image1Style, .image2Style, .image3Style {
        width: 100% !important;
        height: auto !important;
      }
      .gradientStyle1, .gradientStyle2, .gradientStyle3 {
        width: 150px !important;
        height: 150px !important;
        top: -30px !important;
        left: -30px !important;
        right: -30px !important;
      }
    }
  `;

  return (
    <div style={containerStyle}>
      <style>
        {responsiveStyle}
      </style>
      <div className="cardStyle1" style={cardStyle1}>
        <div style={textContainerStyle}>
          <p style={headingStyle}>SPORTING 1</p>
          <h3 style={subHeadingStyle}>
            <span style={highlightedTextStyle}>실사용자</span>가 제공하는
            <br></br>근처 운동 시설 정보
          </h3>
          <p style={paragraphStyle}>
            체육관, 공원, 헬스장 등 운동 시설에 대한 정보 및 리뷰를 열람할 수
            있습니다. 직접 가보지 않고 집에서 간편하게 확인하세요!
          </p>
        </div>
        <img className="image1Style" src="/운동 시설 정보 제공 화면 1.png" alt="운동 시설 정보 제공 화면" style={image1Style} />
        <div className="gradientStyle1" style={gradientStyle1}></div>
      </div>

      <div className="cardStyle2" style={cardStyle2}>
        <div style={textContainerStyle}>
          <p style={headingStyle}>SPORTING 2</p>
          <h3 style={subHeadingStyle}><span style={highlightedTextStyle}>운동 약속</span> 모집 및 참여</h3>
          <p style={paragraphStyle}>
            가까운 이웃들과 운동 약속을 형성하여 가벼운 산책부터 팀 스포츠까지 함께 진행할 수 있습니다.
            러닝, 농구, 배드민턴, 테니스, 헬스, 필라테스/요가, 축구/풋살, 라이딩을 즐겨보세요!
          </p>
        </div>
        <img className="image2Style" src="/홈 메인 화면 1.png" alt="홈 메인 화면" style={image2Style} />
        <div className="gradientStyle2" style={gradientStyle2}></div>
      </div>

      <div className="cardStyle3" style={cardStyle3}>
        <div style={textContainerStyle}>
          <p style={headingStyle}>SPORTING 3</p>
          <h3 style={subHeadingStyle}>하이퍼로컬 운동 <span style={highlightedTextStyle}>커뮤니티</span></h3>
          <p style={paragraphStyle}>
            동네에서 개최되는 체육 행사 및 이벤트 소식을 빠르게 확인해 보세요.
            운동과 관련된 다양한 주제로 동네 친구들과 소통할 수 있습니다!
          </p>
        </div>
        <img className="image3Style" src="/하이퍼로컬 운동 커뮤니티 화면 1.png" alt="하이퍼로컬 운동 커뮤니티 화면" style={image3Style} />
        <div className="gradientStyle3" style={gradientStyle3}></div>
      </div>
    </div>
  );
}

export default component3;
