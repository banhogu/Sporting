import { create } from 'zustand';

/**
 * currentNav : home, company, center
 * currentNav에 지정된 상태값에 따라 Main 페이지의 컴포넌트를 교체하여 렌더링합니다.
 */

interface useNavStoreType {
  currentNav: string;
  setCurrentNav: (payload: string) => void;
}

export const useNavStore = create<useNavStoreType>((set) => ({
  currentNav: 'home',
  setCurrentNav: (payload: string) =>
    set(() => ({
      currentNav: payload
    }))
}));
