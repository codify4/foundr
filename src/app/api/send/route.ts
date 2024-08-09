import { EmailTemplate } from '@/components/EmailTemplate';
import { NextRequest } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { emails } = await request.json();

    const { data, error } = await resend.emails.send({
      from: `Ijon <${process.env.EMAIL}>`,
      to: "kushta.rea@gmail.com",
      subject: 'Hello!',
      react: EmailTemplate({ firstName: 'John' }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
