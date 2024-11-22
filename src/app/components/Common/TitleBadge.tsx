import Link from 'next/link';

type Props = {
  href: string;
  text: string;
};

export default function TitleBadge({ href, text }: Props) {
  return (
    <Link
      href={href}
      className='m-0 rounded-2xl bg-[#c5554d] px-[10px] pb-[4px] pt-[8px] font-ghanachocolate text-3xl font-bold text-white'
    >
      # {text}
    </Link>
  );
}
