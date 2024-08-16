'use client';
import { useNavStore } from '@/store/nav.store';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Gnb = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { currentNav, setCurrentNav } = useNavStore(); //현재 카테고리
  const [isMenuOpen, setIsMenuOpen] = useState(false); //모바일 메뉴 열림상태
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleMenuToggle = () => setIsMenuOpen((prev) => !prev); //모바일 메뉴 열림 변경 함수

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY > 60) {
        // 아래로 스크롤
        setIsNavVisible(false);
      } else {
        // 위로 스크롤
        setIsNavVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <div
      className={`fixed z-[9998] bg-white top-0 w-full h-[66px] sm:h-[76px] flex items-center justify-between px-3 py-1 shadow-md sm:px-6 sm:py-4 transition-transform duration-300 ${
        isNavVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
      <div onClick={() => router.push('/')} className="cursor-pointer">
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={147}
          height={27}
          className="w-[130px] sm:w-full"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-[18px] text-[19px]">
        <div
          onClick={() => {
            setCurrentNav('home');
            router.replace('/');
          }}
          className={`px-3 py-2 flex justify-center items-center cursor-pointer font-[700]
          ${pathname === '/' && currentNav === 'home' ? 'text-black' : 'text-gray-600 font-[500]'}
        `}>
          Home
        </div>
        <div
          onClick={() => {
            setCurrentNav('company');
            router.replace('/');
          }}
          className={`px-3 py-2 flex justify-center items-center cursor-pointer font-[800]
          ${pathname === '/' && currentNav === 'company' ? 'text-black' : 'text-gray-600 font-[500]'}
        `}>
          Company
        </div>
        <div
          onClick={() => {
            setCurrentNav('center');
            router.replace('/');
          }}
          className={`px-3 py-2 flex justify-center items-center cursor-pointer font-[800]
          ${pathname === '/' && currentNav === 'center' ? 'text-black' : 'text-gray-600 font-[500]'}
        `}>
          Customer Center
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="sm:hidden flex items-center">
        <div onClick={handleMenuToggle} className="cursor-pointer text-2xl mr-2">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {isMenuOpen && (
          <div className="z-[9999] fixed border-t border-gray-400 top-[60px] right-0 gap-1 bg-white w-full h-screen shadow-lg flex flex-col items-start px-6 py-6">
            <div
              onClick={() => {
                setCurrentNav('home');
                setIsMenuOpen(false);
                router.replace('/');
              }}
              className={`py-3 text-[26px] cursor-pointer font-[900]
              ${pathname === '/' && currentNav === 'home' ? 'text-black' : 'text-gray-400 font-[600]'}
            `}>
              Home
            </div>
            <div
              onClick={() => {
                setCurrentNav('company');
                setIsMenuOpen(false);
                router.replace('/');
              }}
              className={`py-3 text-[26px] cursor-pointer font-[900]
              ${pathname === '/' && currentNav === 'company' ? 'text-black ' : 'text-gray-400 font-[600]'}
            `}>
              Company
            </div>
            <div
              onClick={() => {
                setCurrentNav('center');
                setIsMenuOpen(false);
                router.replace('/');
              }}
              className={`py-3 text-[26px] cursor-pointer font-[900]
              ${pathname === '/' && currentNav === 'center' ? 'text-black ' : 'text-gray-400 font-[600]'}
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
