import { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

// Helper functions need to be declared before handler
const createTextBody = (data: any) => `
New Lead Notification
--------------------

Lead Details:
- Name: ${data.name}
- Phone: ${data.phone}
- City: ${data.city}
${data.email ? `- Email: ${data.email}` : ''}

Source Information:
- URL Path: /${data.url_slugs.join('/')}
- Timestamp: ${new Date().toLocaleString()}
`;

const createEmailHTML = (data: any) => `
<!DOCTYPE html>
<html>
<!-- Your HTML template here -->
</html>
`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = req.body;

    const transporter = nodemailer.createTransport({
      host: 'mail.smtp2go.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP2GO_USER,
        pass: process.env.SMTP2GO_PASS
      }
    });

    const mailOptions = {
      from: '"Magnific Leads" <leads@crm.magnific.in>',
      to: 'info@magnific.in',
      subject: `New Lead: ${data.name} from ${data.city}`,
      text: createTextBody(data),
      html: createEmailHTML(data),
      replyTo: data.email || 'leads@crm.magnific.in'
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}