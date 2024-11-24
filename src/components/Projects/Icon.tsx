import Image from 'next/image';

export type IconType =
  | 'Axios'
  | 'Next'
  | 'React'
  | 'Supabase'
  | 'Tailwind'
  | 'Tanstack-query'
  | 'Typescript'
  | 'Vite'
  | 'Zustand'
  | 'Javascript'
  | 'Sass'
  | 'Redux';

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
  Javascript: 'javascript.svg',
  Sass: 'sass.svg',
  Redux: 'redux.svg',
};

export default function Icon({ type }: Props) {
  const iconSrc = ICONS[type] || 'default.svg';

  return <Image src={`/imgs/skills/${iconSrc}`} alt={type} width={24} height={24} />;
}
