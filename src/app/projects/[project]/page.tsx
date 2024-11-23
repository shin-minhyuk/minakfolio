'ues client';

import Header from '@/components/Common/Header';
import Icon, { IconType } from '@/components/Projects/Icon';
import Image from 'next/image';
import Link from 'next/link';

type ProjectKeys = 'vita' | 'micgolf';

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
      </section>
    </>
  );
}
