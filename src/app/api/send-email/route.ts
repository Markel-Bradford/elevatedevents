import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import formData from 'form-data';
import Mailgun from 'mailgun.js';

const mailgun = new Mailgun(formData);
const mg = mailgun.client({ username: 'api', key: process.env.MAILGUN_KEY });

// Use the new method for API route configuration
export const dynamic = 'force-dynamic'; // Forces dynamic behavior (bodyParser = false)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const form = formidable({ multiples: true });

    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.status(500).json({ message: 'Error parsing form data' });
        return;
      }

      try {
        const from = Array.isArray(fields.from) ? fields.from[0] : fields.from;
        const to = Array.isArray(fields.to) ? fields.to[0] : fields.to;
        const subject = Array.isArray(fields.subject) ? fields.subject[0] : fields.subject;
        const text = Array.isArray(fields.text) ? fields.text[0] : fields.text;

        if (!from || !to || !subject || !text) {
          res.status(400).json({ message: 'Missing required fields' });
          return;
        }

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
    });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
