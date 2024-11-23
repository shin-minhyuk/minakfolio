'use client';

import Link from 'next/link';
import Section from '../Common/Section';
import SectionHeadLine from '../Common/SectionHeadLine';
import TitleBadge from '../Common/TitleBadge';
import Image from 'next/image';
import BlackBadge from './Button';
import Icon from './Icon';
import Button from './Button';

export default function Projects() {
  return (
    <Section>
      <TitleBadge href='#'># PROJECTS</TitleBadge>
      <SectionHeadLine>
        모든 사용자가 만족할 수 있는 서비스를 꿈꾸며, <br />
        <span className='text-[#ecb921]'>어제보다 더 나은 오늘</span>을 만들어가고 있습니다.
      </SectionHeadLine>
      <p className='mb-[60px] mt-[-3rem]'>
        짧은 기간동안 다양한 프로젝트를 시도하며 완성도를 높이기 위해 상세하게 살펴보고 <br />
        사용자 경험의 관점에서 개선할 부분은 없을 지 고민하는 습관을 만들고 있습니다.
      </p>
      <ul className='grid grid-cols-2 gap-[60px]'>
        <li className='transfrom hover:shadow-card group relative w-full overflow-hidden rounded-[20px] border border-neutral-300 transition-all duration-500 hover:-translate-x-3 hover:-translate-y-3'>
          <Link href='#'>
            <div className='relative h-[260px]'>
              <Image
                src={'/imgs/project_vita.jpg'}
                sizes='500px'
                fill
                alt='VITA 프로젝트 이미지'
                className='object-cover'
              />
            </div>
            <div className='m-5'>
              <h4 className='font-aggro text-2xl font-semibold'>VITA</h4>
              <p className='my-[6px] leading-[16px]'>실시간 소통이 가능한 게임메이트 매칭 서비스</p>
              <p className='my-[6px] text-[14px] leading-[14px]'>2024. 10.10 - 2024. 11. 06</p>
              <ul className='flex gap-2'>
                <Icon type='vite' />
                <Icon type='typescript' />
                <Icon type='react' />
                <Icon type='tailwind' />
                <Icon type='zustand' />
                <Icon type='axios' />
              </ul>
            </div>
            <Button>자세히 보기</Button>
          </Link>
        </li>
        <li className='transfrom hover:shadow-card group relative w-full overflow-hidden rounded-[20px] border border-neutral-300 transition-all duration-500 hover:-translate-x-3 hover:-translate-y-3'>
          <Link href='#'>
            <div className='relative h-[260px]'>
              <Image
                src={'/imgs/project_micgolf.jpg'}
                sizes='500px'
                fill
                alt='VITA 프로젝트 이미지'
                className='object-cover'
              />
            </div>
            <div className='m-5'>
              <h4 className='font-aggro text-2xl font-semibold'>MIC GOLF</h4>
              <p className='my-[6px] leading-[16px]'>파파타랩스 기업협업 자사몰 서비스 유저, 어드민 기획 및 제작</p>
              <p className='my-[6px] text-[14px] leading-[14px]'>2024. 11.07 - 2024. 12. 11</p>
              <ul className='flex gap-2'>
                <Icon type='vite' />
                <Icon type='typescript' />
                <Icon type='react' />
                <Icon type='tailwind' />
                <Icon type='zustand' />
                <Icon type='axios' />
              </ul>
            </div>
            <BlackBadge>자세히 보기</BlackBadge>
          </Link>
        </li>
      </ul>
    </Section>
  );
}
