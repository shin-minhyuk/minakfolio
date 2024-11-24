'use client';

import Toast from './Toast';
import { useToast } from './ToastContext';

export function ToastContainer() {
  const { toasts } = useToast();
  console.log(toasts);

  return (
    <div className='fixed bottom-4 right-4 z-50'>
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  );
}
