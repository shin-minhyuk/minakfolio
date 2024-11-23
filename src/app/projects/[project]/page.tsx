'ues client';

import Header from '@/components/Common/Header';
import Icon, { IconType } from '@/components/Projects/Icon';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type ProjectKeys = 'vita' | 'micgolf';
type Feature = {
  title: string;
  description: string[];
};

type ProjectData = {
  title: string;
  description: string;
  duration: string;
  techStack: IconType[];
  image: string;
  github: string;
  link: string;
  teamSize: string;
  role: string;
  features: Feature[];
};

type Projects = Record<ProjectKeys, ProjectData>;

const projectDatas: Projects = {
  vita: {
    title: 'VITA',
    description: '실시간 소통이 가능한 게임메이트 매칭 서비스',
    duration: '2024. 10.10 - 2024. 11. 06',
    techStack: ['Vite', 'Typescript', 'React', 'Tailwind', 'Zustand', 'Axios', 'Tanstack-query'],
    image: '/imgs/project_vita.jpg',
    github: 'https://github.com/oz-main-project-team-02/vita-gamemate-fe',
    link: 'https://vita.jangsalicense.com/',
    teamSize: '팀 프로젝트',
    role: '개발 팀장, 프론트엔드 팀장',
    features: [
      {
        title: '프로젝트 초기 설정 및 구조 설계',
        description: [
          '코드 품질 유지를 위해 eslint와 prettier를 도입 및 적용',
          '협업 효율성을 높이기 위해 Github Pull Request Role 설정 및 Detecting Main Branch 전략을 사용 및 체계적인 일정 관리와 코드 리뷰 진행',
        ],
      },
      {
        title: '로그인 및 회원가입 기능',
        description: [
          'Kakao Developers API를 사용하여 클라이언트에서 인가코드를 처리하여 서버에 전달하는 방식을 채택',
          '비로그인 상태에서 접근할 수 없는 페이지를 방어하는 접근 제어 로직을 추가',
        ],
      },
      {
        title: '실시간 게임 메이트 매칭 기능',
        description: [
          'WebSocket 프로토콜을 사용하여 실시간 사용자 상태(온라인/오프라인)를 확인할 수 있는 기능 구현',
          '매칭 요청 및 수락 시, 실시간으로 상태가 반영되도록 React 불변성을 유지하며 Tanstack-Query 캐시 데이터 변경하는 기능 구현',
          '의뢰 요청, 수락, 취소, 리뷰 작성 상태의 모든 UI를 일관성있게 구현하여 사용자 경험을 극대화',
        ],
      },
      {
        title: '포스팅 및 리뷰 기능',
        description: [
          '게임 메이트에 대한 리뷰 작성 및 별점 부여 기능 구현',
          '작성된 리뷰는 캐싱 및 페이지네이션을 통해 리뷰 데이터를 효율적으로 관리',
        ],
      },
      {
        title: '사용자 대시보드',
        description: [
          'Tanstack-Query를 사용하여 사용자 정보(코드 잔액, 매칭 이력)를 실시간으로 조회',
          '로그인한 사용자만 접근할 수 있는 코인 충전, 매칭 요청 내역 확인 등 대시보드 기능을 조건부로 구현',
        ],
      },
      {
        title: '코인 충전 및 사용',
        description: [
          '토스페이먼츠 테스트 결제 프로세스를 구현하여 사용자에게 코인 충전 기능 제공',
          '충전된 코인을 기반으로 게임 메이트 요청 및 취소 시 잔액이 실시간으로 업데이트되도록 기능 구현',
          '코인 충전 이력을 한눈에 확인할 수 있는 결제내역 대시보드 UI 제공',
        ],
      },
    ],
  },
  micgolf: {
    title: 'MIC GOLF',
    description: '파파타랩스 기업협업 자사몰 서비스 유저, 어드민 기획 및 제작',
    duration: '2024. 11.07 - 2024. 12. 11',
    techStack: ['Vite', 'Typescript', 'React', 'Tailwind', 'Zustand', 'Axios', 'Tanstack-query'],
    image: '/imgs/project_micgolf.jpg',
    github: 'https://github.com/MICGolf/frontend',
    link: 'https://micgolf.kro.kr/',
    teamSize: '팀 프로젝트',
    role: '개발 팀장, 프론트엔드 팀장',
    features: [
      {
        title: '프로젝트 초기 설정 및 구조 설계',
        description: [
          '코드 품질 유지를 위해 eslint와 prettier를 도입 및 적용',
          '협업 효율성을 높이기 위해 Github Pull Request Role 설정 및 Detecting Main Branch 전략을 사용 및 체계적인 일정 관리와 코드 리뷰 진행',
        ],
      },
      {
        title: '메인 페이지 애니메이션 및 인터렉션 강화',
        description: [
          'Framer-motion을 이용한 랜딩 인트로 추가',
          '메인 페이지에서 인기 상품과 이벤트를 보여주는 반응형 캐러셀 구현',
          '자동 슬라이드 기능과 드래그/스와이프 기능을 추가하여 사용자 경험 향상',
          '메인 페이지 우축 하단 FAB 버튼을 제작하여 사용자가 이전 구경했던 상품 리스트 출력 및 바로가기 기능 구현',
          '첫 페이지 로드 시 이벤트 알림을 위한 팝업 배너 구현, 쿠키를 사용하여 오늘하루 보지않기 기능 구현',
        ],
      },
      {
        title: '장바구니 주요 기능',
        description: [
          '장바구니 기능 구현, Tanstack-Query를 사용해 상품 데이터를 효율적으로 가져오며 비회원에서 로그인 했을 경우 장바구니의 싱크를 맞추는 기능 구현',
          '사용자가 선택한 상품을 로컬스토리지에 저장해 새로고침 후에도 데이텅 유지, 상품의 수량 변경 및 삭제 기능 구현',
        ],
      },
      {
        title: '결제 및 주문 관리',
        description: ['결제 프로세스 구현중 ...'],
      },
      {
        title: '관리자(Admin) 페이지',
        description: ['상품 등록, 수정, 삭제 기능 구현', 'React-Hook-Form을 사용하여 입력 값 검증 및 에러 메시지 출력'],
      },
    ],
  },
};

export default function ProjectsIdPage({ params }: { params: { project: string } }) {
  // FIXME: 에러페이지 이동
  if (['vita', 'micgolf'].includes(params.project) === false) return <div>404 - error</div>;

  // 20241123, FIXME: 추후에 교체 예정, 프로젝트 데이터 저장 및 불러오는 API
  const projectData = projectDatas[params.project as ProjectKeys];
  console.log(projectData);

  return (
    <>
      <Header />
      <section className='mx-auto mt-[72px] max-w-[1120px] px-[40px] py-[72px]' style={{ width: 'calc(100% - 80px)' }}>
        <h2 className='font-aggro text-[72px] font-bold leading-[72px]'>{projectData.title}</h2>
        <p className='font-aggro text-[20px] font-[100] text-[#666666]'>{projectData.description}</p>

        <Image
          src={projectData.image}
          width={1920}
          height={1080}
          alt={projectData.title}
          className='mx-auto my-10 h-auto w-[600px] rounded-[20px] border border-neutral-300'
        />
        <div className='mx-auto mb-16 flex w-[600px] flex-col'>
          <Link
            href={projectData.github}
            className='group relative col-span-2 mt-2 h-[42px] w-full rounded-full border border-neutral-300 font-aggro font-[100] transition-all duration-500 hover:bg-[#373737]'
          >
            <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>Github 바로 가기</span>
            <div className='absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 rounded-full bg-white group-hover:block'>
              <Image src={'/imgs/github_black.svg'} width={34} height={34} alt='mail' className='animate-shake' />
            </div>
          </Link>

          <Link
            href={projectData.link}
            className='group relative col-span-2 mt-2 h-[42px] w-full rounded-full border border-neutral-300 font-aggro font-[100] transition-all duration-500 hover:bg-[#373737]'
          >
            <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>배포사이트 바로 가기</span>
            <div className='absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 group-hover:block'>
              <Image src={'/imgs/website.svg'} width={30} height={30} alt='mail' className='animate-shake' />
            </div>
          </Link>
        </div>
        <dl className='grid grid-cols-[110px_1fr] gap-3'>
          <dt className='font-aggro font-[100]'>기한</dt>
          <dd className=''>{projectData.duration}</dd>

          <dt className='font-aggro font-[100]'>규모 / 인원</dt>
          <dd className=''>{projectData.teamSize}</dd>

          <dt className='font-aggro font-[100]'>역할</dt>
          <dd className=''>{projectData.role}</dd>

          <dt className='font-aggro font-[100]'>사용 기술</dt>
          <dd className=''>
            <ul className='flex flex-wrap gap-3'>
              {projectData.techStack.map((stack) => (
                <li className='flex items-center gap-1 rounded-[6px] border border-neutral-300 pr-1'>
                  <Icon type={stack}>{stack}</Icon>
                  <span className='leading-[16px]'>{stack}</span>
                </li>
              ))}
            </ul>
          </dd>
        </dl>
        <div className='mt-5'>
          <h3 className='border-t border-dashed border-neutral-300 pt-5 font-aggro font-[100] leading-[40px]'>
            주요 기능 및 개인 기여
          </h3>
          <dl>
            {projectData.features.map((feature) => (
              <React.Fragment key={feature.title}>
                <dt className='flex gap-1 font-[600] leading-[30px]'>
                  <Image
                    src={'/imgs/icon_pin.webp'}
                    width={24}
                    height={24}
                    alt='핀 아이콘'
                    className='h-[24px] w-[24px]'
                  />
                  <span className='relative after:absolute after:left-0 after:right-0 after:top-[14px] after:-z-[1] after:inline-block after:h-[10px] after:bg-[#daeffe] after:content-[""]'>
                    {feature.title}
                  </span>
                </dt>
                {feature.description.map((desc, i) => (
                  <dd key={i} className='pl-4 indent-[-9px] leading-[30px] before:mr-1 before:content-["·"]'>
                    {desc}
                  </dd>
                ))}
              </React.Fragment>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
