"use client";

export default function Intro() {
  return (
    <section
      className='relative w-auto overflow-hidden'
      style={{ height: "calc((100vh + 173px))" }}
    >
      {/* snow */}
      <div
        className='absolute -top-[900px] right-0 left-0 block w-full custom-snow bg-[#373737]'
        style={{ height: "calc((100vh + 173px)*2)" }}
      ></div>
      {/* title */}
      <div
        className='flex justify-center items-center flex-col py-[72px]'
        style={{ height: "calc(100dvh - 144px)" }}
      >
        <h2 className='text-[#fff9f9] text-5xl font-aggro font-bold flex flex-col gap-2 text-center z-20 mx-auto mt-[130px] mb-[36px]'>
          <p>새로운 도전을 즐기며</p>
          <p>웹의 가능성을 확장하는</p>
          <p>프론트엔드 개발자</p>
          <p>신민혁 입니다</p>
        </h2>
        <div className='relative max-w-[1200px] w-0 h-2 bg-[#fff9f9] custom-bar'></div>
        <div></div>
      </div>
      {/* slide */}
      <div></div>
    </section>
  );
}
