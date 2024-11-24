'ues client';

import Icon from '@/components/Projects/Icon';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProjectBackground from '../_components/ProjectBackground';
import { projectDatas, ProjectKeys } from '@/config/const';

export default function ProjectsIdPage({ params }: { params: { project: string } }) {
  // FIXME: 에러페이지 이동
  if (['vita', 'micgolf', 'minflix', 'minhyukfolio'].includes(params.project) === false) return <div>404 - error</div>;

  // 20241123, FIXME: 추후에 교체 예정, 프로젝트 데이터 저장 및 불러오는 API
  const projectData = projectDatas[params.project as ProjectKeys];
  console.log(projectData);

  return (
    <>
      <ProjectBackground images={projectData.backgroundImages} />
      <section className='mx-auto mt-[72px] max-w-[1120px] py-[72px]' style={{ width: 'calc(100% - 80px)' }}>
        <h2 className='font-aggro text-[72px] font-bold leading-[72px]'>{projectData.title}</h2>
        <p className='font-aggro text-[20px] font-[100] text-[#666666]'>{projectData.description}</p>

        <Image
          src={projectData.image}
          width={1920}
          height={1080}
          alt={projectData.title}
          className='mx-auto my-10 h-auto w-[600px] rounded-[20px] border border-neutral-300 px-[40px]'
        />
        <div className='mx-auto mb-16 flex w-[600px] flex-col px-[40px]'>
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
        <dl className='grid grid-cols-[110px_1fr] gap-3 px-[40px]'>
          <dt className='font-aggro font-[100]'>기한</dt>
          <dd>{projectData.duration}</dd>

          <dt className='font-aggro font-[100]'>규모 / 인원</dt>
          <dd>{projectData.teamSize}</dd>

          <dt className='font-aggro font-[100]'>역할</dt>
          <dd>{projectData.role}</dd>

          <dt className='font-aggro font-[100]'>사용 기술</dt>
          <dd>
            <ul className='flex flex-wrap gap-3'>
              {projectData.techStack.map((stack, i) => (
                <li key={i} className='flex items-center gap-1 rounded-[6px] border border-neutral-300 pr-1'>
                  <Icon type={stack}>{stack}</Icon>
                  <span className='leading-[16px]'>{stack}</span>
                </li>
              ))}
            </ul>
          </dd>
        </dl>

        <div className='bg-white px-[40px]'>
          <div className='mt-5'>
            <h3 className='border-t border-dashed border-neutral-300 pt-5 font-aggro font-[100] leading-[40px]'>
              주요 기능 및 개인 기여
            </h3>
            <dl>
              {projectData.features.map((feature) => (
                <React.Fragment key={feature.title}>
                  <dt className='flex gap-1 font-[600] leading-[30px]'>
                    <Image
                      src={'/imgs/pin_green.png'}
                      width={24}
                      height={24}
                      alt='핀 아이콘'
                      className='h-[24px] w-[24px]'
                    />
                    <span className='relative z-10 after:absolute after:left-0 after:right-0 after:top-[14px] after:-z-[1] after:inline-block after:h-[10px] after:bg-[#99FFC0] after:content-[""]'>
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
          <div className='mt-5'>
            <h3 className='border-t border-dashed border-neutral-300 pt-5 font-aggro font-[100] leading-[40px]'>
              프로젝트를 통해 얻은 경험
            </h3>
            <ul className='list-disc pl-5 text-[16px] leading-[28px]'>
              {projectData.expreience.map((exp, i) => (
                <li key={i} className='mb-2'>
                  {exp}
                </li>
              ))}
            </ul>
          </div>
          <div className='mt-5'>
            <h3 className='border-t border-dashed border-neutral-300 pt-5 font-aggro font-[100] leading-[40px]'>
              {projectData.title} 키 포인트
            </h3>
            <ul className='list-disc pl-5 text-[16px] leading-[28px]'>
              {projectData.keyPoint.map((key, i) => (
                <li key={i} className='mb-2'>
                  {key}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
