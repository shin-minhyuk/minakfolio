'ues client';

import Header from '@/components/Common/Header';

type ProjectKeys = 'vita' | 'micgolf';

type ProjectData = {
  title: string;
  description: string;
  duration: string;
  techStack: string[];
  image: string;
};

type Projects = Record<ProjectKeys, ProjectData>;

const projectDatas: Projects = {
  vita: {
    title: 'VITA',
    description: '실시간 소통이 가능한 게임메이트 매칭 서비스',
    duration: '2024. 10.10 - 2024. 11. 06',
    techStack: ['Vita', 'Typescript', 'React', 'Tailwind', 'Zustand', 'Axios', 'Tanstack-query'],
    image: '/imgs/project_vita.jpg',
  },
  micgolf: {
    title: 'MIC GOLF',
    description: '파파타랩스 기업협업 자사몰 서비스 유저, 어드민 기획 및 제작',
    duration: '2024. 11.07 - 2024. 12. 11',
    techStack: ['Vita', 'Typescript', 'React', 'Tailwind', 'Zustand', 'Axios', 'Tanstack-query'],
    image: '/imgs/project_micgolf.jpg',
  },
};

export default function ProjectsIdPage({ params }: { params: { project: string } }) {
  // FIXME: 에러페이지 이동
  console.log(params.project);
  if (['vita', 'micgolf'].includes(params.project) === false) return <div>404 - error</div>;

  // 20241123, FIXME: 추후에 교체 예정, 프로젝트 데이터 저장 및 불러오는 API
  const projectData = projectDatas[params.project as ProjectKeys];
  console.log(projectData);

  return (
    <>
      <Header />
      <section className='mx-auto mt-[72px] px-[40px] py-[72px]' style={{ width: 'calc(100% - 80px)' }}>
        <h2>{projectData.title}</h2>
        <p>{projectData.description}</p>
      </section>
    </>
  );
}
