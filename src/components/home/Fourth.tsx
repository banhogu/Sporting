import React, { useState } from 'react';

const Fourth = () => {
  const [category, setCategory] = useState('recruit');

  return (
    <div>
      <div className="py-[25px] bg-gray-50">
        <div className="flex items-center justify-center text-[#325EFF] text-[20px] font-bold">
          How to use
        </div>
        <div className="flex items-center justify-center gap-[55px] my-[30px]">
          <div
            onClick={() => setCategory('recruit')}
            className={`bg-white cursor-pointer px-[80px] py-[30px] shadow-xl rounded-[16px] text-[20px]
            ${category === 'recruit' ? 'text-gray-900 font-bold' : 'text-gray-400 font-semibold'}
            `}>
            운동 약속 모집하기
          </div>
          <div
            onClick={() => setCategory('participation')}
            className={`bg-white cursor-pointer px-[80px] py-[30px] shadow-xl rounded-[16px] text-[20px]
            ${category === 'participation' ? 'text-gray-900 font-bold' : 'text-gray-400 font-semibold'}
            `}>
            운동 약속 참여하기
          </div>
        </div>
      </div>
      {/* 모집하기 */}
      {category === 'recruit' && (
        <div className="bg-gradient">
          <div className="mt-[140px] flex items-center justify-center text-[50px] text-gray-900 font-bold">
            스포팅 이용 방법
          </div>
          <div className="flex items-center gap-8 justify-center mt-[110px]">
            <div></div>
            <div>
              <img src="/images/use1.svg" alt="" />
            </div>
            <div className="flex items-center gap-3">
              <img src="/images/use2.svg" alt="" />
              <img src="/images/use3.svg" alt="" />
            </div>
          </div>
          <img src="/images/sporting2.svg" alt="" className="w-full -mt-[60px]" />
        </div>
      )}

      {/* 참여하기 */}
    </div>
  );
};

export default Fourth;
