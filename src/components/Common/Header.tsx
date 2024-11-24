'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useInView } from 'react-intersection-observer';

export default function Header() {
  const pathName = usePathname();
  const showGoBackLink = pathName.startsWith('/projects');

  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <header>
      <div
        className={`${inView && !showGoBackLink ? 'text-[#fff9f9]' : 'border-b border-neutral-400 text-[#373737] backdrop-blur-md'} t-0 fixed left-0 right-0 top-0 z-20 flex h-[68px] w-full items-center justify-between px-6 py-[16px] font-aggro`}
      >
        {showGoBackLink ? (
          <Link
            href='/#projects'
            className='group flex items-center gap-1 rounded-[20px] border border-neutral-300 px-4 pb-1 pt-[6px] font-[100] text-[#373737] transition-colors duration-500 hover:bg-[#373737] hover:text-[#fff9f9]'
          >
            <span className='mb-[3px] h-[10px] w-[10px] rotate-[45deg] border-b-[1.8px] border-l-[1.8px] border-[#373737] transition-colors duration-500 group-hover:border-[#fff9f9]' />
            <span>전체 프로젝트 보기</span>
          </Link>
        ) : (
          <Image src={'/imgs/logo.png'} alt='로고' width='40' height='40' />
        )}
        <h1 className={`text-xl font-bold ${showGoBackLink && 'text-[#373737]'}`}>MINHYUKFOLIO</h1>

        {/* 트리거 */}
      </div>
      <div
        className='absolute z-50 h-10 w-full bg-transparent'
        style={{
          height: 'calc(100dvh + 120px)',
        }}
        ref={ref}
      />
    </header>
  );
}
