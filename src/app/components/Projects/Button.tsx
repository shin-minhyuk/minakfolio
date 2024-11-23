type Props = {
  children: React.ReactNode;
};

export default function Button({ children }: Props) {
  return (
    <div className='invisible absolute bottom-5 right-5 rounded-full bg-[#373737] px-4 py-2 font-aggro font-[100] leading-[1rem] text-[#fff9f9] opacity-0 transition-opacity duration-500 group-hover:visible group-hover:opacity-100'>
      {children}
    </div>
  );
}
