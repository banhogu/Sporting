'use client';
import { useNavStore } from '@/store/nav.store';
import { useRouter } from 'next/navigation';
import React from 'react';

const Gnb = () => {
  const { currentNav, setCurrentNav } = useNavStore();
  const router = useRouter();
  return (
    <div className="flex items-center justify-between px-6 py-4 shadow-md">
      <div onClick={() => router.push('/')} className="cursor-pointer">
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <div className="flex items-center gap-[18px] text-lg">
        <div
          onClick={() => setCurrentNav('home')}
          className={`px-3 py-2 flex justify-center items-center cursor-pointer
        ${currentNav === 'home' ? ' text-black font-bold ' : 'text-gray-600 font-normal'}
        `}>
          Home
        </div>
        <div
          onClick={() => setCurrentNav('company')}
          className={`px-3 py-2 flex justify-center items-center cursor-pointer
        ${currentNav === 'company' ? ' text-black font-bold ' : 'text-gray-600 font-normal'}
        `}>
          Company
        </div>
        <div
          onClick={() => setCurrentNav('center')}
          className={`px-3 py-2 flex justify-center items-center cursor-pointer
        ${currentNav === 'center' ? ' text-black font-bold ' : 'text-gray-600 font-normal'}
        `}>
          Customer Center
        </div>
      </div>
    </div>
  );
};

export default Gnb;
