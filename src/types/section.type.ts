import { ReactNode } from 'react';

export interface BouncySectionType {
  children: ReactNode;
  delay: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export interface SectionType {
  children: ReactNode;
  delay: number;
}
