'use client';
import { BouncySectionType } from '@/types/section.type';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

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
      <div className="relative px-9 py-9 sm:px-[92px] sm:py-[77px] max-w-[1155px] w-full pb-20 mt-[70px] sm:mx-auto sm:mt-[100px] rounded-[40px] shadow-lg">
        {/* 첫번째 */}
        <BouncySection2 delay={0.2} direction="up">
          <div className=" sm:flex items-center gap-[140px] mt-6 sm:mt-0">
            <div className="px-[50px] pt-5 pb-10 rounded-[20px flex flex-col items-center">
              <img src="/images/company1.svg" alt="" />
            </div>
            <div>
              <div className="text-[#313131] text-[32px] font-[900] sm:text-[36px] sm:font-semibold mt-7 sm:mt-0">
                <span className="text-[#00E3FF]">PLAY</span>
              </div>
              <div className="hidden sm:block text-white sm:text-[20px] sm:font-[500] text-[17px]">
                <div className="mt-[30px]  ">
                  스포팅은 운동을 쉽게 즐길 수 있는 문화를 만들고자 합니다.
                </div>
                <div>'Play'는 스포팅의 핵심 가치로, 운동을 통해 건강한 삶을</div>
                <div>살고자 하는 개개인을 지원하며 활력있는 사회를 꿈꿉니다.</div>
              </div>
              <div className="block sm:hidden">
                <div className="mt-6 text-white text-[18px] font-semibold sm:mt-10 sm:text-[20px] sm:font-normal">
                  스포팅은 운동을 쉽게 즐길 수 있는 문화를 만들고자 합니다. 'Play'는
                  스포팅의 핵심 가치로, 운동을 통해 건강한 삶을 살고자 하는 개개인을
                  지원하며 활력있는 사회를 꿈꿉니다.
                </div>
              </div>
            </div>
          </div>
        </BouncySection2>
        {/* 두번째 */}
        <BouncySection2 delay={0.2} direction="up">
          <div className="sm:flex items-center gap-[140px] mt-[110px]">
            <div>
              <div className="text-[#313131] text-[32px] font-[900] sm:text-[36px] sm:font-semibold mt-10 sm:mt-0">
                <span className="text-[#00E3FF]">START</span>
              </div>

              <div className="hidden sm:block text-white sm:text-[20px] sm:font-[500] text-[17px]">
                <div className="mt-[30px]  ">스포팅은 당신의 첫걸음을 응원합니다.</div>
                <div>'Start’는 용기와 도전을 상징하며, 운동인으로 살아가고자 하는</div>
                <div>여러분의 든든한 파트너가 되고자 합니다.</div>
              </div>
              <div className="block sm:hidden">
                <div className="mt-6 text-white text-[18px] font-semibold mb-8 sm:mb-0 sm:mt-10 sm:text-[20px] sm:font-normal">
                  스포팅은 당신의 첫걸음을 응원합니다. ‘Start’는 용기와 도전을 상징하며,
                  운동인으로 살아가고자 하는 여러분의 든든한 파트너가 되고자 합니다.
                </div>
              </div>
            </div>

            <div className=" px-[50px] pt-5 pb-10 rounded-[20px flex flex-col items-center">
              <img src="/images/company2.svg" alt="" />
            </div>
          </div>
        </BouncySection2>
        {/* 세 번쨰 */}
        <BouncySection2 delay={0.2} direction="up">
          <div className="sm:flex items-center gap-[140px] mt-[80px] pb-[70px] sm:pb-[120px]">
            <div className="px-[50px] pt-5 pb-10 rounded-[20px] flex flex-col items-center">
              <img src="/images/company3.svg" alt="" />
            </div>
            <div>
              <div className="text-[#313131] text-[32px] font-[900] sm:text-[36px] sm:font-semibold mt-7 sm:mt-0">
                <span className="text-[#00E3FF]">CHANGE</span>
              </div>
              <div className="hidden sm:block text-white sm:text-[20px] sm:font-[500] text-[17px]">
                <div className="mt-[30px]  ">
                  스포팅은 운동 문화의 긍정적인 변화를 선도합니다.
                </div>
                <div>‘Change’는 여러분의 변화와 성장의 순간을 함께 하고자 하는</div>
                <div>스포팅의 가치를 담고 있습니다.</div>
              </div>
              <div className="block sm:hidden">
                <div className="mt-6 text-white text-[18px] font-semibold sm:mt-10 sm:text-[20px] sm:font-normal">
                  스포팅은 운동 문화의 긍정적인 변화를 선도합니다. ‘Change’는 여러분의
                  변화와 성장의 순간을 함께 하고자 하는 스포팅의 가치를 담고 있습니다.
                </div>
              </div>
            </div>
          </div>
        </BouncySection2>
      </div>
    </div>
  );
};

export default Third;
