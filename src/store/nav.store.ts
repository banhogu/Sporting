import { create } from 'zustand';

/**
 * currentNav : home, company, center
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
