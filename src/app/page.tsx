'use client';
import HomeIndex from '@/components/home/HomeIndex';
import { useNavStore } from '@/store/nav.store';

export default function Home() {
  const { currentNav } = useNavStore();
  return <div>{currentNav === 'home' && <HomeIndex />}</div>;
}
