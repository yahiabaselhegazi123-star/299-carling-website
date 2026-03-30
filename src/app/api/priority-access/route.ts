import { NextRequest, NextResponse } from 'next/server';

// In-memory store for demo mode
const submissions: { email: string; timestamp: string }[] = [];

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  
  if (!email || !email.includes('@')) {
    return NextResponse.json({ success: false, message: 'Valid email required' }, { status: 400 });
  }

  const timestamp = new Date().toISOString();
  
  // Demo mode fallback
  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM) {
    submissions.push({ email, timestamp });
    console.log('[DEMO MODE] Priority Access submission:', { email, timestamp });
    console.log('[DEMO MODE] All submissions:', submissions);
    return NextResponse.json({ 
      success: true, 
      message: 'You have been added to our priority access list.' 
    });
  }

  // Production: send email via Resend
  try {
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: process.env.RESEND_FROM,
      to: 'Yahiabaselhegazi123@gmail.com',
      subject: 'New Priority Access Registration – 299 Carling',
      html: `<p>New priority access registration:</p><p><strong>Email:</strong> ${email}</p><p><strong>Time:</strong> ${timestamp}</p>`,
    });
    
    return NextResponse.json({ 
      success: true, 
      message: 'You have been added to our priority access list.' 
    });
  } catch (err) {
    console.error('Resend error:', err);
    return NextResponse.json({ 
      success: false, 
      message: 'Submission failed. Please try again.' 
    }, { status: 500 });
  }
}
