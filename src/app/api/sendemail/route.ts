// import { NextResponse } from 'next/server';
// import Mailgun from 'mailgun.js';
// import FormData from 'form-data';
// import Mailgen from 'mailgen';


// const API_KEY = process.env.MAILGUN_KEY;
// const DOMAIN = process.env.MAILGUN_DOMAIN;

// const mailgen = new Mailgen({
//     theme: 'salted',
//     product: {
//         name: 'Elevated Events',
//         link: 'https://elevatedevents.vercel.app',
//     },
// });

// try {
//     mailgen.cacheThemes(); // Forces a cache check on themes, if available.
// } catch (error) {
//     console.error("Mailgen theme error:", error);
// }

// const mailgun = new Mailgun(FormData).client({
//     username: 'api',
//     key: API_KEY,
// });

// export async function POST(req: Request) {
//     try {
//         const body = await req.json();
//         const intro = body.intro || '';
//         const content = body.content;
//         const email = {
//             body: {
//                 name: body.name || 'Customer',
//                 intro,
//                 outro: content,
//             },
//         };

//         await mailgun.messages.create(DOMAIN, {
//             to: body.to,
//             from: 'Elevated Events <no-reply@elevatedevents.com>',
//             subject: body.subject || 'Email',
//             text: mailgen.generatePlaintext(email),
//             html: mailgen.generate(email),
//             'o:testmode': 'yes',
//         });

//         return NextResponse.json({ success: true }, { status: 200 });
//     } catch (e) {
//         console.error('Error sending email:', e);
//         return NextResponse.json({ success: false, error: e }, { status: 500 });
//     }
// }