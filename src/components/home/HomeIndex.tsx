'use client';
import React, { useEffect } from 'react';
import Top from './Top';
import dynamic from 'next/dynamic';
import { useModalStore } from '@/store/modal.store';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

const Second = dynamic(() => import('./Second'), { ssr: false });
const Third = dynamic(() => import('./Third'), { ssr: false });
const Fourth = dynamic(() => import('./Fourth'), { ssr: false });

const HomeIndex = () => {
  const { open } = useModalStore();

  useEffect(() => {
    if (open) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }
  }, [open]);
  return (
    <div>
      <Top />
      <Second />
      <Third />
      <Fourth />
    </div>
  );
};

export default HomeIndex;
