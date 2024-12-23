type Props = {
  children: React.ReactNode;
};

export default function Section({ children }: Props) {
  return <section className='mx-auto mt-[72px] h-auto max-w-[1120px] px-[40px] py-[72px]'>{children}</section>;
}
