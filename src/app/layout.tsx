import type { Metadata } from 'next';
import './globals.css';
import RQProvider from '@/components/Common/RQProvider';
import Header from '@/components/Common/Header';
import Footer from '@/components/Common/Footer';

export const metadata: Metadata = {
  title: 'MINHYUKFOLIO | 신민혁 포트폴리오',
  description: '자바스크립트 엔지니어 신민혁의 포트폴리오 입니다',
  openGraph: {
    title: 'MINHYUKFOLIO | 신민혁 포트폴리오',
    description: '자바스크립트 엔지니어 신민혁의 포트폴리오 입니다',
    url: 'https://minakfolio.vercel.app/',
    siteName: 'MINHYUKFOLIO',
    type: 'website',
    locale: 'ko_KR',
    images: 'https://minakfolio.vercel.app/imgs/thumbnail.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>
        <RQProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </RQProvider>
      </body>
    </html>
  );
}
