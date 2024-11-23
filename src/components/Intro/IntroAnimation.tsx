'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function IntroAnimation() {
  const [showIntro, setShowIntro] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const fullText = 'I find joy in what I do.';
  const textRef = useRef('');
  const typingSpeed = 100;

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');

    if (!hasVisited) {
      setShowIntro(true);
    }
  }, []);

  useEffect(() => {
    if (!showIntro) return;
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        textRef.current += fullText[index];
        setCurrentText(textRef.current);
        index++;
      } else {
        clearInterval(typingInterval);

        // 인트로 애니메이션의 지속 시간을 조정합니다.
        setTimeout(() => {
          setShowIntro(false);
          sessionStorage.setItem('hasVisited', 'true');
        }, 1000);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [showIntro]);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='fixed inset-0 z-[100] flex items-center justify-center bg-black'
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className='flex flex-col items-center space-y-4'
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className='font-ghanachocolate text-3xl font-light text-white md:text-4xl lg:text-5xl'
            >
              {currentText}
            </motion.span>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: currentText === fullText ? 1 : 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <span className='text-lg text-white'>
                프론트엔드 개발자 <strong>신민혁</strong> 입니다.
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
