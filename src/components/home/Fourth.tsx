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
          <div className="mt-[100px] flex items-center justify-center text-[50px] text-gray-900 font-bold">
            스포팅 이용 방법
          </div>
          <div className="flex items-center gap-[70px] justify-center mt-[110px] ">
            <div className="flex flex-col items-center -mt-8">
              <div className="w-4 h-4 bg-[#C7D3FF] rounded-full" />
              <div className="w-[2px] h-[220px] bg-[#C7D3FF] border border-[#C7D3FF] rounded-full" />
              <div className="w-4 h-4 bg-white border border-[#C7D3FF] rounded-full" />
              <div className="w-[2px] h-[220px] bg-[#C7D3FF] " />
              <div className="w-4 h-4 bg-white border border-[#C7D3FF] rounded-full" />
            </div>
            <div className="flex flex-col gap-[100px] items-center">
              <div className="py-[22px] px-[24px] bg-white border border-[#E3E3E3] rounded-[10px] ">
                <div className="text-gray-900 text-[20px] font-bold">메인 홈 화면</div>
                <div className="mt-[18px] text-[16px] text-gray-500">
                  첫째, 앱 첫 메인 홈 화면의 우측 하단
                </div>
                <div className="text-[16px] text-gray-500">
                  연필 모양 버튼을 터치해 주세요.
                </div>
              </div>
              <div>
                <div className="text-gray-900 text-[20px] font-bold">운동 약속 등록</div>
                <div className="mt-[18px] text-[16px] text-gray-500">
                  둘째, 종목, 장소, 모집 인원, 참여 조건,{' '}
                </div>
                <div className="text-[16px] text-gray-500">
                  일시, 제목, 내용을 입력한 후{' '}
                </div>
                <div className="text-[16px] text-gray-500">등록하기를 눌러주세요.</div>
              </div>
              <div>
                <div className="text-gray-900 text-[20px] font-bold">
                  운동 약속 게시물 생성
                </div>
                <div className="mt-[18px] text-[16px] text-gray-500">
                  셋째, ‘등록하기’ 버튼을 누르면, 동네{' '}
                </div>
                <div className="text-[16px] text-gray-500">
                  운동 약속 게시물이 생성됩니다.
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/use1.svg"
                alt=""
                className="rounded-xl shadow-xl border-2 border-gray-500"
              />
            </div>
            <div className="flex items-center gap-3">
              <img
                src="/images/use2.svg"
                alt=""
                className="rounded-xl shadow-xl border-2 border-gray-500"
              />
              <img
                src="/images/use3.svg"
                alt=""
                className="rounded-xl shadow-xl border-2 border-gray-500"
              />
            </div>
          </div>
          <img src="/images/sporting2.svg" alt="" className="w-full" />
        </div>
      )}

      {/* 참여하기 */}
      {category === 'participation' && (
        <div className="bg-gradient">
          <div className="mt-[100px] flex items-center justify-center text-[50px] text-gray-900 font-bold">
            스포팅 이용 방법
          </div>
          <div className="flex items-center gap-[30px] justify-center mt-[110px] ">
            <div className="flex flex-col items-center -mt-3">
              <div className="w-4 h-4 bg-[#C7D3FF] rounded-full" />
              <div className="w-[2px] h-[160px] bg-[#C7D3FF] border border-[#C7D3FF] rounded-full" />
              <div className="w-4 h-4 bg-white border border-[#C7D3FF] rounded-full" />
              <div className="w-[2px] h-[160px] bg-[#C7D3FF] " />
              <div className="w-4 h-4 bg-white border border-[#C7D3FF] rounded-full" />
              <div className="w-[2px] h-[160px] bg-[#C7D3FF] " />
              <div className="w-4 h-4 bg-white border border-[#C7D3FF] rounded-full" />
            </div>
            <div className="flex flex-col gap-[50px] items-center">
              <div className="py-[22px] px-[24px] bg-white border border-[#E3E3E3] rounded-[10px] ">
                <div className="text-gray-900 text-[20px] font-bold">홈 메인 화면</div>
                <div className="mt-[18px] text-[16px] text-gray-500">
                  첫째, 참여하고 싶은 종목 및 위치의
                </div>
                <div className="text-[16px] text-gray-500">아이콘을 터치하세요.</div>
              </div>
              <div>
                <div className="text-gray-900 text-[20px] font-bold">
                  운동 약속 리스트
                </div>
                <div className="mt-[18px] text-[16px] text-gray-500">
                  모집 중인 운동 약속 게시글 중 참여{' '}
                </div>
                <div className="text-[16px] text-gray-500">
                  하고 싶은 게시글을 터치하세요.{' '}
                </div>
              </div>
              <div>
                <div className="text-gray-900 text-[20px] font-bold">
                  운동 약속 게시글
                </div>
                <div className="mt-[18px] text-[16px] text-gray-500">
                  운동 약속 게시글 우측 상단 ‘참여하기’{' '}
                </div>
                <div className="text-[16px] text-gray-500">버튼을 눌러 참여하세요.</div>
              </div>
              <div className="-ml-4">
                <div className="text-gray-900 text-[20px] font-bold">보증금 안내</div>
                <div className="mt-[18px] text-[16px] text-gray-500">
                  건강한 운동 문화를 위해{' '}
                </div>
                <div className="text-[16px] text-gray-500">
                  보증금을 지불합니다. 건강한 운동
                </div>
                <div className="text-[16px] text-gray-500">
                  약속 후 보증금은 반환됩니다.
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/use4.svg"
                alt=""
                className="rounded-xl shadow-xl border-2 border-gray-500"
              />
            </div>
            <div className="flex items-center gap-3">
              <img
                src="/images/use5.svg"
                alt=""
                className="rounded-xl shadow-xl border-2 border-gray-500"
              />
              <img
                src="/images/use6.svg"
                alt=""
                className="rounded-xl shadow-xl border-2 border-gray-500"
              />
              <img
                src="/images/use7.svg"
                alt=""
                className="rounded-xl shadow-xl border-2 border-gray-500"
              />
            </div>
          </div>
          <img src="/images/sporting2.svg" alt="" className="w-full" />
        </div>
      )}
    </div>
  );
};

export default Fourth;
