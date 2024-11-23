type Props = {
  children: React.ReactNode;
};

export default function BlackBadge({ children }: Props) {
  return (
    <div className='absolute bottom-5 right-5 rounded-full bg-[#373737] px-4 py-2 font-aggro font-[100] leading-[1rem] text-[#fff9f9]'>
      {children}
    </div>
  );
}
