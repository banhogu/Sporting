'use client';
import CompanyIndex from '@/components/company/CompanyIndex';
import CustomerIndex from '@/components/customer/CustomerIndex';
import HomeIndex from '@/components/home/HomeIndex';
import { useNavStore } from '@/store/nav.store';

export default function Home() {
  const { currentNav } = useNavStore();
  return (
    <div>
      {currentNav === 'home' && <HomeIndex />}
      {currentNav === 'company' && <CompanyIndex />}
      {currentNav === 'center' && <CustomerIndex />}
    </div>
  );
}
