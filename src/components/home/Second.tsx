'use client';
import React, { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionType {
  children: ReactNode;
  delay: number;
}

const Section = ({ children, delay = 0 }: SectionType) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateY: 50 }}
      animate={{
        opacity: isInView ? 1 : 0,
        translateY: isInView ? 0 : 50
      }}
      transition={{
        duration: 0.5,
        ease: 'easeIn',
        delay: isInView ? delay : 0
      }}>
      {children}
    </motion.div>
  );
};

const Second = () => {
  return (
    <div className="bg-[#F0F0F0] -mt-1 overflow-hidden">
      {/* 첫번째 */}
      <Section delay={0.3}>
        <div className="flex items-center justify-center gap-[17px] max-h-max">
          <div className="relative px-[45px] py-[41px] bg-gray-50 border-2 border-white shadow-lg rounded-[24px]">
            <div className="text-[16px] font-normal text-[#325EFF]">SPORTING 1</div>
            <div className="text-[40px] font-bold">
              <span className="text-[#325EFF]">실사용자</span>가 제공하는
            </div>
            <div className="text-[40px] font-bold mt-1">근처 운동 시설 정보</div>
            <div className="mt-10 text-gray-500 text-[20px] font-normal">
              체육관, 공원, 헬스장 등 운동 시설에 대한 정보 및 리뷰를 열람할 수
            </div>
            <div className=" text-gray-500 text-[20px] font-normal">
              있습니다. 직접 가보지 않고 집에서 간편하게 확인하세요!
            </div>

            <div>
              <img
                src="/images/second_blue.svg"
                alt=""
                className="absolute -top-[140px] -left-[120px]"
              />
            </div>
          </div>

          <div className="mt-[100px] ">
            <img src="/images/second1.svg" alt="" />
          </div>
        </div>
      </Section>

      {/* 두 번째 */}
      <Section delay={0.4}>
        <div className="flex items-center justify-center gap-[17px] max-h-max">
          <div className="-mt-[100px] ">
            <img src="/images/second2.svg" alt="" />
          </div>

          <div className="relative px-[45px] py-[41px] bg-gray-50 border-2 border-white shadow-lg rounded-[24px]">
            <div className="text-[16px] font-normal text-[#325EFF]">SPORTING 2</div>
            <div className="text-[40px] font-bold">
              <span className="text-[#325EFF]">운동 약속</span> 모집 및 참여
            </div>

            <div className="mt-10 text-gray-500 text-[20px] font-normal">
              가까운 이웃들과 운동 약속을 형성하여 가벼운 산책부터
            </div>
            <div className=" text-gray-500 text-[20px] font-normal">
              팀 스포츠까지 함께 진행할 수 있습니다. 러닝, 농구, 배드민턴,
            </div>
            <div className=" text-gray-500 text-[20px] font-normal">
              테니스, 헬스, 필라테스/요가, 축구/풋살, 라이딩을 즐겨보세요!
            </div>
            <div>
              <img
                src="/images/second_pink.svg"
                alt=""
                className="absolute -top-[140px] -right-[120px]"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* 세 번째 */}
      <Section delay={0.5}>
        <div className="flex items-center justify-center gap-[17px] max-h-max">
          <div className="relative px-[45px] py-[41px] bg-gray-50 border-2 border-white shadow-lg rounded-[24px]">
            <div className="text-[16px] font-normal text-[#325EFF]">SPORTING 1</div>
            <div className="text-[40px] font-bold">
              하이퍼로컬 운동
              <span className="text-[#325EFF]">커뮤니티</span>
            </div>
            <div className="mt-10 text-gray-500 text-[20px] font-normal">
              동네에서 개최되는 체육 행사 및 이벤트 소식을 빠르게 확인해 보세요.
            </div>
            <div className=" text-gray-500 text-[20px] font-normal">
              운동과 관련된 다양한 주제로 동네 친구들과 소통할 수 있습니다!
            </div>
            <div>
              <img
                src="/images/second_blue.svg"
                alt=""
                className="absolute -top-[140px] -left-[120px]"
              />
            </div>
          </div>

          <div className="-mt-[100px]">
            <img src="/images/second3.svg" alt="" />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Second;
