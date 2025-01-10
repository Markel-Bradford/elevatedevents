import type { NextApiRequest, NextApiResponse } from 'next';
import formData from 'form-data';
import Mailgun from 'mailgun.js';

const mailgun = new Mailgun(formData);
const mg = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY || '' });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { from, to, subject, text } = req.body;

      const data = {
        from,
        to,
        subject,
        text,
      };

      const response = await mg.messages.create(process.env.MAILGUN_DOMAIN || '', data);

      res.status(200).json({ message: 'Email sent successfully', response });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}