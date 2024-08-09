'use client';
import React from 'react';
import { IoLogoApple } from 'react-icons/io5';

const Top = () => {
  return (
    <div className="relative">
      <img src="/images/bg1.svg" alt="" className="absolute top-[300px]" />
      <img src="/images/bg2.svg" alt="" className="absolute -top-[120px] right-0" />

      <div className="max-w-[1440px] w-full mx-auto mt-[115px]">
        <div className="flex items-center justify-center relative">
          <div className="absolute left-0 text-[64px] text-[#313131] font-extrabold">
            건강한 만남,
          </div>
          <img src="/images/phone.png" alt="" />
          <div className="absolute right-0 text-[64px] text-[#313131] font-extrabold">
            <span className="text-[#325EFF]">함께 운동</span> 하세요
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-[26px]">
        <img src="/images/shadow.svg" alt="" />
      </div>

      <div className="flex justify-center items-center gap-[30px] mt-[52px]">
        <div className="shadow-sm cursor-pointer w-[246px] h-[65px] rounded-xl flex items-center justify-center gap-[10px] bg-gray-900 text-xl text-white font-bold ">
          <div>
            <IoLogoApple color="white" size={30} />
          </div>
          <div>App Store</div>
        </div>

        <div className="shadow-sm cursor-pointer w-[246px] h-[65px] rounded-xl flex items-center justify-center gap-[10px] bg-gray-900 text-xl text-white font-bold">
          <div>
            <img src="/images/playstore.png" alt="playstore" className="w-6" />
          </div>
          <div>Google Play</div>
        </div>
      </div>
      <div className="mt-[78px] flex items-center justify-center gap-[29px]">
        <div className="bg-[#EAF3FF] py-[23px] px-[33px] rounded-[10px] max-w-[400px] w-full">
          <div className="text-[24px] text-[#0029BD] font-semibold">
            생활 체육에 주목합니다.
          </div>
          <div className="mt-4 text-[16px] text-gray-500 font-normal ">
            스포팅은 ‘생활 체육’의 가치에 주목합니다.
          </div>
          <div className="text-[16px] text-gray-500 font-normal">
            혼자 하기 어려웠던 운동을 근처 이웃들과 함께 합니다.
          </div>
          <div className="flex justify-end mt-6">
            <img src="/images/check.svg" alt="" />
          </div>
        </div>
        <div className="bg-[#EAF3FF] rounded-[10px] py-[23px] px-[33px] max-w-[400px] w-full">
          <div className="text-[24px] text-[#0029BD] font-semibold">
            건강한 만남에 주목합니다.
          </div>
          <div className="mt-4 text-[16px] text-gray-500 font-normal ">
            가벼운 산책부터 축구, 헬스와 같은 팀 스포츠까지.{' '}
          </div>
          <div className="text-[16px] text-gray-500 font-normal">
            함께 하는 단 하루의 건강한 추억을 만드는
          </div>
          <div className="text-[16px] text-gray-500 font-normal">
            커뮤니티를 꿈꿉니다.
          </div>
          <div className="flex justify-end mt-6">
            <img src="/images/chat.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="mt-[130px]">
        <img src="/images/sporting.svg" alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Top;
