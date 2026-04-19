/**
 * Contact Form Backend — Node.js / Express
 * ==========================================
 * Alternative to the Python version.
 * Deploy to Vercel, Render, Railway, or Fly.io.
 *
 * POST /api/contact  → sends email or queues message
 *
 * Install: npm install express cors nodemailer
 * Run:     node api/server.js
 */

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json({ limit: '20kb' }));
app.use(cors({ origin: '*' }));  // restrict in production

// Config via env
const {
  SMTP_HOST = 'smtp.gmail.com',
  SMTP_PORT = 587,
  SMTP_USER,
  SMTP_PASS,
  OWNER_EMAIL = 'mohammedrafi.java@gmail.com',
  PORT = 5000,
} = process.env;

// Rate limiting
const rateLimit = new Map();
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;

function checkRate(ip) {
  const now = Date.now();
  const log = (rateLimit.get(ip) || []).filter(t => now - t < RATE_WINDOW_MS);
  if (log.length >= RATE_MAX) return false;
  log.push(now);
  rateLimit.set(ip, log);
  return true;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let transporter = null;
if (SMTP_USER && SMTP_PASS) {
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: false,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

app.post('/api/contact', async (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  if (!checkRate(ip)) return res.status(429).json({ ok: false, error: 'Rate limit exceeded' });

  const { name = '', email = '', subject = '', message = '' } = req.body || {};
  const n = name.trim(), e = email.trim(), s = subject.trim(), m = message.trim();

  if (n.length < 2) return res.status(400).json({ ok: false, error: 'Name too short' });
  if (!EMAIL_RE.test(e)) return res.status(400).json({ ok: false, error: 'Invalid email' });
  if (m.length < 10) return res.status(400).json({ ok: false, error: 'Message too short' });
  if (m.length > 2000) return res.status(400).json({ ok: false, error: 'Message too long' });

  let sent = false;
  if (transporter) {
    try {
      await transporter.sendMail({
        from: SMTP_USER,
        to: OWNER_EMAIL,
        replyTo: e,
        subject: `[Portfolio] ${s || 'Contact from ' + n}`,
        text: `From: ${n} <${e}>\nSubject: ${s}\n\n${m}`,
      });
      sent = true;
    } catch (err) {
      console.error('SMTP error:', err.message);
    }
  }

  res.json({
    ok: true, sent,
    message: sent ? 'Message sent!' : 'Received (SMTP not configured)',
  });
});

app.get('/api/health', (_, res) => res.json({ status: 'ok', service: 'Rafi Portfolio API' }));

app.listen(PORT, () => console.log(`Portfolio API running on port ${PORT}`));
