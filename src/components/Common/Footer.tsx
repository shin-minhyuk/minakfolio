'use client';

import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathName = usePathname();

  const bgColor = pathName === '/' ? 'bg-[#151348]' : 'bg-transparent';
  const textColor = pathName === '/' ? 'text-[#fff9f9]' : 'text-[#373737]';

  return (
    <footer className={`w-full whitespace-nowrap ${bgColor} py-4 text-center ${textColor}`}>
      <div>ⓒ 2024 SHIN MINHYUK Portfolio | All Rights Reserved.</div>
    </footer>
  );
}
