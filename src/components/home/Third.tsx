'use client';
import { BouncySectionType } from '@/types/section.type';
import { motion, useInView } from 'framer-motion';
import React, { ReactNode, useRef } from 'react';

const BouncySection2 = ({ children, delay = 0, direction = 'up' }: BouncySectionType) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 50 };
      case 'down':
        return { y: -50 };
      case 'left':
        return { x: 50 };
      case 'right':
        return { x: -50 };
      default:
        return { y: 50 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, ...getInitialPosition() }}
      animate={{
        opacity: isInView ? 1 : 0,
        scale: isInView ? 1 : 0.8,
        x: isInView ? 0 : getInitialPosition().x,
        y: isInView ? 0 : getInitialPosition().y
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
        delay: isInView ? delay : 0,
        duration: 0.5
      }}>
      {children}
    </motion.div>
  );
};

const Third = () => {
  return (
    <div>
      <div className="relative px-9 py-9 sm:px-[92px] sm:py-[77px] max-w-[1155px] bg-gray-50 w-full mt-12 mb-20 sm:mx-auto sm:my-[100px] rounded-[40px] border-[4px] border-white shadow-lg">
        <div className="text-[#325EFF] text-[22px] font-bold sm:text-[16px] sm:font-bold">
          SPORTING
        </div>
        <div className=" text-[25px] sm:text-[50px] font-bold text-gray-900 ">
          건전하고 간편한 운동 약속
        </div>
        {/* 첫번째 */}
        <BouncySection2 delay={0.2} direction="up">
          <div className=" sm:flex items-center gap-[140px] mt-12 sm:mt-[110px]">
            <div className="px-[50px] pt-5 pb-10 rounded-[20px] bg-white shadow-md flex flex-col items-center">
              <img src="/images/coin.svg" alt="" />
              <img src="/images/third_shadow.svg" alt="" />
            </div>
            <div>
              <div className="text-[#313131] text-[28px] font-extrabold sm:text-[36px] sm:font-semibold mt-7 sm:mt-0">
                <span className="text-[#325EFF]">보증금</span> 시스템
              </div>
              <div className="hidden sm:block">
                <div className="mt-[30px] text-[17px] font-semibold  text-gray-500 sm:text-[20px] sm:font-normal">
                  보증금 지불 후 약속에 참여하며 약속이 끝난 후 보증금은 반환
                </div>
                <div className="text-[17px] font-semibold  text-gray-500 sm:text-[20px] sm:font-normal">
                  됩니다. 단, 노쇼 및 불건전한 만남 등의 문제 발생 시 보증금은
                </div>
                <div className="text-[17px] font-semibold  text-gray-500 sm:text-[20px] sm:font-normal">
                  반환되지 않습니다. 보증금 시스템으로 건전하고 안전한 운동
                </div>
                <div className="text-[17px] font-semibold  text-gray-500 sm:text-[20px] sm:font-normal">
                  약속 문화를 형성합니다.
                </div>
              </div>
              <div className="block sm:hidden">
                <div className="mt-6 text-gray-500 text-[17px] font-semibold sm:mt-10 sm:text-[20px] sm:font-normal">
                  보증금 지불 후 약속에 참여하며 약속이 끝난 후 보증금은 반환 됩니다. 단,
                  노쇼 및 불건전한 <br />
                  만남 등의 문제 발생 시 보증금은 반환되지 않습니다. 보증금 시스템으로
                  건전하고 안전한 운동 약속 문화를 형성합니다.
                </div>
              </div>
            </div>
          </div>
        </BouncySection2>
        {/* 두번째 */}
        <BouncySection2 delay={0.2} direction="up">
          <div className="sm:flex items-center gap-[140px] mt-[110px]">
            <div>
              <div className="text-[#313131] text-[28px] font-extrabold sm:text-[36px] sm:font-semibold mt-7 sm:mt-0">
                <span className="text-[#325EFF]">지도 기반</span> 서비스
              </div>

              <div className="hidden sm:block">
                <div className="mt-[30px] text-[17px] font-semibold  text-gray-500 sm:text-[20px] sm:font-normal">
                  지도 상에 사용자가 직접 선호하는 장소 및 시간에 운동을 함께
                </div>
                <div className="text-[17px] font-semibold  text-gray-500 sm:text-[20px] sm:font-normal">
                  할 파트너 모집 및 약속 참여가 가능합니다. 직관적인 지도 기반
                </div>
                <div className="text-[17px] font-semibold  text-gray-500 sm:text-[20px] sm:font-normal">
                  서비스로 진행 중인 약속을 한눈에 파악 가능합니다.
                </div>
              </div>
              <div className="block sm:hidden">
                <div className="mt-6 text-gray-500 text-[17px] font-semibold mb-8 sm:mb-0 sm:mt-10 sm:text-[20px] sm:font-normal">
                  지도 상에 사용자가 직접 선호하는 장소 및 시간에 운동을 함께 할 파트너
                  모집 및 약속 참여가 가능합니다. 직관적인 지도 기반 서비스로 진행 중인
                  약속을 한눈에 파악 가능합니다.
                </div>
              </div>
            </div>

            <div className=" px-[50px] pt-5 pb-10 rounded-[20px] bg-white shadow-md flex flex-col items-center">
              <img src="/images/location.svg" alt="" />
              <img src="/images/third_shadow.svg" alt="" />
            </div>
          </div>
        </BouncySection2>
        {/* 세 번쨰 */}
        <BouncySection2 delay={0.2} direction="up">
          <div className="sm:flex items-center gap-[140px] mt-[110px]">
            <div className="px-[50px] pt-5 pb-10 rounded-[20px] bg-white shadow-md flex flex-col items-center">
              <img src="/images/trophy.svg" alt="" />
              <img src="/images/third_shadow.svg" alt="" />
            </div>
            <div>
              <div className="text-[#313131] text-[28px] font-extrabold sm:text-[36px] sm:font-semibold mt-7 sm:mt-0">
                <span className="text-[#325EFF]">AI 자동 생성</span> 운동 약속
              </div>
              <div className="hidden sm:block">
                <div className="mt-[30px] text-[17px] font-semibold  text-gray-500 sm:text-[20px] sm:font-normal">
                  AI 기반으로 자동으로 운동 약속이 생성되며 ‘스포팅’ AI 자동
                </div>
                <div className="text-[17px] font-semibold  text-gray-500 sm:text-[20px] sm:font-normal">
                  생성 운동 약속의 참가자는 포인트 리워드를 받을 수 있습니다.
                </div>
              </div>
              <div className="block sm:hidden">
                <div className="mt-6 text-gray-500 text-[17px] font-semibold sm:mt-10 sm:text-[20px] sm:font-normal">
                  AI 기반으로 자동으로 운동 약속이 생성되며 <br />
                  ‘스포팅’ AI 자동 생성 운동 약속의 참가자는 <br />
                  포인트 리워드를 받을 수 있습니다.
                </div>
              </div>
            </div>
          </div>
        </BouncySection2>
        <img
          src="/images/second_blue.svg"
          alt=""
          className="absolute -top-[130px] -left-[130px] hidden sm:block"
        />
        <img
          src="/images/second_pink.svg"
          alt=""
          className="absolute top-[130px] -right-[130px] hidden sm:block"
        />
        <img
          src="/images/second_blue.svg"
          alt=""
          className="absolute -bottom-[120px] -left-[130px] hidden sm:block"
        />
      </div>
    </div>
  );
};

export default Third;
