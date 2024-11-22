type Props = {
  children: React.ReactNode;
};

export default function SectionHeadLine({ children }: Props) {
  return <h3 className='mb-[60px] mt-[40px] font-aggro text-3xl leading-[3rem]'>{children}</h3>;
}
