'use client';

import React, { useState, useEffect } from 'react';

export default function Intro() {
  const [currentText, setCurrentText] = useState<string[]>([]); // 현재 타이핑된 글자 배열
  const [lineIndex, setLineIndex] = useState(0); // 현재 타이핑 중인 줄
  const [startTyping, setStartTyping] = useState(false); // 타이핑 시작 여부
  const [showMouseComponent, setShowMouseComponent] = useState(false); // 마우스 컴포넌트 표시 여부
  const [showCustomBar, setShowCustomBar] = useState(false);

  const lines = [
    { text: '안녕하세요', color: '#fff9f9' },
    { text: '새로운 도전에 성장하는', color: '#ecb921' },
    { text: '프론트엔드 개발자', color: '#c5554d' },
    { text: '신민혁 입니다', color: '#14a211' },
  ]; // 전체 문구 배열
  const typingSpeed = 100; // 타이핑 속도 (ms)
  const lineDelay = 100; // 한 줄 타이핑 완료 후 대기 시간 (ms)

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');

    const customBarTime = hasVisited ? 0 : 4000;
    const startTime = hasVisited ? 0 : 4000;
    const mouseShowTime = hasVisited ? 6000 : 9500;

    const customBarTimer = setTimeout(() => {
      setShowCustomBar(true);
    }, customBarTime);

    const startTypingTimer = setTimeout(() => {
      setStartTyping(true);
    }, startTime);

    const mouseShowTimer = setTimeout(() => {
      setShowMouseComponent(true);
    }, mouseShowTime);

    return () => {
      clearTimeout(startTypingTimer);
      clearTimeout(mouseShowTimer);
      clearTimeout(customBarTimer);
    };
  }, []);

  useEffect(() => {
    if (!startTyping || lineIndex >= lines.length) return; // 모든 줄 타이핑 완료 시 종료

    let currentIndex = 0;

    const typingEffect = setInterval(() => {
      if (currentIndex < lines[lineIndex].text.length) {
        const nextChar = lines[lineIndex].text[currentIndex]; // 현재 줄의 글자 가져오기
        setCurrentText((prev) => [...prev, nextChar]); // 현재 줄에 한 글자씩 추가
        currentIndex++;
      } else {
        clearInterval(typingEffect); // 현재 줄 타이핑 완료 시 종료

        setTimeout(() => {
          setLineIndex((prev) => prev + 1); // 다음 줄로 이동
          setCurrentText([]); // 타이핑 초기화
        }, lineDelay); // 줄 간 대기 시간
      }
    }, typingSpeed);

    return () => clearInterval(typingEffect); // 컴포넌트 언마운트 시 타이머 정리
  }, [lineIndex, startTyping]); // 줄 변경 시 재실행

  return (
    <section
      className='relative w-auto overflow-hidden'
      style={{
        height: 'calc(100dvh + 173px)',
      }}
    >
      {/* snow */}
      <div
        className='custom-snow pointer-events-none absolute -top-[900px] left-0 right-0 z-20 block w-full'
        style={{ height: 'calc((100dvh + 173px)*2)' }}
      />
      {/* title */}
      <div
        className='relative flex flex-col items-center justify-center bg-[#373737] py-[72px]'
        style={{
          height: 'calc(100dvh)',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/imgs/intro_background.jpg")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <h2 className='z-20 mx-auto mb-[36px] flex flex-col gap-2 text-center font-aggro text-5xl font-bold text-[#fff9f9]'>
          {lines.slice(0, lineIndex).map((line, idx) => (
            <p key={idx} style={{ color: line.color }}>
              {line.text}
            </p>
          ))}
          <p style={{ color: lines[lineIndex]?.color }}>
            {currentText.map((char, idx) => (
              <span key={idx}>{char}</span> // 현재 타이핑 중인 글자들
            ))}
          </p>
        </h2>

        {showCustomBar && (
          <div className='relative h-16 w-full'>
            <div className='absolute left-1/2 top-1/2 h-2 w-0 -translate-x-1/2 -translate-y-1/2 transform animate-stretchFromCenter bg-white'>
              <div
                className='absolute bottom-2 left-0 h-[64px] w-[70px] animate-fadeIn bg-contain bg-bottom bg-no-repeat opacity-0'
                style={{
                  backgroundImage: `url('/imgs/tree_left.svg')`,
                }}
              ></div>

              <div
                className='absolute bottom-2 right-0 h-[64px] w-[70px] animate-fadeIn bg-contain bg-bottom bg-no-repeat opacity-0'
                style={{
                  backgroundImage: `url('/imgs/tree_right.svg')`,
                }}
              ></div>
            </div>
          </div>
        )}

        <div
          className={`relative mt-[100px] h-[54px] w-[34px] rounded-[20px] border-2 border-[#fff9f9] opacity-0 transition-opacity duration-1000 ease-in-out before:absolute before:left-[13px] before:top-[10px] before:h-3 before:w-1 before:animate-scrollIndicator before:rounded-full before:bg-[#fff9f9] before:content-[""] ${
            showMouseComponent ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div className='absolute bottom-0 h-[200px] w-full bg-gradient-to-t from-[#000000] to-transparent'></div>
      </div>
      {/* slide */}
      <div className='relative h-[173px] w-full overflow-x-hidden'>
        {[
          { top: '-20px', left: '0', opacity: 1 }, // 첫 번째 웨이브
          { top: '-10px', left: '-100px', opacity: 0.5 }, // 두 번째 웨이브
          { top: '0', left: '-160px', opacity: 0.2 }, // 세 번째 웨이브
        ].map((style, i) => (
          <div
            key={i}
            className='IntroWave absolute h-[173px] w-[6400px]'
            style={{
              backgroundImage: `url(/imgs/wave.svg)`,
              backgroundRepeat: 'repeat-x',
              animation: `IntroWave 20s linear infinite`,
              top: style.top, // 각각의 top 설정
              left: style.left, // 각각의 left 설정
              opacity: style.opacity, // 각각의 투명도 설정
            }}
          ></div>
        ))}
      </div>
    </section>
  );
}
