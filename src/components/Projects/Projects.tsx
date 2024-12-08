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
        <li className='transfrom group relative w-full overflow-hidden rounded-[20px] border border-neutral-300 transition-all duration-500 hover:-translate-x-3 hover:-translate-y-3 hover:shadow-card'>
          <Link href='/projects/minhyukfolio'>
            <div className='relative h-[260px]'>
              <Image
                src={'/imgs/project_minhyukfolio.jpg'}
                sizes='500px'
                fill
                alt='MINHYUKFOLIO 프로젝트 이미지'
                className='object-cover'
              />
            </div>
            <div className='m-5'>
              <h4 className='font-aggro text-2xl font-semibold'>MINHYUKFOLIO</h4>
              <p className='my-[6px]'>프론트엔드 개발자 포트폴리오 사이트</p>
              <p className='my-[6px] text-[14px] leading-[14px]'>2024. 11. 22 - 2024. 11. 25</p>
              <ul className='flex gap-2'>
                <li className='rounded-[4px]'>
                  <Icon type='Next' />
                </li>
                <li className='rounded-[4px]'>
                  <Icon type='Typescript' />
                </li>
                <li className='rounded-[4px]'>
                  <Icon type='Tailwind' />
                </li>
                <li className='rounded-[4px]'>
                  <Icon type='Tanstack-query' />
                </li>
                <li className='rounded-[4px]'>
                  <Icon type='Supabase' />
                </li>
              </ul>
            </div>
            <BlackBadge>자세히 보기</BlackBadge>
          </Link>
        </li>
        <li className='transfrom group relative w-full overflow-hidden rounded-[20px] border border-neutral-300 transition-all duration-500 hover:-translate-x-3 hover:-translate-y-3 hover:shadow-card'>
          <Link href='/projects/micgolf'>
            <div className='relative h-[260px]'>
              <Image
                src={'/imgs/project_micgolf.jpg'}
                sizes='500px'
                fill
                alt='MICGOLF 프로젝트 이미지'
                className='object-cover'
              />
            </div>
            <div className='m-5'>
              <h4 className='font-aggro text-2xl font-semibold'>MIC GOLF</h4>
              <p className='my-[6px]'>파파타랩스 기업협업 자사몰 서비스 유저, 어드민 기획 및 제작</p>
              <p className='my-[6px] text-[14px] leading-[14px]'>2024. 11.07 - 2024. 12. 11</p>
              <ul className='flex gap-2'>
                <li className='rounded-[4px]'>
                  <Icon type='Vite' />
                </li>
                <li className='rounded-[4px]'>
                  <Icon type='Typescript' />
                </li>
                <li className='rounded-[4px]'>
                  <Icon type='React' />
                </li>
                <li className='rounded-[4px]'>
                  <Icon type='Tailwind' />
                </li>
                <li className='rounded-[4px]'>
                  <Icon type='Zustand' />
                </li>
                <li className='rounded-[4px]'>
                  <Icon type='Axios' />
                </li>
                <li className='rounded-[4px]'>
                  <Icon type='Tanstack-query' />
                </li>
              </ul>
            </div>
            <BlackBadge>자세히 보기</BlackBadge>
          </Link>
        </li>
        <li className='transfrom group relative w-full overflow-hidden rounded-[20px] border border-neutral-300 transition-all duration-500 hover:-translate-x-3 hover:-translate-y-3 hover:shadow-card'>
          <Link href='/projects/vita'>
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
              <p className='my-[6px]'>실시간 소통이 가능한 게임메이트 매칭 서비스</p>
              <p className='my-[6px] text-[14px] leading-[14px]'>2024. 10.10 - 2024. 11. 06</p>
              <ul className='flex gap-2'>
                <li className='rounded-[4px]'>
                  <Icon type='Vite' />
                </li>
                <li className='rounded-[4px]'>
                  <Icon type='Typescript' />
                </li>
                <li className='rounded-[4px]'>
                  <Icon type='React' />
                </li>
                <li className='rounded-[4px]'>
                  <Icon type='Tailwind' />
                </li>
                <li className='rounded-[4px]'>
                  <Icon type='Zustand' />
                </li>
                <li className='rounded-[4px]'>
                  <Icon type='Axios' />
                </li>
                <li className='rounded-[4px]'>
                  <Icon type='Tanstack-query' />
                </li>
              </ul>
            </div>
            <Button>자세히 보기</Button>
          </Link>
        </li>
        <li className='transfrom group relative w-full overflow-hidden rounded-[20px] border border-neutral-300 transition-all duration-500 hover:-translate-x-3 hover:-translate-y-3 hover:shadow-card'>
          <Link href='/projects/minflix'>
            <div className='relative h-[260px]'>
              <Image
                src={'/imgs/project_minflix.jpg'}
                sizes='500px'
                fill
                alt='MINFLIX 프로젝트 이미지'
                className='object-cover'
              />
            </div>
            <div className='m-5'>
              <h4 className='font-aggro text-2xl font-semibold'>MIN FLIX</h4>
              <p className='my-[6px]'>실시간 영화 추천, 검색 및 개인화된 즐겨찾기 관리가 가능한 영화 플랫폼</p>
              <p className='my-[6px] text-[14px] leading-[14px]'>2024. 08.20 - 2024. 08. 27</p>
              <ul className='flex gap-2'>
                <li className='rounded-[4px]'>
                  <Icon type='Vite' />
                </li>
                <li className='rounded-[4px]'>
                  <Icon type='Javascript' />
                </li>
                <li className='rounded-[4px]'>
                  <Icon type='React' />
                </li>
                <li className='rounded-[4px]'>
                  <Icon type='Sass' />
                </li>
                <li className='rounded-[4px]'>
                  <Icon type='Redux' />
                </li>
                <li className='rounded-[4px]'>
                  <Icon type='Axios' />
                </li>
                <li className='rounded-[4px]'>
                  <Icon type='Supabase' />
                </li>
              </ul>
            </div>
            <BlackBadge>자세히 보기</BlackBadge>
          </Link>
        </li>
      </ul>
    </Section>
  );
}
