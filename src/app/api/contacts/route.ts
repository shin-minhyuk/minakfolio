import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type ContactFormData = {
  name: string;
  email: string;
  content: string;
};

const headers = new Headers();
headers.append('apikey', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '');
headers.append('Authorization', `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''}`);
headers.append('Content-Type', 'application/json');

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, content } = body as ContactFormData;

    if (!name || !email || !content) {
      console.error('Missing required fields:', { name, email, content });
      return NextResponse.json({ error: '채워지지 않은 필드가 있는지 확인해주세요.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
      },
    });

    const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/contacts`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ name, email, content }),
    });
    console.log(response);

    if (!response.ok) {
      const error = await response.json();
      console.error('Supabase error:', error);
      return NextResponse.json({ message: 'DB 저장에 실패했습니다.' }, { status: 500 });
    }

    const emailResult = await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.NEXT_PUBLIC_EMAIL_USER}>`,
      to: process.env.NEXT_PUBLIC_EMAIL_USER,
      subject: `MINHYUKFOLIO || ${name}님의 메시지`,
      text: `이름: ${name}\n이메일: ${email}\n내용: ${content}`,
    });
    console.log('이메일 전송완료:', emailResult);

    return NextResponse.json(
      { message: '이메일이 정상적으로 전송되었습니다.\n1-2일 내로 확인 후 연락드리겠습니다!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Internal Server Error:', error);
    return NextResponse.json({ message: '서버에 잠시 문제가 생겼어요.\n잠시 후 다시 시도해주세요!' }, { status: 500 });
  }
}
