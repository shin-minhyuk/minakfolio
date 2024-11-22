import Link from 'next/link';

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function TitleBadge({ href, children }: Props) {
  return (
    <Link
      href={href}
      className='m-0 rounded-2xl bg-[#c5554d] px-[10px] pb-[4px] pt-[8px] font-ghanachocolate text-3xl font-bold text-white'
    >
      {children}
    </Link>
  );
}
