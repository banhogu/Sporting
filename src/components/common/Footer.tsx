'use client';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { SiNaver } from 'react-icons/si';
import { FaFacebookF } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useNavStore } from '@/store/nav.store';

const Footer = () => {
  const { setCurrentNav } = useNavStore();
  const router = useRouter();
  return (
    <div className="border-t-2 border-gray-200 py-[70px] px-[100px] flex gap-[220px] justify-center">
      <div className="flex flex-col gap-6 items-center">
        <div>
          <img src="/images/logo.svg" alt="" />
        </div>
        <div className="flex items-center gap-[6px]">
          <Link href={'https://www.instagram.com/blaybus_/'} target="_blank">
            <div className="p-[10px] bg-[#EAEAEA] rounded-full cursor-pointer">
              <FaInstagram size={22} />
            </div>
          </Link>

          <div className="p-[10px] bg-[#EAEAEA] rounded-full cursor-pointer">
            <SiNaver size={18} />
          </div>
          <div className="p-[10px] bg-[#EAEAEA] rounded-full cursor-pointer">
            <FaFacebookF size={22} />
          </div>
        </div>
      </div>
      <div className="flex gap-[100px]">
        <div className="flex flex-col gap-8">
          <div className="text-[16px] font-bold">서비스</div>
          <div className="flex flex-col gap-3 text-[16px] font-normal">
            <div onClick={() => setCurrentNav('home')} className="cursor-pointer">
              Home
            </div>
            <div onClick={() => setCurrentNav('company')} className="cursor-pointer">
              Company
            </div>
            <div onClick={() => setCurrentNav('center')} className="cursor-pointer">
              Customer Center
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="text-[16px] font-bold">회사</div>
          <div className="flex flex-col gap-3 text-[16px] font-normal">
            <div className="cursor-pointer">회사 소개</div>
            <div className="cursor-pointer">스포팅</div>
            <div className="cursor-pointer">블로그</div>
            <div className="cursor-pointer">공고</div>
            <div className="cursor-pointer">채용</div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="text-[16px] font-bold">문의</div>
          <div className="flex flex-col gap-3 text-[16px] font-normal">
            <div className="cursor-pointer">입점문의</div>
            <div className="cursor-pointer">광고 PR</div>
            <div className="cursor-pointer">광고 문의</div>
            <div className="cursor-pointer">IR</div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="text-[16px] font-bold">고객센터</div>
          <div className="flex flex-col gap-3 text-[16px] font-normal">
            <div>전화 : 010-2785-8099</div>
            <div>이메일 : sporting.offi@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
