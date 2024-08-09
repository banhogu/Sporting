'use client';
import { useNavStore } from '@/store/nav.store';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Gnb = () => {
  const { currentNav, setCurrentNav } = useNavStore();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => setIsMenuOpen((prev) => !prev);
  return (
    <div className="fixed z-[9999] bg-white top-0 w-full h-[66px] sm:h-[76px] flex items-center justify-between px-3 py-1 shadow-md sm:px-6 sm:py-4">
      <div onClick={() => router.push('/')} className="cursor-pointer">
        <img src="/images/logo.svg" alt="logo" className="w-[130px] sm:w-full" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-[18px] text-lg">
        <div
          onClick={() => setCurrentNav('home')}
          className={`px-3 py-2 flex justify-center items-center cursor-pointer
          ${currentNav === 'home' ? 'text-black font-bold' : 'text-gray-600 font-normal'}
        `}>
          Home
        </div>
        <div
          onClick={() => setCurrentNav('company')}
          className={`px-3 py-2 flex justify-center items-center cursor-pointer
          ${currentNav === 'company' ? 'text-black font-bold' : 'text-gray-600 font-normal'}
        `}>
          Company
        </div>
        <div
          onClick={() => setCurrentNav('center')}
          className={`px-3 py-2 flex justify-center items-center cursor-pointer
          ${currentNav === 'center' ? 'text-black font-bold' : 'text-gray-600 font-normal'}
        `}>
          Customer Center
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center">
        <div onClick={handleMenuToggle} className="cursor-pointer text-2xl">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {isMenuOpen && (
          <div className="fixed border-t-2 border-gray-400 top-[60px] right-0 bg-white w-full h-full shadow-lg flex flex-col items-start px-6 py-6">
            <div
              onClick={() => {
                setCurrentNav('home');
                setIsMenuOpen(false);
              }}
              className={`py-2 text-2xl cursor-pointer
              ${currentNav === 'home' ? 'text-black font-extrabold' : 'text-gray-600 font-semibold'}
            `}>
              Home
            </div>
            <div
              onClick={() => {
                setCurrentNav('company');
                setIsMenuOpen(false);
              }}
              className={`py-2 text-2xl cursor-pointer
              ${currentNav === 'company' ? 'text-black font-extrabold' : 'text-gray-600 font-semibold'}
            `}>
              Company
            </div>
            <div
              onClick={() => {
                setCurrentNav('center');
                setIsMenuOpen(false);
              }}
              className={`py-2 text-2xl cursor-pointer
              ${currentNav === 'center' ? 'text-black font-extrabold' : 'text-gray-600 font-semibold'}
            `}>
              Customer
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gnb;
