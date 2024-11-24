'use client';

import Image from 'next/image';
import SectionHeadLine from '../Common/SectionHeadLine';
import { useMutation } from '@tanstack/react-query';
import { ContactFormData } from '@/app/api/contacts/route';
import { PulseLoader } from 'react-spinners';
import { useToast } from '../Toast/ToastContext';

export default function Contact() {
  const { addToast } = useToast();

  const mutation = useMutation({
    mutationFn: async (formData: ContactFormData) => {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || '메일 전송에 실패했습니다.');
      }
      return response.json();
    },
    onSuccess: (data) => {
      console.log('성공: ', data);
      addToast('메일이 성공적으로 전송되었습니다.', 'success');
    },
    onError: (error) => {
      console.error('에러: ', error);
      addToast(error.message, 'error');
    },
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as ContactFormData;

    mutation.mutate(data);
  };

  return (
    <div className='relative overflow-hidden'>
      {/* snow */}
      <div
        className='custom-snow absolute -top-[900px] left-0 right-0 z-20 block w-full'
        style={{ height: 'calc((100dvh + 173px)*2)', pointerEvents: 'none' }}
      />

      {/* slide */}
      <div className='relative h-[173px] w-full rotate-180 overflow-x-hidden'>
        {[
          { top: '-20px', left: '0', opacity: 1 }, // 첫 번째 웨이브
          { top: '-10px', left: '-100px', opacity: 0.5 }, // 두 번째 웨이브
          { top: '0', left: '-160px', opacity: 0.2 }, // 세 번째 웨이브
        ].map((style, i) => (
          <div
            key={i}
            className='IntroWave absolute h-[173px] w-[6400px]'
            style={{
              backgroundImage: `url(/imgs/wave_blue.svg)`,
              backgroundRepeat: 'repeat-x',
              animation: `IntroWave 20s linear infinite`,
              top: style.top, // 각각의 top 설정
              left: style.left, // 각각의 left 설정
              opacity: style.opacity, // 각각의 투명도 설정
            }}
          ></div>
        ))}
      </div>
      <div
        className='relative bg-[#373737] text-[#fff9f9]'
        style={{
          backgroundImage: `linear-gradient(
            to bottom,
            #151348,            
            rgba(53, 53, 53, 0.231) 50%, 
            #151348
          ), 
          url("/imgs/contact_background.jpg")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <section className='mx-auto h-auto max-w-[1120px] px-[40px] py-[200px]'>
          <div className='flex flex-col items-center'>
            <div className='text-center'>
              <SectionHeadLine>
                함께 새로운 기회를 만들어가고 싶습니다 <br />
                편하게 메시지를 남겨주세요.
              </SectionHeadLine>
              <p className='-mt-[3rem] mb-[60px] font-aggro font-[100] text-[#cccccc]'>
                다양한 분들과 협력하며 성장할 기회를 기대하고 있습니다. <br />
                남겨주신 메일은 빠르게 확인 후, 1-2일 내로 성심껏 답변드리겠습니다.
              </p>
            </div>
            <form onSubmit={(e) => onSubmit(e)} className='grid w-full max-w-[676px] grid-cols-2 gap-5'>
              <label>
                <span className='ml-1 font-aggro font-[100]'>이름 / 소속</span>
                <input
                  type='text'
                  autoComplete='name'
                  name='name'
                  className='mt-2 w-full rounded-full border border-neutral-300 px-4 py-3 leading-[1rem] text-[#373737] transition-all duration-500 hover:border-[#151348] focus:border-[#151348] focus:outline-none focus:ring-1 focus:ring-[#151348]'
                  placeholder='I find joy in what I do'
                />
              </label>
              <label>
                <span className='ml-1 font-aggro font-[100]'>이메일</span>
                <input
                  type='email'
                  autoComplete='email'
                  name='email'
                  className='mt-2 w-full rounded-full border border-neutral-300 px-4 py-3 leading-[1rem] text-[#373737] transition-all duration-500 hover:border-[#151348] focus:border-[#151348] focus:outline-none focus:ring-1 focus:ring-[#151348]'
                  placeholder='example@email.com'
                />
              </label>
              <label className='col-span-2'>
                <span className='ml-1 font-aggro font-[100]'>내용</span>
                <textarea
                  name='content'
                  className='mt-2 h-[120px] w-full resize-none rounded-2xl border border-neutral-300 px-4 py-3 leading-[1rem] text-[#373737] transition-all duration-500 hover:border-[#151348] focus:border-[#151348] focus:outline-none focus:ring-1 focus:ring-[#151348]'
                  placeholder='궁금한 내용이 있다면 편하게 작성해 주세요 :)'
                />
              </label>
              <button
                type='submit'
                className={`group relative col-span-2 mt-2 h-[42px] w-full rounded-full border border-neutral-300 font-aggro font-[100] transition-all duration-500 hover:bg-[#151348] ${mutation.isPending && 'bg-[#151348]'}`}
                disabled={mutation.isPending}
              >
                {/* 텍스트 */}
                {mutation.isPending ? (
                  <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[40%]'>
                    <PulseLoader color='#fff9f9' />
                  </span>
                ) : (
                  <>
                    <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:hidden'>
                      메일 보내기
                    </span>
                    {/* 메일 아이콘 */}
                    <div className='absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 group-hover:block'>
                      <Image src={'/imgs/mail.svg'} width={30} height={30} alt='mail' className='animate-shake' />
                    </div>
                  </>
                )}
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
