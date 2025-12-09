# Email Integration Setup

The booking modal is now fully functional! To receive email notifications when someone books a meeting, you need to integrate an email service.

## Recommended: Resend (Easiest)

1. **Sign up for Resend**: https://resend.com (Free tier: 100 emails/day)

2. **Install Resend**:
```bash
npm install resend
```

3. **Get your API key** from Resend dashboard

4. **Create `.env.local` file** in the root:
```env
RESEND_API_KEY=re_your_api_key_here
YOUR_EMAIL=your-email@example.com
```

5. **Update `/app/api/book-meeting/route.ts`**:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, date, time, timezone, notes } = body;

    // Send email to you
    await resend.emails.send({
      from: 'bookings@yourdomain.com', // Must be verified domain
      to: process.env.YOUR_EMAIL!,
      subject: `New Meeting Booking - ${name}`,
      html: `
        <h2>New Meeting Booking Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <h3>Meeting Details:</h3>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Timezone:</strong> ${timezone}</p>
        <h3>Notes:</h3>
        <p>${notes || 'None'}</p>
      `,
    });

    // Send confirmation email to customer
    await resend.emails.send({
      from: 'bookings@yourdomain.com',
      to: email,
      subject: 'Meeting Confirmed - CodeSage',
      html: `
        <h2>Your meeting is confirmed!</h2>
        <p>Hi ${name},</p>
        <p>Thank you for booking a meeting with us.</p>
        <h3>Meeting Details:</h3>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Timezone:</strong> ${timezone}</p>
        <p>We'll send you a calendar invite shortly.</p>
        <p>Looking forward to speaking with you!</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json({ error: 'Failed to process booking' }, { status: 500 });
  }
}
```

## Alternative: SendGrid

1. Sign up at https://sendgrid.com
2. Install: `npm install @sendgrid/mail`
3. Get API key
4. Update the API route similarly

## Alternative: Nodemailer (Gmail)

1. Install: `npm install nodemailer`
2. Use Gmail SMTP or any email provider
3. Configure in API route

## Testing

For testing without email service:
- Check the console logs in your terminal
- The booking data will be logged
- Form validation and UI will work perfectly

## Current Status

✅ Booking modal fully functional
✅ Form validation
✅ Date and time selection
✅ API route ready
⏳ Email service integration (follow steps above)

Once you add the email service, bookings will automatically send emails!
