import type { NextApiRequest, NextApiResponse } from "next";

const API_KEY = process.env.MAILGUN_KEY || '';

type Data ={
    success: boolean;
}

export default function handler(
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
            res.status(200).json({success: true})
        } catch (e) {
            res.status(500).json({success: false})
        }

        return
    }
    res.status(404).json({success: false})
}