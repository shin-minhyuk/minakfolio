import Image from 'next/image';
import Section from '../Common/Section';
import SectionHeadLine from '../Common/SectionHeadLine';
import TitleBadge from '../Common/TitleBadge';
import Link from 'next/link';

export default function About() {
  const underLineHoverEffect =
    'relative after:absolute after:-bottom-[4px] after:left-0 after:-z-[1] after:h-[10px] after:w-0 after:bg-[#fcdedc] after:transition-all after:duration-300 hover:after:w-full';

  return (
    <Section>
      <TitleBadge href='#'># ABOUT</TitleBadge>
      <SectionHeadLine>
        눈 내리는 날의 설레임처럼
        <br />
        자연스러운 경험을 제공하는 서비스를 만들고픈 <br />
        개발자 <span className='text-[#14a211]'>신민혁</span>입니다. <br />
      </SectionHeadLine>
      <div className='flex justify-center gap-10 font-aggro'>
        <div className='text-center'>
          <Image
            src='/imgs/profile.JPG'
            width={300}
            height={300}
            alt='이미지'
            className='mb-[40px] rounded-[40px] bg-slate-600'
          />
          <div className='font-pretendard leading-[2rem]'>SHIN MIN HYUK</div>
          <div className='text-2xl font-medium'>신 민 혁</div>
          <div className='font-pretendard leading-[2rem]'>1999. 08. 29</div>
        </div>
        <ul className='flex flex-col justify-between'>
          <li>
            <h4 className='mb-[10px] border-l-4 border-[#c5554d] pl-[10px] pt-1 text-[20px] font-medium leading-[20px] text-[#c5554d]'>
              CONTACT
            </h4>
            <dl className='pl-14px grid grid-cols-[80px_1fr] items-baseline pl-[14px] leading-[2rem]'>
              <dt>전화번호</dt>
              <dd className='font-pretendard'>
                <Link href='tel:010-5544-4221' className={underLineHoverEffect}>
                  010 - 5544 - 4221
                </Link>
              </dd>
              <dt>이메일</dt>
              <dd className='font-pretendard'>
                <Link href='mailto:afs_style@naver.com' className={underLineHoverEffect}>
                  afs_style@naver.com
                </Link>
              </dd>
            </dl>
          </li>
          <li>
            <h4 className='mb-[10px] border-l-4 border-[#c5554d] pl-[10px] pt-1 text-[20px] font-medium leading-[20px] text-[#c5554d]'>
              SNS
            </h4>
            <dl className='pl-14px grid grid-cols-[80px_1fr] items-baseline pl-[14px] leading-[2rem]'>
              <dt>깃허브</dt>
              <dd className='font-pretendard'>
                <Link href='https://github.com/shin-minhyuk/' className={underLineHoverEffect}>
                  github/shin-minhyuk
                </Link>
              </dd>
              <dt>블로그</dt>
              <dd className='font-pretendard'>
                <Link href='https://blog.naver.com/afs_style' className={underLineHoverEffect}>
                  blog.naver.com/afs_style
                </Link>
              </dd>
            </dl>
          </li>
          <li>
            <h4 className='mb-[10px] border-l-4 border-[#c5554d] pl-[10px] pt-1 text-[20px] font-medium leading-[20px] text-[#c5554d]'>
              PERSONALIY
            </h4>
            <dl className='pl-14px grid grid-cols-[80px_1fr] items-baseline pl-[14px] leading-[2rem]'>
              <dt>MBTI</dt>
              <dd className='font-pretendard'>실용적인 조력가 (ISFJ)</dd>
              <dt>취미</dt>
              <dd className='font-pretendard'>게임 / 여행</dd>
            </dl>
          </li>
        </ul>
      </div>
    </Section>
  );
}
