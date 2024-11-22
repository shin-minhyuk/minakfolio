'use client';

import Link from 'next/link';
import Section from './Section';
import Image from 'next/image';

export default function About() {
  return (
    <Section>
      <Link
        href={'#'}
        className='m-0 rounded-2xl bg-[#c5554d] px-[10px] pb-[4px] pt-[8px] font-aggro text-3xl font-bold text-white'
      >
        # ABOUT
      </Link>
      <h3 className='mb-[60px] mt-[40px] font-aggro text-3xl leading-[3rem]'>
        눈 내리는 날의 설레임처럼
        <br />
        자연스러운 경험을 제공하는 서비스를 만들고픈 <br />
        개발자 <span className='text-green-600'>신민혁</span>입니다. <br />
      </h3>
      <div className='flex gap-10'>
        <div className='border border-neutral-400 text-center'>
          <Image
            src='/imgs/logo.png'
            width={300}
            height={300}
            alt='이미지'
            className='mb-[40px] rounded-[40px] bg-slate-600'
          />
          <div className='font-semibold'>SHIN MIN HYUK</div>
          <div className='font-aggro text-2xl font-semibold'>신 민 혁</div>
          <div>1999. 08. 29</div>
        </div>
        <div className='border border-neutral-400'>전화번호 010. 5544. 4221</div>
      </div>
    </Section>
  );
}
