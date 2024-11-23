"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();
  const showGoBackLink = pathName.startsWith("/projects");

  return (
    <header className='flex items-center justify-between font-aggro mx-[20px] px-[4px] py-[16px] fixed t-0 left-0 right-0 z-20 text-white'>
      {showGoBackLink ? (
        <Link href='/#projects'>전체 프로젝트 보기</Link>
      ) : (
        <Image
          src={"/img/logo.png"}
          alt='로고'
          width='40'
          height='40'
          priority
        />
      )}
      <h1 className='text-xl font-bold'>MINHYUKFOLIO</h1>
    </header>
  );
}
