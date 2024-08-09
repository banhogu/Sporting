import React from 'react';

const Third = () => {
  return (
    <div>
      <div className="relative px-[92px] py-[77px] max-w-[1155px] bg-gray-50 w-full mx-auto my-[100px] rounded-[40px] border-[4px] border-white shadow-lg">
        <div className="text-[#325EFF] text-[16px] font-bold">SPORTING</div>
        <div className="text-[50px] font-bold text-gray-900">
          건전하고 간편한 운동 약속
        </div>
        {/* 첫번째 */}
        <div className="flex items-center gap-[140px] mt-[110px]">
          <div className="px-[50px] pt-5 pb-10 rounded-[20px] bg-white shadow-md flex flex-col items-center">
            <img src="/images/coin.svg" alt="" />
            <img src="/images/third_shadow.svg" alt="" />
          </div>
          <div>
            <div className="text-[#313131] text-[36px] font-semibold">
              <span className="text-[#325EFF]">보증금</span> 시스템
            </div>
            <div className="mt-[30px] text-[20px] font-normal text-gray-500">
              보증금 지불 후 약속에 참여하며 약속이 끝난 후 보증금은 반환
            </div>
            <div className="text-[20px] font-normal text-gray-500">
              됩니다. 단, 노쇼 및 불건전한 만남 등의 문제 발생 시 보증금은
            </div>
            <div className="text-[20px] font-normal text-gray-500">
              반환되지 않습니다. 보증금 시스템으로 건전하고 안전한 운동
            </div>
            <div className="text-[20px] font-normal text-gray-500">
              약속 문화를 형성합니다.
            </div>
          </div>
        </div>
        {/* 두번째 */}
        <div className="flex items-center gap-[140px] mt-[90px]">
          <div>
            <div className="text-[#313131] text-[36px] font-semibold">
              <span className="text-[#325EFF]">지도 기반</span> 서비스
            </div>
            <div className="mt-[30px] text-[20px] font-normal text-gray-500">
              지도 상에 사용자가 직접 선호하는 장소 및 시간에 운동을 함께
            </div>
            <div className="text-[20px] font-normal text-gray-500">
              할 파트너 모집 및 약속 참여가 가능합니다. 직관적인 지도 기반
            </div>
            <div className="text-[20px] font-normal text-gray-500">
              서비스로 진행 중인 약속을 한눈에 파악 가능합니다.
            </div>
          </div>
          <div className="px-[50px] pt-5 pb-10 rounded-[20px] bg-white shadow-md flex flex-col items-center">
            <img src="/images/location.svg" alt="" />
            <img src="/images/third_shadow.svg" alt="" />
          </div>
        </div>
        {/* 세 번쨰 */}
        <div className="flex items-center gap-[140px] mt-[110px]">
          <div className="px-[50px] pt-5 pb-10 rounded-[20px] bg-white shadow-md flex flex-col items-center">
            <img src="/images/trophy.svg" alt="" />
            <img src="/images/third_shadow.svg" alt="" />
          </div>
          <div>
            <div className="text-[#313131] text-[36px] font-semibold">
              <span className="text-[#325EFF]">AI 자동 생성</span> 운동 약속
            </div>
            <div className="mt-[30px] text-[20px] font-normal text-gray-500">
              AI 기반으로 자동으로 운동 약속이 생성되며 ‘스포팅’ AI 자동
            </div>
            <div className="text-[20px] font-normal text-gray-500">
              생성 운동 약속의 참가자는 포인트 리워드를 받을 수 있습니다.
            </div>
          </div>
        </div>
        <img
          src="/images/second_blue.svg"
          alt=""
          className="absolute -top-[130px] -left-[130px]"
        />
        <img
          src="/images/second_pink.svg"
          alt=""
          className="absolute top-[130px] -right-[130px]"
        />
        <img
          src="/images/second_blue.svg"
          alt=""
          className="absolute -bottom-[120px] -left-[130px] "
        />
      </div>
    </div>
  );
};

export default Third;
