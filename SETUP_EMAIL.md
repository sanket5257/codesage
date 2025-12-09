# Email Setup Guide - CodeSage Booking System

Your booking system is ready! Follow these simple steps to enable email notifications.

## Quick Setup (5 minutes)

### Step 1: Sign up for Resend (FREE)

1. Go to https://resend.com
2. Click "Sign Up" (Free tier: 100 emails/day, 3,000/month)
3. Verify your email

### Step 2: Get Your API Key

1. After logging in, go to https://resend.com/api-keys
2. Click "Create API Key"
3. Give it a name (e.g., "CodeSage Bookings")
4. Copy the API key (starts with `re_`)

### Step 3: Add API Key to .env.local

Open the `.env.local` file in your project root and replace:

```env
RESEND_API_KEY=your_resend_api_key_here
```

With your actual API key:

```env
RESEND_API_KEY=re_abc123xyz...
```

### Step 4: Restart Your Dev Server

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

## That's It! 🎉

Your booking system will now:
- ✅ Send you an email at **chougulesanket30@gmail.com** with booking details
- ✅ Send the customer a confirmation email
- ✅ Beautiful HTML email templates
- ✅ All booking information included

## Test It

1. Open your website
2. Click "Book a call"
3. Select a date and time
4. Fill in the form
5. Submit
6. Check your email! 📧

## Email Details

**You will receive:**
- Customer name, email, phone
- Meeting date, time, timezone
- Any additional notes they provided

**Customer will receive:**
- Confirmation of their booking
- Meeting details
- Your contact information

## Troubleshooting

### Emails not sending?

1. Check your API key is correct in `.env.local`
2. Make sure you restarted the dev server
3. Check the terminal for error messages
4. Verify your Resend account is active

### Want to use your own domain?

1. In Resend dashboard, go to "Domains"
2. Add your domain (e.g., codesage.com)
3. Add the DNS records they provide
4. Update `FROM_EMAIL` in `.env.local`:
   ```env
   FROM_EMAIL=bookings@yourdomain.com
   ```

## Current Configuration

- **Your Email:** chougulesanket30@gmail.com
- **From Email:** onboarding@resend.dev (Resend's default)
- **API Route:** /api/book-meeting
- **Email Provider:** Resend

## Need Help?

- Resend Docs: https://resend.com/docs
- Resend Support: support@resend.com

---

**Note:** The free tier of Resend (100 emails/day) is more than enough for most booking systems. You can upgrade later if needed.
