import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(req: Request): Promise<Response> {
  const headers = { 'content-type': 'application/json' };

  try {
    if (!process.env.RESEND_API_KEY) {
      return new Response(JSON.stringify({ success: false, error: 'Missing RESEND_API_KEY' }), { status: 500, headers });
    }

    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ success: false, error: 'Missing required fields' }), { status: 400, headers });
    }

    const result = await resend.emails.send({
      from: 'MBAYTAN Beauty <onboarding@resend.dev>',
      to: 'yannouafete@gmail.com',
      replyTo: `${name} <${email}>`,
      subject: `📩 Nouveau message de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #533F2F; padding: 20px;">
          <h2 style="color: #b77d43;">Nouveau message reçu</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <div style="background-color: #ffda96; padding: 10px; border-radius: 6px; margin-top:10px;">
            ${message}
          </div>
        </div>
      `,
    });

    if (result.error) {
      console.error('Resend error:', result.error);
      return new Response(JSON.stringify({ success: false, error: result.error.message }), { status: 502, headers });
    }

    return new Response(JSON.stringify({ success: true, id: result.data?.id }), { status: 200, headers });
  } catch (error) {
    console.error('Erreur envoi mail :', error);
    return new Response(JSON.stringify({ success: false, error: (error as Error)?.message ?? 'Unknown error' }), { status: 500, headers });
  }
}
