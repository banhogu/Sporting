import { ReactNode } from 'react';

/**
 * framer 적용을 위한 타입입니다.
 * delay -> 여러개의 framer 컴포넌트가 존재할 때 delay에 지정한 시간만큼 기다린 후 실행됩니다.
 * direction -> frmaer 컴포넌트의 모션 위치를 지정합니다.
 */

export interface BouncySectionType {
  children: ReactNode;
  delay: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export interface SectionType {
  children: ReactNode;
  delay: number;
}
