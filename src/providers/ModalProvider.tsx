'use client';
import PrepareModal from '@/components/modal/PrepareModal';
import { useModalStore } from '@/store/modal.store';
import React from 'react';
import { createPortal } from 'react-dom';

/**
 * 전역 모달 상태를 감지하여 portalRoot위치에 모달을 렌더링하는 역할을 하는 provider입니다.
 */

const ModalProvider = () => {
  const { open, modalType } = useModalStore();
  const $portalRoot =
    typeof window !== 'undefined' ? document.getElementById('root-portal') : null;

  if ($portalRoot == null) {
    return null;
  }
  return createPortal(
    <div>{open && modalType === 'prepare' && <PrepareModal />}</div>,
    $portalRoot
  );
};

export default ModalProvider;
