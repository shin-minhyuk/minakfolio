'use client';

import React, { useState, useEffect } from 'react';

export default function Intro() {
  const [currentText, setCurrentText] = useState<string[]>([]); // 현재 타이핑된 글자 배열
  const [lineIndex, setLineIndex] = useState(0); // 현재 타이핑 중인 줄
  const [startTyping, setStartTyping] = useState(false); // 타이핑 시작 여부
  const lines = [
    { text: '안녕하세요', color: '#fff9f9' },
    { text: '새로운 도전에 성장하는', color: '#ecb921' },
    { text: '프론트엔드 개발자', color: '#c5554d' },
    { text: '신민혁 입니다', color: '#14a211' },
  ]; // 전체 문구 배열
  const typingSpeed = 100; // 타이핑 속도 (ms)
  const lineDelay = 100; // 한 줄 타이핑 완료 후 대기 시간 (ms)

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true);
    }, 4000);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
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
    <section className='relative w-auto overflow-hidden' style={{ height: 'calc(100dvh + 173px)' }}>
      {/* snow */}
      <div
        className='custom-snow absolute -top-[900px] left-0 right-0 z-20 block w-full'
        style={{ height: 'calc((100dvh + 173px)*2)' }}
      />
      {/* title */}
      <div
        className='flex flex-col items-center justify-center bg-[#373737] py-[72px]'
        style={{ height: 'calc(100dvh)' }}
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
        <div className='custom-bar relative h-2 w-0 max-w-[1200px] bg-[#fff9f9]' />
        <div className='before:animate-scroll-indicator relative mt-[100px] h-[54px] w-[34px] rounded-[20px] border-2 border-[#fff9f9] before:absolute before:left-[13px] before:top-[10px] before:h-3 before:w-1 before:rounded-full before:bg-[#fff9f9] before:content-[""]' />
      </div>
      {/* slide */}
      <div className='relative h-[173px] w-full overflow-x-hidden bg-white'>
        {[
          { top: '-20px', left: '0', opacity: 1 }, // 첫 번째 웨이브
          { top: '-10px', left: '-100px', opacity: 0.5 }, // 두 번째 웨이브
          { top: '0', left: '-160px', opacity: 0.2 }, // 세 번째 웨이브
        ].map((style, i) => (
          <div
            key={i}
            className='IntroWave absolute h-[173px] w-[6400px] bg-white'
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