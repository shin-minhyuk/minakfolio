'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathName = usePathname();
  const showGoBackLink = pathName.startsWith('/projects');

  return (
    <header
      className={`${showGoBackLink && 'border-b border-neutral-400'} t-0 fixed left-0 right-0 top-0 z-20 mx-auto flex items-center justify-between px-[4px] py-[16px] font-aggro text-white`}
      style={{
        width: 'calc(100% - 40px)',
        height: '68px',
      }}
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
    </header>
  );
}
