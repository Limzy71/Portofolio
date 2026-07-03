import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { error: "Semua field harus diisi" },
        { status: 400 },
      );
    }

    if (!email.includes("@")) {
      return Response.json(
        { error: "Email tidak valid" },
        { status: 400 },
      );
    }

    const { error } = await resend.emails.send({
      from: `Portofolio <onboarding@resend.dev>`,
      to: [process.env.CONTACT_EMAIL || ""],
      replyTo: email,
      subject: `Pesan Baru dari ${name}`,
      html: `
        <h2>Pesan Baru dari Portfolio</h2>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json(
      { success: true, message: "Pesan berhasil dikirim" },
      { status: 200 },
    );
  } catch {
    return Response.json(
      { error: "Terjadi kesalahan. Silakan coba lagi." },
      { status: 500 },
    );
  }
}
