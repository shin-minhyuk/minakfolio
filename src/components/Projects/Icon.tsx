import Image from 'next/image';

type IconType =
  | 'axios'
  | 'next'
  | 'react'
  | 'supabase'
  | 'tailwind'
  | 'tanstackquery'
  | 'typescript'
  | 'vite'
  | 'zustand';
type Props = {
  type: IconType;
  children?: React.ReactNode;
};

const ICONS: Record<IconType, string> = {
  axios: 'axios.svg',
  next: 'nextjs.svg',
  react: 'reactjs.svg',
  supabase: 'supabase.svg',
  tailwind: 'tailwind.svg',
  tanstackquery: 'tanstackquery.svg',
  typescript: 'typescript.svg',
  vite: 'vitejs.svg',
  zustand: 'zustand.svg',
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
