import React from 'react';

const component2 = () => {
  const containerStyle = {
    width: '100vw',
    minHeight: '100vh',
    margin: '0 auto',
    background: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    position: 'relative',
  };

  const grayBoxStyle = {
    marginTop:'150px',
    boxSizing: 'border-box',
    width: '1155px',
    height: '1470px',
    background: 'rgba(227, 227, 227, 0.35)',
    border: '2px solid #FFFFFF',
    boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.08)',
    backdropFilter: 'blur(25px)',
    borderRadius: '40px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative', // 추가
  };

  const textContainerStyle = {
    marginBottom: '40px',
    textAlign: 'left',
    width: '100%',
    marginLeft: '150px',
    marginTop: '70px',
  };

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: '20px',
  };

  const cardContainerStyle = {
    width: '300px',
    height: '300px',
    borderRadius: '20px',
    marginBottom: '20px',
    textAlign: 'left',
    marginTop: '40px',
    position: 'relative',
    marginRight: '95px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#FFFFFF',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.05)',
  };

  const subHeadingStyle = {
    fontSize: '1.9rem',
    color: '#325EFF',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    marginBottom: '10px',
    marginTop: '-5px',
    display: 'flex',
    alignItems: 'center',
  };

  const cardParagraphStyle = {
    fontFamily: 'Roboto',
    fontSize: '1.125rem',
    color: '#6B7280', 
    lineHeight: '1.75rem',
  };

  const cardContainerStyleReverse = {
    ...cardContainerStyle,
    flexDirection: 'row-reverse',
    left: '95px',
  };

  const iconStyle = {
    width: '200px',
    height: '200px',
    position: 'relative',
    zIndex: 1,
  };

  const gradientStyle = {
    position: 'absolute',
    width: '145px',
    height: '22px',
    background: 'radial-gradient(50% 50% at 50% 50%, #B3B3B3 0%, #FFFFFF 100%)',
    top: '200px',
    left: '30px',
    zIndex: 0,
  };

  const cardContentStyle = {
    width: '530px',
    marginLeft: '20px',
  };

  const cardContentStyleReverse = {
    ...cardContentStyle,
    marginLeft: '0',
    marginRight: '20px',
  };

  const gradientBackgroundStyle = {
    position: 'absolute',
    width: '700px',
    height: '692.53px',
    left: '700px', // 회색 박스 내에서의 상대적 위치로 조정
    top: '-100px',
    background: 'radial-gradient(50% 50% at 50% 50%, rgba(149, 50, 255, 0.25) 0%, rgba(255, 255, 255, 0.25) 100%)',
    zIndex: 0,
  };

  const gradientBackgroundStyle2 = {
    position: 'absolute',
    width: '779px',
    height: '804px',
    left: '-200px', // 회색 박스 내에서의 상대적 위치로 조정
    top: '1000px',
    background: 'radial-gradient(50% 50% at 50% 50%, rgba(50, 94, 255, 0.25) 0%, rgba(255, 255, 255, 0.25) 100%)',
    zIndex: 0,
  };

  const gradientBackgroundStyle3 = {
    position: 'absolute',
    width: '450px',
    height: '450px',
    left: '-210px', // 회색 박스 내에서의 상대적 위치로 조정
    top: '-240px',
    background: 'radial-gradient(50% 50% at 50% 50%, rgba(50, 94, 255, 0.25) 0%, rgba(255, 255, 255, 0.25) 100%)',
    zIndex: 0,
  };

  const responsiveStyle = `
    @media (max-width: 1024px) {
      .grayBoxStyle{
        width: 100% !important;
      }
      .grayBox {
        width: 90% !important;
        height: auto !important;
        padding: 10px !important;
      }
      .textContainer {
        margin-left: 0 !important;
        text-align: center !important;
      }
      .cardContainer {
        flex-direction: column !important;
        margin-right: 0 !important;
        width: 80% !important;
        margin-bottom: 10px !important;
      }
      .cardContainerReverse {
        flex-direction: column !important;
        left: 0px !important;
        width: 80% !important;
        margin-bottom: 10px !important;
      }
      .cardContent {
        width: 100% !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
        text-align: center !important;
      }
      .iconStyle {
        width: 150px !important;
        height: 150px !important;
      }
      .gradientStyle {
        top: 180px !important;
      }
    }

    @media (max-width: 480px) {
      .grayBox {
        width: 90% !important;
        height: auto !important;
        padding: 10px !important;
      }
      .textContainer {
        margin-left: 0 !important;
        text-align: center !important;
      }
      .cardContainer {
        flex-direction: column !important;
        margin-right: 0 !important;
        width: 100% !important;
        align-items: center !important;
      }
      .cardContainerReverse {
        flex-direction: column !important;
        margin-left: 0 !important;
        width: 100% !important;
        align-items: center !important;
      }
      .cardContent {
        width: 100% !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
        text-align: center !important;
        padding: 0 10px;
      }
      .iconStyle {
        width: 120px !important;
        height: 120px !important;
      }
      .gradientStyle {
        top: 140px !important;
      }
    }
  `;

  return (
    <div style={containerStyle}>
      <style>
        {responsiveStyle}
      </style>
      <div style={{ ...grayBoxStyle, maxWidth: '100%' }} className="grayBox">
        <div style={gradientBackgroundStyle}></div>
        <div style={gradientBackgroundStyle2}></div>
        <div style={gradientBackgroundStyle3}></div>
        <div style={textContainerStyle} className="textContainer">
          <p style={{ fontSize: '1rem', color: '#325EFF', marginBottom: '-30px', marginTop: '20px', marginLeft: '6px', fontWeight: 'bold' }}>SPORTING</p>
          <h1 style={headingStyle}>건전하고 간편한 운동 약속</h1>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '20px' }} className="cardContainer">
          <div style={cardContainerStyle}>
            <div style={{ position: 'relative' }}>
              <div style={gradientStyle} className="gradientStyle"></div>
              <img src="Rectangle 10.png" alt="Rectangle 10" style={iconStyle} className="iconStyle" />
            </div>
          </div>
          <div style={cardContentStyle} className="cardContent">
            <p style={subHeadingStyle}>
              보증금 <span style={{ color: '#000000' }}>&nbsp;시스템</span> <img src="Plus.png" alt="Plus Icon" style={{ marginLeft: '10px', width: '20px', height: '20px', marginTop: '3px' }} />
            </p>
            <p style={cardParagraphStyle}>
              보증금 시스템 지불 후 약속에 참여하여 약속이 끝난 후 보증금을 반환 받습니다. 단, 노쇼 및 불쾌감만 남은 등의 문제 발생 시 보증금은 반환되지 않습니다. 보증금 시스템으로 건전하고 안전한 운동 약속 문화를 형성합니다.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', marginBottom: '20px' }} className="cardContainerReverse">
          <div style={cardContainerStyleReverse}>
            <div style={{ position: 'relative' }}>
              <div style={gradientStyle} className="gradientStyle"></div>
              <img src="Location 1.png" alt="Location 1" style={iconStyle} className="iconStyle" />
            </div>
          </div>
          <div style={cardContentStyleReverse} className="cardContent">
            <p style={subHeadingStyle}>
              지도 기반<span style={{ color: '#000000' }}>&nbsp;서비스</span> <img src="Plus.png" alt="Plus Icon" style={{ marginLeft: '10px', width: '20px', height: '20px', marginTop: '3px' }} />
            </p>
            <p style={cardParagraphStyle}>
              지도 상에 사용자가 직접 선호하는 장소 및 시간에 운동을 함께 할 파트너 모집 및 약속 참여가 가능합니다. 직관적인 지도 기반 서비스로 진정한 약속을 한눈에 파악 가능합니다.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '20px' }} className="cardContainer">
          <div style={cardContainerStyle}>
            <div style={{ position: 'relative' }}>
              <div style={gradientStyle} className="gradientStyle"></div>
              <img src="Trophy 1.png" alt="Trophy 1" style={iconStyle} className="iconStyle" />
            </div>
          </div>
          <div style={cardContentStyle} className="cardContent">
            <p style={subHeadingStyle}>
              AI 자동 생성 <span style={{ color: '#000000' }}>&nbsp;운동 약속</span><img src="Plus.png" alt="Plus Icon" style={{ marginLeft: '10px', width: '20px', height: '20px', marginTop: '3px' }} />
            </p>
            <p style={cardParagraphStyle}>
              AI 기반으로 자동으로 운동 약속이 생성되며 '스포팅' (AI 자동 생성 운동 약속)의 참가자는 포인트 리워드를 받을 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default component2;
