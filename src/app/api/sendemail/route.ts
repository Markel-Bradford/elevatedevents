import type { NextApiRequest, NextApiResponse } from "next";
import Mailgun, {MailgunMessageData} from 'mailgun.js';
import FormData from 'form-data'
import Mailgen from 'mailgen';

const API_KEY = process.env.MAILGUN_KEY!;
const DOMAIN = process.env.MAILGUN_DOMAIN!;

const mailgen = new Mailgen({
    theme: 'default',
    product: {
        name: 'Elevated Events',
        link: 'https://elevatedevents.vercel.app'
    }
})

const mailgun = new Mailgun(FormData).client({
    username: 'api',
    key: API_KEY
})

type Data ={
    success: boolean;
}

export async function POST(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'POST'){
        const body = req.body || {}
        const intro = body.intro || ''
        const content = body.content
        const email = {
            body: {
                name: body.name || 'Customer',
                intro,
                outro: content,
            }
        }

        try {
            await mailgun.messages.create(DOMAIN, {
                to: body.to,
                from: 'Elevated Events <no-reply@elevatedevents.com>',
                subject: body.subject || 'Email',
                text: mailgen.generatePlaintext(email),
                html: mailgen.generate(email),
            })
            res.status(200).json({success: true})
        } catch (e) {
            console.error("Error sending email:", e)
            res.status(500).json({success: false})
        }

        return
    }
    res.status(404).json({success: false})
}