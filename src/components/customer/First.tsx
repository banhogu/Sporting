'use client';
import { useRef, useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';
import { SlArrowUp } from 'react-icons/sl';
import { motion, useInView } from 'framer-motion';
import { SectionType } from '@/types/section.type';

const Section = ({ children, delay = 0 }: SectionType) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="box"
      animate={
        isInView
          ? {
              scale: [1, 1.25, 1.25, 1, 1],
              rotate: [0, 0, 10, 10, 0],
              borderRadius: ['0%', '0%', '60%', '60%', '0%']
            }
          : {}
      }
      transition={{
        duration: 2,
        ease: 'easeInOut',
        times: [0, 0.2, 0.3, 0.5, 1],
        repeatDelay: 1
      }}>
      {children}
    </motion.div>
  );
};

const First = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const toggleContent = (index) => {
    switch (index) {
      case 1:
        setIsOpen1(!isOpen1);
        break;
      case 2:
        setIsOpen2(!isOpen2);
        break;
      case 3:
        setIsOpen3(!isOpen3);
        break;
      case 4:
        setIsOpen4(!isOpen4);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <div className="flex flex-col items-center pt-[60px] sm:pt-[108px]">
        <img src="/images/file.svg" alt="" />
        <div className="mt-6 text-[#325EFF] text-[24px] font-[800] sm:font-[500]">
          Customer Center
        </div>
        <div className="mt-6 text-gray-900 text-[34px] font-[800] sm:text-[48px] sm:font-[700]">
          무엇을 도와드릴까요?
        </div>
      </div>

      <div className="mt-[50px] sm:mt-[100px] flex flex-col items-center gap-6">
        <div
          onClick={() => toggleContent(1)}
          className="cursor-pointer max-w-[360px] sm:max-w-[900px] w-full justify-between flex items-center gap-8 px-[17px] py-[20px] sm:px-[22px] sm:py-[25px] bg-[#F5F5F5] rounded-[10px]">
          <div className="text-[20px] font-[600] sm:text-[27px] sm:font-[500] text-gray-400">
            Q
          </div>
          <div className="flex-1 text-[17px] font-[600] sm:text-[21px] sm:font-[500] text-gray-700">
            신고 접수 방법이 궁금해요.
          </div>
          {isOpen1 ? (
            <SlArrowUp className="text-[17px] sm:text-[22px]" />
          ) : (
            <SlArrowDown className="text-[17px] sm:text-[22px]" />
          )}
        </div>
        {isOpen1 && (
          <div className="max-w-[900px] w-full justify-between flex gap-8 px-[19px]  sm:px-[22px] sm:py-[25px] rounded-[10px]">
            <div className="ml-3 sm:ml-0 text-[22px] font-[600] sm:text-[27px] sm:font-[500] text-gray-400">
              A
            </div>
            <div className=" flex-1 text-[16px] font-[600] sm:text-[19px] sm:font-[500] text-gray-700">
              불편함을 겪게 해드려 죄송합니다. 운동 종료 후 앱에 접속 시 함께 운동한
              파트너에 대한 후기를 남길 수 있고, 추가적으로 신고기능을 이용하실 수
              있습니다. 또한, 스포팅 문의전화 010-2785-8099 와 이메일
              sporting.offi@gmail.com을 통해서 신고 접수를 받고 있으니 건강한 스포츠
              문화를 위해 여러분들의 적극적인 협조 부탁드립니다.
            </div>
          </div>
        )}
        <div
          onClick={() => toggleContent(2)}
          className="cursor-pointer max-w-[360px] sm:max-w-[900px] w-full justify-between flex items-center gap-8 px-[17px] py-[20px] sm:px-[22px] sm:py-[25px] bg-[#F5F5F5] rounded-[10px]">
          <div className="text-[20px] font-[600] sm:text-[27px] sm:font-[500] text-gray-400">
            Q
          </div>
          <div className="flex-1 text-[17px] font-[600] sm:text-[21px] sm:font-[500] text-gray-700">
            신고를 받은 사용자는 어떤 불이익이 있나요.
          </div>
          {isOpen2 ? (
            <SlArrowUp className="text-[17px] sm:text-[22px]" />
          ) : (
            <SlArrowDown className="text-[17px] sm:text-[22px]" />
          )}
        </div>
        {isOpen2 && (
          <div className="max-w-[900px] w-full justify-between flex gap-8 px-[19px] sm:px-[22px] sm:py-[25px] rounded-[10px]">
            <div className="ml-3 sm:ml-0 text-[22px] font-[600] sm:text-[27px] sm:font-[500] text-gray-400">
              A
            </div>
            <div className=" flex-1 text-[16px] font-[600] sm:text-[19px] sm:font-[500] text-gray-700">
              여러분께서 보내주신 신고 내용 기반으로 빈도 및 심각성 등을 고려하여 보증금
              미환불부터 서비스 이용 정지까지 스포팅 이용에 제한이 생길 수 있습니다.
            </div>
          </div>
        )}

        <div
          onClick={() => toggleContent(3)}
          className="cursor-pointer max-w-[360px] sm:max-w-[900px] w-full justify-between flex items-center gap-8 px-[17px] py-[20px] sm:px-[22px] sm:py-[25px] bg-[#F5F5F5] rounded-[10px]">
          <div className="text-[20px] font-[600] sm:text-[27px] sm:font-[500] text-gray-400">
            Q
          </div>
          <div className="flex-1 text-[17px] font-[600] sm:text-[21px] sm:font-[500] text-gray-700">
            다른 지역에서 운동 약속을 잡고 싶어요.
          </div>
          {isOpen3 ? (
            <SlArrowUp className="text-[17px] sm:text-[22px]" />
          ) : (
            <SlArrowDown className="text-[17px] sm:text-[22px]" />
          )}
        </div>
        {isOpen3 && (
          <div className="max-w-[900px] w-full justify-between flex gap-8 px-[19px] sm:px-[22px] sm:py-[25px] rounded-[10px]">
            <div className="ml-3 sm:ml-0 text-[22px] font-[600] sm:text-[27px] sm:font-[500] text-gray-400">
              A
            </div>
            <div className=" flex-1 text-[16px] font-[600] sm:text-[19px] sm:font-[500] text-gray-700">
              아직 스포팅 서비스가 확장되지 않은 지역인 것 같습니다. 스포팅 이메일
              sporting.offi@gmail.com로 해당 지역 및 문의를 보내주신다면 검토를 통해 추후
              서비스 확장 지역을 고려하는데 도움이 될 것 같습니다.
            </div>
          </div>
        )}

        <div
          onClick={() => toggleContent(4)}
          className="cursor-pointer max-w-[360px] sm:max-w-[900px] w-full justify-between flex items-center gap-8 px-[17px] py-[20px] sm:px-[22px] sm:py-[25px] bg-[#F5F5F5] rounded-[10px]">
          <div className="text-[20px] font-[600] sm:text-[27px] sm:font-[500] text-gray-400">
            Q
          </div>
          <div className="flex-1 text-[17px] font-[600] sm:text-[21px] sm:font-[500] text-gray-700">
            서비스 사용 중 문제가 발생했어요.
          </div>
          {isOpen4 ? (
            <SlArrowUp className="text-[17px] sm:text-[22px]" />
          ) : (
            <SlArrowDown className="text-[17px] sm:text-[22px]" />
          )}
        </div>
        {isOpen4 && (
          <div className="max-w-[900px] w-full justify-between flex gap-8 px-[19px] sm:px-[22px] sm:py-[25px] rounded-[10px]">
            <div className="ml-3 sm:ml-0 text-[22px] font-[600] sm:text-[27px] sm:font-[500] text-gray-400">
              A
            </div>
            <div className=" flex-1 text-[16px] font-[600] sm:text-[19px] sm:font-[500] text-gray-700">
              서비스 사용 중 문제가 발생하면 고객센터로 연락 주시면 신속하게 대응해
              드리겠습니다. 이메일 sporting.offi@gmail.com 또는 문의 전화 010-2785-8099로
              문의해 주세요.
            </div>
          </div>
        )}
      </div>

      <div className="w-full bg-[#EFF7FF] mt-[60px] sm:mt-[140px] py-14">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-[140px]">
          <div className="flex flex-col">
            <div className="text-gray-900 text-[24px] font-[700] sm:text-[32px] sm:font-[700]">
              스포팅 고객센터에서
            </div>
            <div className="text-gray-900 text-[24px] font-[700] sm:text-[32px] sm:font-[700]">
              언제나 상담을 받을 수 있어요{' '}
            </div>
            <div className="hidden sm:block">
              <div className="text-gray-500 text-[18px] font-[500] mt-16">
                상담 | sporting.offi@gmail.com
              </div>
              <div className="text-gray-500 text-[18px] font-[500]">
                전화 | 010 - 2785 - 8099
              </div>
            </div>
          </div>
          <Section delay={1.5}>
            <img src="/images/lock.svg" alt="" className="mt-5 sm:mt-0" />
          </Section>
          <div className="sm:hidden">
            <div className="text-gray-600 text-[18px] font-[600] sm:font-[500] ">
              상담 | sporting.offi@gmail.com
            </div>
            <div className="text-gray-600 text-[18px] mt-1 font-[600] sm:font-[500]">
              전화 | 010 - 2785 - 8099
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
