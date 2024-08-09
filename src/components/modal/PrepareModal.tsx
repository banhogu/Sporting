'use client';
import { useModalStore } from '@/store/modal.store';
import React, { useRef } from 'react';
import useOnClickOutside from '@/hook/useOnClickOutside';
import { motion } from 'framer-motion';

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
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01]
          }}>
          <div className="px-6 py-[28px] bg-white rounded-[12px]">
            <div className="w-[312px] mx-auto">
              <div className="flex justify-center">
                <img src="/images/logo.svg" alt="" className="w-[200px]" />
              </div>
              <div className="mt-5 text-[22px] font-bold text-gray-800 flex justify-center">
                아직 서비스가 준비중이에요
              </div>
              <div className="flex flex-col items-center mt-2  text-gray400">
                <div className="text-md font-[500]">빠른 시일내에 만나요!</div>
              </div>
              <div className="flex items-center justify-center mt-[28px]">
                <div
                  onClick={() => setOpen(false)}
                  className="py-[16px] cursor-pointer flex-1 flex items-center font-semibold justify-center text-lg text-white bg-black rounded-[12px]">
                  확인
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrepareModal;
