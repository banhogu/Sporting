'use client';
import { SectionType } from '@/types/section.type';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

const Section = ({ children, delay = 0 }: SectionType) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateX: -180 }}
      animate={{
        opacity: isInView ? 1 : 0,
        translateX: isInView ? 0 : 50
      }}
      transition={{
        duration: 0.3,
        ease: 'easeIn',
        delay: isInView ? delay : 0
      }}>
      {children}
    </motion.div>
  );
};

const Section2 = ({ children, delay = 0 }: SectionType) => {
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
    <div>
      {/* 데스크톱 */}
      <div className="hidden sm:flex flex-col items-center gap-5 mt-16">
        <div>
          <img src="/images/inform.svg" alt="" />
        </div>
        <div className="text-[22px] text-gray-400 font-semibold">Team Vision</div>
        <div className="text-[52px] text-white font-[800]">
          <span className="text-[#00BEFF]">Play</span> with Sporting
        </div>
      </div>
      {/* 모바일 */}
      <div className="flex flex-col items-center gap-5 mt-16 sm:hidden">
        <div>
          <img src="/images/inform.svg" alt="" />
        </div>
        <div className="text-[22px] text-gray-400 font-semibold">Team Vision</div>
      </div>
      <div className="text-[52px] text-white font-[800] mt-5 ml-8 flex flex-col sm:hidden">
        <Section delay={0.2}>
          <div className="text-[#00BEFF]">Play</div>
        </Section>
        <Section delay={0.35}>
          <div>With</div>
        </Section>
        <Section delay={0.5}>
          <div>Sporting</div>
        </Section>
      </div>
      {/* 섹션 */}
      <section className="mt-[70px] flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-[18px]">
        {/* 농구공 */}
        <Section2 delay={0.2}>
          <div className="max-w-[370px] sm:max-w-[478px] w-full flex flex-col p-[24px] sm:p-[46px] border-2 border-[#ffffff33] shadow-lg bg-[#ffffff33] rounded-[40px]">
            <div className="text-[24px] font-[800] text-white">
              <span className="text-[#00BEFF]">Start</span> with Sporting
            </div>
            <div className="mt-4 sm:mt-10">
              <div className="text-gray-300 text-lg font-[700]">Team Mission</div>
              <div className="text-gray-300 text-lg font-[600] mt-3">
                스포팅은 운동인으로 살아가고자 하는 당신의 삶을 응원합니다. 운동으로
                향하는 첫걸음을 스포팅이 함께 하겠습니다. 스포팅팀은 매일의 건강한 일상을
                함께 열기 위해 존재합니다.{' '}
              </div>
              <div className="flex justify-end mt-2 sm:mt-0">
                <img src="/images/ball1.svg" alt="" />
              </div>
            </div>
          </div>
        </Section2>
        {/* 축구공 */}
        <Section2 delay={0.2}>
          <div className="max-w-[370px] sm:max-w-[478px] w-full flex flex-col p-[24px] sm:p-[46px] border-2 border-[#ffffff33] shadow-lg bg-[#ffffff33] rounded-[40px]">
            <div className="text-[24px] font-[800] text-white">
              <span className="text-[#00BEFF]">Change</span> with Sporting
            </div>
            <div className="mt-4 sm:mt-10">
              <div className="text-gray-300 text-lg font-[700]">
                스포팅과 함께 바꿀 스포츠 문화
              </div>
              <div className="text-gray-300 text-lg font-[600] mt-3">
                스포팅은 생활체육인들 간의 네트워크 형성하며, 정확한 운동 시설 정보
                제공합니다. 운동 모임 내 포용과 다양성 추구하며 스포츠에 대한 진입장벽
                낮추는 것을 목표로 합니다.
              </div>
              <div className="flex justify-end mt-2 sm:mt-0">
                <img src="/images/ball2.svg" alt="" />
              </div>
            </div>
          </div>
        </Section2>
      </section>
      <div className="mt-[100px] sm:mt-[250px]">
        <img src="/images/sporting3.svg" alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Second;
