"use client";

import React, { useState, useEffect } from "react";
import wave from "@/app/assets/imgs/wave.svg";

export default function Intro() {
  const [currentText, setCurrentText] = useState<string[]>([]); // 현재 타이핑된 글자 배열
  const [lineIndex, setLineIndex] = useState(0); // 현재 타이핑 중인 줄
  const lines = [
    { text: "안녕하세요", color: "#fff9f9" },
    { text: "새로운 도전에 성장하는", color: "#FF6347" }, // 새로운 도전에 색상 추가
    { text: "프론트엔드 개발자", color: "#1E90FF" }, // 프론트엔드에 색상 추가
    { text: "신민혁 입니다", color: "#32CD32" }, // 신민혁에 색상 추가
  ]; // 전체 문구 배열
  const typingSpeed = 100; // 타이핑 속도 (ms)
  const lineDelay = 100; // 한 줄 타이핑 완료 후 대기 시간 (ms)

  useEffect(() => {
    if (lineIndex >= lines.length) return; // 모든 줄 타이핑 완료 시 종료

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
  }, [lineIndex]); // 줄 변경 시 재실행

  return (
    <section className='relative w-auto overflow-hidden' style={{ height: "calc(100dvh + 173px)" }}>
      {/* snow */}
      <div
        className='absolute -top-[900px] right-0 left-0 block w-full custom-snow bg-[#373737]'
        style={{ height: "calc((100dvh + 173px)*2)" }}
      />
      {/* title */}
      <div className='flex justify-center items-center flex-col py-[72px]' style={{ height: "calc(100dvh)" }}>
        <h2 className='text-[#fff9f9] text-5xl font-aggro font-bold flex flex-col gap-2 text-center z-20 mx-auto mt-[130px] mb-[36px]'>
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
        <div className='relative max-w-[1200px] w-0 h-2 bg-[#fff9f9] custom-bar'></div>
      </div>
      {/* slide */}
      <div className='relative w-full h-[173px] overflow-x-hidden bg-white'>
        {[
          { top: "-20px", left: "0", opacity: 1 }, // 첫 번째 웨이브
          { top: "-10px", left: "-100px", opacity: 0.5 }, // 두 번째 웨이브
          { top: "0", left: "-160px", opacity: 0.2 }, // 세 번째 웨이브
        ].map((style, i) => (
          <div
            key={i}
            className='absolute bg-white w-[6400px] h-[173px] IntroWave'
            style={{
              backgroundImage: `url(${wave.src})`,
              backgroundRepeat: "repeat-x",
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