/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
'use client';

import { MouseEvent, ReactElement, useEffect, useState } from 'react';
import { NAME_SPACE } from '../constants/core';
import Portal from './Portal';

interface IProps {
  children: ReactElement;
  className?: string;
  onBackgroundClick?: () => void;
}

export default function Modal({
  children,
  className = '',
  onBackgroundClick,
}: IProps) {
  const [realShow, setRealShow] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);

  const backgroundClickHandler = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && onBackgroundClick) {
      onBackgroundClick();
    }
  };

  useEffect(() => {
    document.body.classList.add('react-modal__body-active');

    return () => document.body.classList.remove('react-modal__body-active');
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setTimeout(() => setRealShow(true), 30);
  }, []);

  return (
    <>
      {isClient && (
        <Portal selector="body">
          <div
            className={`${NAME_SPACE}__wrapper${className ? ` ${className}` : ''}`}
            data-active={realShow}
            onClick={backgroundClickHandler}
          >
            <div className={`${NAME_SPACE}__modalbox`}>{children}</div>
          </div>
        </Portal>
      )}
    </>
  );
}
