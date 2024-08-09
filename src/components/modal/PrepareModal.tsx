'use client';
import { useModalStore } from '@/store/modal.store';
import React, { useRef } from 'react';
import useOnClickOutside from '@/hook/useOnClickOutside';

/**
 * 준비중 컨텐츠가 나오는 모달입니다.
 */

const PrepareModal = () => {
  const { setOpen } = useModalStore();
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setOpen(false));

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-30 z-50 flex justify-center items-start">
      <div
        ref={ref}
        className=" absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 ">
        <div className="px-6 py-[28px] bg-white rounded-[12px]">
          <div className="w-[312px] mx-auto">
            <div className="text-heading2 flex items-center justify-center w-full">
              회원 탈퇴awda
            </div>
            <div className="flex flex-col items-center mt-2 text-body4 text-gray400">
              <div>탈퇴하시면 모든 정보가 삭제됩니다.</div>
              <div>정말 탈퇴하시나요?</div>
            </div>
            <div className="flex items-center justify-center gap-2 mt-[28px]">
              <div
                onClick={() => setOpen(false)}
                className="py-[18px] cursor-pointer  flex-1 flex items-center justify-center text-title2 bg-gray100 rounded-[12px]">
                아니요
              </div>
              <div className="py-[18px] cursor-pointer flex-1 flex items-center justify-center text-title2 text-white bg-black rounded-[12px]">
                탈퇴하기
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrepareModal;
