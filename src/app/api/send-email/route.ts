import formData from 'form-data';
import Mailgun from 'mailgun.js';
import { NextRequest, NextResponse } from 'next/server';

const mailgunKey = process.env.MAILGUN_KEY;
const mailgunDomain = process.env.MAILGUN_DOMAIN;
const toEmail = process.env.TO_EMAIL;

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: mailgunKey || '',
  url: 'https://api.mailgun.net',
});

export async function POST(request: NextRequest) {
  try {
    // Check content type and parse body accordingly
    const contentType = request.headers.get('Content-Type');

    let body;
    if (contentType?.includes('application/json')) {
      // Parse JSON body
      body = await request.json();
    } else if (contentType?.includes('multipart/form-data')) {
      // Parse form data (e.g., for file uploads or form submissions)
      body = await request.formData();
    } else {
      throw new Error('Unsupported content type');
    }

    // Extract subject and text from body
    const subject = body.get('subject');
    const text = body.get('text');

    // Send email via Mailgun API
    const data = {
      from: `Potential Client <sandbox@${mailgunDomain}>`, // Double-check this
      to: toEmail,
      subject,
      text,
    };

    console.log("Payload: ", data)

    const response = await mg.messages.create(mailgunDomain || '', data);

    console.log('Mailgun Response:', response);

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error: any) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Error sending email', error: error.message });
  }
}
