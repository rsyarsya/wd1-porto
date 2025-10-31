import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { getPayload } from 'payload'
import config from '@payload-config'

// Tambahkan ini untuk mencegah static generation
export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, message } = body

    // Validasi
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Simpan ke Payload Database
    const payload = await getPayload({ config })
    const contact = await payload.create({
      collection: 'contacts',
      data: {
        name,
        email,
        message,
        status: 'new',
      },
    })

    // Kirim email via Resend (hanya jika API key tersedia)
    if (process.env.RESEND_API_KEY) {
      try {
        // Inisialisasi Resend di dalam function
        const resend = new Resend(process.env.RESEND_API_KEY)
        
        await resend.emails.send({
          from: 'Contact Form <onboarding@resend.dev>',
          to: process.env.EMAIL_TO || 'your-email@example.com',
          subject: `New Contact from ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><small>View in admin: ${process.env.NEXT_PUBLIC_SERVER_URL}/admin/collections/contacts/${contact.id}</small></p>
          `,
          replyTo: email,
        })
      } catch (emailError) {
        console.error('Email send error:', emailError)
        // Email gagal tapi data tetap tersimpan
      }
    } else {
      console.warn('RESEND_API_KEY not found, skipping email notification')
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
      id: contact.id,
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}