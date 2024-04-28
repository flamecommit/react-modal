/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
'use client';

import { MouseEvent, ReactElement, useEffect, useRef, useState } from 'react';
import { NAME_SPACE } from '../constants/core';
import Portal from './Portal';

interface IProps {
  children: ReactElement;
  onBackgroundClick?: () => void;
}

export default function Modal({ children, onBackgroundClick }: IProps) {
  const [realShow, setRealShow] = useState<boolean>(false);
  const childRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setRealShow(true));
  }, []);

  const backgroundClickHandler = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && onBackgroundClick) {
      onBackgroundClick();
    }
  };

  useEffect(() => {
    document.body.classList.add('react-modal__body-active');

    return function cleanup() {
      document.body.classList.remove('react-modal__body-active');
    };
  }, []);

  return (
    <Portal selector="body">
      <div
        className={`${NAME_SPACE}__background${realShow ? ' react-modal__active' : ''}`}
        onClick={backgroundClickHandler}
      >
        <div ref={childRef} className={`react-modal__wrapper`}>
          {children}
        </div>
      </div>
    </Portal>
  );
}
