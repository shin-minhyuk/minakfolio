'use client';

import Image from 'next/image';
import Section from '../Common/Section';
import SectionHeadLine from '../Common/SectionHeadLine';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <Section>
      <div className='flex flex-col items-center'>
        <div className='text-center'>
          <SectionHeadLine>
            함께 새로운 기회를 만들어가고 싶습니다 <br />
            편하게 메시지를 남겨주세요.
          </SectionHeadLine>
          <p className='-mt-[3rem] mb-[60px] font-aggro font-[100] text-[#666666]'>
            다양한 분들과 협력하며 성장할 기회를 기대하고 있습니다. <br />
            남겨주신 메일은 빠르게 확인 후, 1-2일 내로 성심껏 답변드리겠습니다.
          </p>
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className='grid w-full max-w-[676px] grid-cols-2 gap-5'>
          <label>
            <span className='ml-1 font-aggro font-[100]'>이름 / 소속</span>
            <input
              type='text'
              autoComplete='name'
              name='name'
              className='mt-2 w-full rounded-full border border-neutral-300 px-4 py-3 leading-[1rem] transition-all duration-500 hover:border-[#373737] focus:border-[#373737] focus:outline-none focus:ring-1 focus:ring-[#373737]'
              placeholder='I find joy in what I do'
            />
          </label>
          <label>
            <span className='ml-1 font-aggro font-[100]'>이메일</span>
            <input
              type='email'
              autoComplete='email'
              name='email'
              className='mt-2 w-full rounded-full border border-neutral-300 px-4 py-3 leading-[1rem] transition-all duration-500 hover:border-[#373737] focus:border-[#373737] focus:outline-none focus:ring-1 focus:ring-[#373737]'
              placeholder='example@email.com'
            />
          </label>
          <label className='col-span-2'>
            <span className='ml-1 font-aggro font-[100]'>내용</span>
            <textarea
              name='textarea'
              className='mt-2 h-[120px] w-full resize-none rounded-2xl border border-neutral-300 px-4 py-3 leading-[1rem] transition-all duration-500 hover:border-[#373737] focus:border-[#373737] focus:outline-none focus:ring-1 focus:ring-[#373737]'
              placeholder='궁금한 내용이 있다면 편하게 작성해 주세요 :)'
            />
          </label>
          <button
            type='submit'
            className='group relative col-span-2 mt-2 h-[42px] w-full rounded-full border border-neutral-300 font-aggro font-[100] transition-all duration-500 hover:bg-[#373737] hover:text-white'
          >
            {/* 텍스트 */}
            <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:hidden'>
              메일 보내기
            </span>

            {/* 메일 아이콘 */}
            <div className='absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 group-hover:block'>
              <Image src={'/imgs/mail.svg'} width={30} height={30} alt='mail' className='animate-shake' />
            </div>
          </button>
        </form>
      </div>
    </Section>
  );
}
