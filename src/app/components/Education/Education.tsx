'use client';

import Section from '../Common/Section';
import SectionHeadLine from '../Common/SectionHeadLine';
import TitleBadge from '../Common/TitleBadge';

export default function Education() {
  return (
    <Section>
      <TitleBadge href='#'># EDUCATION</TitleBadge>
      <SectionHeadLine>
        새로운 기술을 빠르게 익히고 적용하며,
        <br />
        사용자와 소통하는 화면을 설계하고 구현하는 과정에서
        <br />
        <span className='text-[#c5554d]'>프론트</span>의 매력을 느끼게 되었습니다.
      </SectionHeadLine>
      <ul className='relative mx-auto w-auto max-w-[676px] after:absolute after:bottom-0 after:left-[106px] after:top-0 after:h-[9/10] after:w-1 after:bg-[#c5554d] after:content-[""]'>
        {/* 2018 */}
        <li className='mt-5 flex gap-[60px]'>
          <span className="relative w-[80px] text-right font-aggro text-2xl text-[#c5554d] after:absolute after:top-0 after:z-10 after:ml-4 after:inline-block after:h-6 after:w-6 after:rounded-full after:border-4 after:border-[#c5554d] after:bg-[#fff9f9] after:content-['']">
            2018
          </span>
          <div className='flex flex-1 flex-col gap-1'>
            <p>2018. 01 - 2023. 02</p>
            <p className='font-semibold'>경일대학교 패션디자인학과</p>
            <p className='pl-4 indent-[-9px] before:mr-1 before:content-["·"]'>K-뷰티 융합학부 학생회 차장 2년 근속</p>
            <p className='pl-4 indent-[-9px] before:mr-1 before:content-["·"]'>LINC+ 사업단 창업동아리 팀장</p>
            <p></p>
          </div>
        </li>

        {/* 2020 */}
        <li className='mt-5 flex gap-[60px]'>
          <span className="relative w-[80px] text-right font-aggro text-2xl text-[#c5554d] after:absolute after:top-0 after:z-10 after:ml-4 after:inline-block after:h-6 after:w-6 after:rounded-full after:border-4 after:border-[#c5554d] after:bg-[#fff9f9] after:content-['']">
            2024
          </span>
          <div className='flex flex-1 flex-col gap-1'>
            <p>2024. 06 - 2024. 12</p>
            <p className='font-semibold'>오즈코딩스쿨 프론트엔드 4기</p>
            <p className='pl-4 indent-[-9px] before:mr-1 before:content-["·"]'>
              HTML, CSS, Javscript, <span className='font-semibold'>React, TypeScript</span>를 이용한 웹 프로그래밍 교육
              과정 이수
            </p>
            <p className='pl-4 indent-[-9px] before:mr-1 before:content-["·"]'>
              부트캠프를 통해 개발이 처음임에도 불구하고 노력의 결과로 커리큘럼의 진행에 따른 테스트에서 확실한
              성장곡선을 그림, <span className='font-semibold'>6등, 2등, 2등, 1등</span>
            </p>
            <p className='pl-4 indent-[-9px] before:mr-1 before:content-["·"]'>자발적 개발 스터디 운영</p>
            <p className='pl-4 indent-[-9px] before:mr-1 before:content-["·"]'>
              AWS & 오즈코딩스쿨 해커톤 참여 및 <span className='font-semibold'>1위</span>
            </p>
            <p className='pl-4 indent-[-9px] before:mr-1 before:content-["·"]'>
              "게임메이트 매칭 서비스 - <span className='font-semibold'>비타</span>, 기업 협업 자사몰 서비스 -{' '}
              <span className='font-semibold'>믹골프</span>" <br />
              개발 리더, 프론트엔드 리더로 참여
            </p>
          </div>
        </li>
      </ul>
    </Section>
  );
}
