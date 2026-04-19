"""
Contact Form Backend — Python / Flask
======================================
Deployable to Vercel, Render, Railway, or Fly.io for free.

Endpoint: POST /api/contact
Body: { "name": str, "email": str, "subject": str, "message": str }

Features:
 - Input validation
 - Rate limiting (in-memory, resets on restart)
 - Email forwarding via SMTP (env vars)
 - CORS enabled for portfolio domain
 - Returns JSON response

For production, add:
 - Redis for proper rate limiting
 - SendGrid / Resend for reliable email delivery
 - reCAPTCHA to prevent spam
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
import re
import os
import smtplib
import time
from email.mime.text import MIMEText
from collections import defaultdict

app = Flask(__name__)
CORS(app, origins=["*"])  # In production: restrict to your domain

# Configuration — set these as environment variables
SMTP_HOST = os.getenv("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SMTP_USER = os.getenv("SMTP_USER", "")
SMTP_PASS = os.getenv("SMTP_PASS", "")
OWNER_EMAIL = os.getenv("OWNER_EMAIL", "mohammedrafi.java@gmail.com")

# Rate limiting: max 5 requests per IP per 10 minutes
rate_limit = defaultdict(list)
RATE_LIMIT_WINDOW = 600  # 10 min
RATE_LIMIT_MAX = 5

EMAIL_RE = re.compile(r"^[^\s@]+@[^\s@]+\.[^\s@]+$")


def check_rate_limit(ip: str) -> bool:
    now = time.time()
    rate_limit[ip] = [t for t in rate_limit[ip] if now - t < RATE_LIMIT_WINDOW]
    if len(rate_limit[ip]) >= RATE_LIMIT_MAX:
        return False
    rate_limit[ip].append(now)
    return True


def send_email(name: str, email: str, subject: str, message: str) -> bool:
    """Send email via SMTP. Returns True on success."""
    if not SMTP_USER or not SMTP_PASS:
        app.logger.warning("SMTP credentials missing — skipping real send.")
        return False
    try:
        body = f"""
New contact form submission from your portfolio:

Name: {name}
Email: {email}
Subject: {subject or '(no subject)'}

Message:
{message}

---
Sent via portfolio contact form.
"""
        msg = MIMEText(body)
        msg["Subject"] = f"[Portfolio] {subject or 'New Contact from ' + name}"
        msg["From"] = SMTP_USER
        msg["To"] = OWNER_EMAIL
        msg["Reply-To"] = email

        with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as s:
            s.starttls()
            s.login(SMTP_USER, SMTP_PASS)
            s.send_message(msg)
        return True
    except Exception as e:
        app.logger.error(f"SMTP error: {e}")
        return False


@app.route("/api/contact", methods=["POST"])
def contact():
    ip = request.headers.get("X-Forwarded-For", request.remote_addr)

    if not check_rate_limit(ip):
        return jsonify({"ok": False, "error": "Rate limit exceeded. Please try again later."}), 429

    data = request.get_json(silent=True) or {}
    name = (data.get("name") or "").strip()
    email = (data.get("email") or "").strip()
    subject = (data.get("subject") or "").strip()
    message = (data.get("message") or "").strip()

    # Validation
    if len(name) < 2:
        return jsonify({"ok": False, "error": "Name must be at least 2 characters"}), 400
    if not EMAIL_RE.match(email):
        return jsonify({"ok": False, "error": "Invalid email address"}), 400
    if len(message) < 10:
        return jsonify({"ok": False, "error": "Message must be at least 10 characters"}), 400
    if len(message) > 2000:
        return jsonify({"ok": False, "error": "Message too long"}), 400

    # Try to send — fallback to just logging if SMTP not configured
    sent = send_email(name, email, subject, message)

    return jsonify({
        "ok": True,
        "sent": sent,
        "message": "Your message has been received! I'll get back to you soon." if sent
                   else "Received. Email delivery is not configured in this deployment — please use mailto fallback."
    }), 200


@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({"status": "ok", "service": "Rafi Portfolio API"})


if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)
