type Props = {
  images: string[];
};

export default function ProjectBackground({ images }: Props) {
  if (images.length === 0) return null;

  const imageWidth = 600; // 이미지 너비
  const gap = 40; // 이미지 간격
  const totalWidth = (imageWidth + gap) * images.length; // 총 길이

  return (
    <div className='fixed left-0 top-1/2 z-[-1] h-[300px] w-full -translate-y-1/2 transform overflow-hidden'>
      <div
        className='animate-scrollBackground flex h-full gap-[40px] opacity-20'
        style={{ width: totalWidth * 2 }} // 두 배로 설정하여 자연스럽게 반복
      >
        {[...images, ...images].map((src, index) => (
          <div
            key={index}
            className='h-full w-[600px] flex-shrink-0 bg-cover bg-center'
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>
    </div>
  );
}
