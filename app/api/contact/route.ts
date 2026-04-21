import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { name, email, message } = await request.json()

  const { error } = await resend.emails.send({
    from: "PG Studio <onboarding@resend.dev>",
    to: "pgstudio.fx@gmail.com",
    replyTo: email,
    subject: `Projet — ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  })

  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }

  return Response.json({ success: true })
}
