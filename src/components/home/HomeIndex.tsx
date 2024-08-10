'use client';
import React, { useEffect, useState } from 'react';
import Top from './Top';
import dynamic from 'next/dynamic';
import { useModalStore } from '@/store/modal.store';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import ToTop from '../common/ToTop';

const Second = dynamic(() => import('./Second'), { ssr: false });
const Third = dynamic(() => import('./Third'), { ssr: false });
const Fourth = dynamic(() => import('./Fourth'), { ssr: false });

const debounce = (func, wait) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
};

const HomeIndex = () => {
  const { open } = useModalStore();
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (open) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }
  }, [open]);

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (window.pageYOffset > 1500) {
        setShowToTop(true);
      } else {
        setShowToTop(false);
      }
    }, 200); // 200ms 간격으로 스크롤 이벤트를 실행

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className=" sm:mt-[30px] overflow-x-hidden">
      <Top />
      <Second />
      <Third />
      <Fourth />
      {showToTop && <ToTop />}
    </div>
  );
};

export default HomeIndex;
