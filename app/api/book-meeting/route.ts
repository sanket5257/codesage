import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, date, time, timezone, notes } = body;

    // Validate required fields
    if (!name || !email || !date || !time) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email notification to you
    await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.YOUR_EMAIL || 'chougulesanket30@gmail.com',
      subject: `🗓️ New Meeting Booking - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #000; color: #fff; padding: 20px; text-align: center; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 8px; margin-top: 20px; }
              .detail { margin: 15px 0; padding: 10px; background: #fff; border-left: 4px solid #000; }
              .label { font-weight: bold; color: #666; }
              .value { color: #000; margin-top: 5px; }
              .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Meeting Booking</h1>
              </div>
              <div class="content">
                <h2>Contact Information</h2>
                <div class="detail">
                  <div class="label">Name</div>
                  <div class="value">${name}</div>
                </div>
                <div class="detail">
                  <div class="label">Email</div>
                  <div class="value">${email}</div>
                </div>
                <div class="detail">
                  <div class="label">Phone</div>
                  <div class="value">${phone || 'Not provided'}</div>
                </div>
                
                <h2 style="margin-top: 30px;">Meeting Details</h2>
                <div class="detail">
                  <div class="label">Date</div>
                  <div class="value">${date}</div>
                </div>
                <div class="detail">
                  <div class="label">Time</div>
                  <div class="value">${time}</div>
                </div>
                <div class="detail">
                  <div class="label">Timezone</div>
                  <div class="value">${timezone}</div>
                </div>
                
                ${notes ? `
                <h2 style="margin-top: 30px;">Additional Notes</h2>
                <div class="detail">
                  <div class="value">${notes}</div>
                </div>
                ` : ''}
              </div>
              <div class="footer">
                <p>This booking was made through the CodeSage website</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // Send confirmation email to customer
    await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: email,
      subject: '✅ Meeting Confirmed - CodeSage',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #000; color: #fff; padding: 30px; text-align: center; }
              .content { padding: 30px; }
              .meeting-box { background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0; }
              .detail { margin: 10px 0; }
              .label { font-weight: bold; color: #666; }
              .button { display: inline-block; background: #000; color: #fff; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin-top: 20px; }
              .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Your Meeting is Confirmed!</h1>
              </div>
              <div class="content">
                <p>Hi ${name},</p>
                <p>Thank you for booking a meeting with CodeSage. We're excited to connect with you!</p>
                
                <div class="meeting-box">
                  <h2 style="margin-top: 0;">Meeting Details</h2>
                  <div class="detail">
                    <span class="label">Date:</span> ${date}
                  </div>
                  <div class="detail">
                    <span class="label">Time:</span> ${time}
                  </div>
                  <div class="detail">
                    <span class="label">Timezone:</span> ${timezone}
                  </div>
                  <div class="detail">
                    <span class="label">Duration:</span> 30 minutes
                  </div>
                </div>
                
                <p>We'll send you a calendar invite and meeting link shortly.</p>
                <p>If you need to reschedule or have any questions, please reply to this email.</p>
                
                <p style="margin-top: 30px;">Looking forward to speaking with you!</p>
                <p><strong>The CodeSage Team</strong></p>
              </div>
              <div class="footer">
                <p>CodeSage - Digital Agency</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Booking confirmed! Check your email.',
        data: { name, email, date, time }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { error: 'Failed to process booking. Please try again.' },
      { status: 500 }
    );
  }
}
