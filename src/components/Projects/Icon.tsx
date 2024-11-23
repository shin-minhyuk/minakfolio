import Image from 'next/image';

type IconType =
  | 'Axios'
  | 'Next'
  | 'React'
  | 'Supabase'
  | 'Tailwind'
  | 'Tanstack-query'
  | 'Typescript'
  | 'Vite'
  | 'Zustand';
type Props = {
  type: IconType;
  children?: React.ReactNode;
};

const ICONS: Record<IconType, string> = {
  Axios: 'axios.svg',
  Next: 'nextjs.svg',
  React: 'reactjs.svg',
  Supabase: 'supabase.svg',
  Tailwind: 'tailwind.svg',
  'Tanstack-query': 'tanstackquery.svg',
  Typescript: 'typescript.svg',
  Vite: 'vitejs.svg',
  Zustand: 'zustand.svg',
};

export default function Icon({ type, children }: Props) {
  const iconSrc = ICONS[type] || 'default.svg';

  return (
    <li className='h-6 w-6 rounded-[4px]'>
      <Image src={`/imgs/skills/${iconSrc}`} alt={type} width={24} height={24} />
      {children}
    </li>
  );
}
