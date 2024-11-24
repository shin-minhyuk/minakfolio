import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type ContactFormData = {
  name: string;
  email: string;
  content: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, content } = req.body as ContactFormData;

  if (!name || !email || !content) {
    return res.status(400).json({ error: 'Missing required fields' });
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

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.NEXT_PUBLIC_EMAIL_USER,
      subject: `New message from ${name}`,
      text: content,
    });

    const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/contacts`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, content }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Error saving to database:', error);
      return res.status(500).json({ message: 'Failed to save to database' });
    }

    return res.status(200).json({ message: 'Email sent and data saved successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send email' });
  }
}
