'use client';

import React, { useEffect, useState } from 'react';
import { useToast } from './ToastContext';

interface ToastProps {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

const Toast: React.FC<ToastProps> = ({ id, message, type }) => {
  const { removeToast } = useToast();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hideToastUi = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    const removeToastUi = setTimeout(() => {
      setIsVisible(false);
      removeToast(id);
    }, 3500);

    return () => {
      clearTimeout(hideToastUi);
      clearTimeout(removeToastUi);
    };
  }, [id, removeToast]);

  const baseClasses =
    'fixed top-4 left-1/2 transform -translate-x-1/2 p-4 rounded-md shadow-lg max-w-sm w-full transition-all duration-300 ease-in-out';
  const animationClasses = isVisible ? 'animate-slideDown' : 'animate-slideUp';
  const typeClasses = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    info: 'bg-blue-500 text-white',
  };

  return (
    <div className={`${baseClasses} ${animationClasses} ${typeClasses[type]}`}>
      <div className='flex items-center justify-between'>
        <p className='font-medium'>{message}</p>
        <button
          onClick={() => removeToast(id)}
          className='ml-4 text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white'
          aria-label='Close'
        >
          <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20'>
            <path
              fillRule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Toast;
