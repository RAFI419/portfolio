# 🚀 Complete Step-by-Step Deployment Guide

**Get your portfolio LIVE for FREE with your own shareable URL.**

This guide covers **4 deployment options** in detail. Pick the one that fits you best:

| Option | Difficulty | Best For | URL Format |
|--------|-----------|----------|------------|
| **Vercel** ⭐ | ⭐ Easiest | Full-stack with backend API | `rafi-portfolio.vercel.app` |
| **GitHub Pages** | ⭐ Easiest | Frontend only, recruiter-facing | `rafi419.github.io/portfolio` |
| **Netlify** | ⭐ Easy | Frontend + forms with no code | `rafi-portfolio.netlify.app` |
| **Render** | ⭐⭐ Medium | Full Python/Node backend | `rafi-portfolio.onrender.com` |

---

## ✅ BEFORE YOU START — Prerequisites (One-Time)

You need these accounts (all **FREE**):

### 1. GitHub Account
- Go to https://github.com/signup
- Sign up with your email (mohammedrafi.java@gmail.com)
- Verify email
- ✅ Already have one (`RAFI419`)? Perfect.

### 2. Install Git on Your Computer
**Windows:**
- Download from https://git-scm.com/download/win
- Install with all defaults
- Open "Git Bash" from Start menu to verify: `git --version`

**Mac:**
```bash
brew install git
# OR just run: git --version  (macOS prompts to install)
```

### 3. Set Up Git Identity (one-time)
Open Terminal / Git Bash:
```bash
git config --global user.name "Shaik Mohammed Rafi"
git config --global user.email "mohammedrafi.java@gmail.com"
```

### 4. Download Your Portfolio
Get the zipped `portfolio/` folder onto your computer in a folder you'll remember, e.g.:
- **Windows:** `C:\Users\YourName\Documents\portfolio`
- **Mac:** `~/Documents/portfolio`

---

## 🌟 OPTION 1: VERCEL (Recommended — 10 minutes)

**Why:** Free forever for hobby projects, custom domain support, automatic HTTPS, CDN, and serverless functions for your backend API.

### Step 1 — Push Portfolio to GitHub

Open Terminal / Git Bash and `cd` into your portfolio folder:
```bash
cd ~/Documents/portfolio       # Mac/Linux
cd C:\Users\YourName\Documents\portfolio   # Windows
```

Initialize Git and commit:
```bash
git init
git add .
git commit -m "Initial portfolio commit"
```

Create a new GitHub repo:
1. Go to https://github.com/new
2. Repository name: **`portfolio`**
3. Set it as **Public**
4. **Do NOT** initialize with README (we already have one)
5. Click **"Create repository"**

Copy the 3 commands GitHub shows you and paste them, or:
```bash
git branch -M main
git remote add origin https://github.com/RAFI419/portfolio.git
git push -u origin main
```

You'll be prompted to login — use your GitHub username and a **personal access token** (not password). To get a token:
- GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token → Select "repo" scope → Generate

### Step 2 — Deploy on Vercel

1. Go to https://vercel.com/signup
2. Click **"Continue with GitHub"** — this links your GitHub
3. After signing in, click **"Add New..."** → **"Project"**
4. Find **"portfolio"** in the list → click **"Import"**
5. Configure:
   - Framework Preset: **Other**
   - Root Directory: `./` (default)
   - Build Command: *leave empty*
   - Output Directory: `./` (default)
6. Click **"Deploy"**

**Wait 30–60 seconds.** You'll see 🎉 "Your project has been deployed."

Your live URL looks like: `https://portfolio-abc123.vercel.app`

### Step 3 — Get a Nicer URL (Optional)

1. On Vercel project dashboard → **Settings → Domains**
2. Change the subdomain to something clean like `shaik-mohammed-rafi.vercel.app`
3. Click **Save**

✅ **DONE!** Share this URL anywhere.

### Step 4 — Deploy Backend API (Optional, for contact form)

If you want the contact form to actually send emails through the Python or Node backend:

Create `vercel.json` in your portfolio root:
```json
{
  "version": 2,
  "builds": [
    { "src": "api/contact.py", "use": "@vercel/python" }
  ],
  "routes": [
    { "src": "/api/contact", "dest": "api/contact.py" }
  ]
}
```

Add environment variables on Vercel:
- Dashboard → Settings → Environment Variables
- Add:
  - `SMTP_USER` = your Gmail (e.g. `mohammedrafi.java@gmail.com`)
  - `SMTP_PASS` = Gmail app password (see note below)
  - `OWNER_EMAIL` = `mohammedrafi.java@gmail.com`

**Getting a Gmail App Password:**
1. Google Account → Security
2. Enable 2-Step Verification (required)
3. Search "App passwords" → generate a 16-char password
4. Paste it as `SMTP_PASS` on Vercel

Push again:
```bash
git add .
git commit -m "Add Vercel config"
git push
```

Vercel auto-deploys within 30 seconds. Your `/api/contact` endpoint is now live.

### Step 5 — Auto-Deploy Every Change

Every time you run `git push`, Vercel rebuilds your site within seconds. That's it.

---

## 🌟 OPTION 2: GITHUB PAGES (Easiest — 5 minutes)

**Why:** Simplest possible deploy. No account needed beyond GitHub. **Limitation:** No backend API — contact form falls back to `mailto:` which is still fine.

### Step 1 — Push to GitHub (same as Option 1 Step 1)

### Step 2 — Enable GitHub Pages

1. Go to your GitHub repo: `https://github.com/RAFI419/portfolio`
2. Click **Settings** (top-right of the repo)
3. Left sidebar → **Pages**
4. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main** / folder: **/ (root)**
5. Click **Save**

### Step 3 — Visit Your Site

GitHub shows a message: *"Your site is live at https://rafi419.github.io/portfolio/"*

**Wait 1–2 minutes** after first enabling for DNS propagation, then open that URL.

### Step 4 — Custom Free Domain (Optional)

Get a free subdomain at https://js.org (for JavaScript developers) or use the default `*.github.io/portfolio`.

✅ **DONE!**

---

## 🌟 OPTION 3: NETLIFY (Easy — 7 minutes)

**Why:** Beautiful UI, built-in form handling (no backend needed!), drag-and-drop option.

### Option A — Drag and Drop (NO GITHUB NEEDED)

1. Go to https://app.netlify.com/drop
2. Drag your entire `portfolio/` folder onto the page
3. **DONE!** You instantly get a URL like `https://random-name-123.netlify.app`

### Option B — Git-based Deploy

1. Push portfolio to GitHub (Option 1 Step 1)
2. Go to https://app.netlify.com/signup → sign in with GitHub
3. **"Add new site"** → **"Import an existing project"** → **GitHub**
4. Select your `portfolio` repo
5. Build settings: leave everything empty
6. Click **Deploy**

### Step 3 — Make the Contact Form Submit Without a Backend

Open `index.html`, find the `<form id="contact-form"` line, and change it to:
```html
<form id="contact-form" class="contact-form rv-r" data-netlify="true" netlify-honeypot="bot-field" novalidate>
  <input type="hidden" name="form-name" value="contact"/>
  <input type="hidden" name="bot-field"/>
  ... (rest stays the same)
```

Commit & push — Netlify auto-captures submissions at **Site → Forms**.

### Step 4 — Change Subdomain

Site settings → Domain management → **Options → Edit site name** → `shaik-rafi-portfolio`

---

## 🌟 OPTION 4: RENDER (For Backend — 12 minutes)

**Why:** Best if you want to run the actual Python/Node backend for free.

### Step 1 — Push to GitHub (as before)

### Step 2 — Deploy Frontend (Static Site)

1. https://render.com/ → Sign up with GitHub
2. Dashboard → **"New +"** → **"Static Site"**
3. Connect your `portfolio` repo
4. Configure:
   - Name: `rafi-portfolio`
   - Publish Directory: `./`
5. Click **"Create Static Site"**

### Step 3 — Deploy Python Backend

1. Dashboard → **"New +"** → **"Web Service"**
2. Connect same `portfolio` repo
3. Configure:
   - Name: `rafi-portfolio-api`
   - Root Directory: `api`
   - Runtime: **Python 3**
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `python contact.py`
4. Add Environment Variables (same as Vercel Step 4)
5. Click **Create Web Service**

### Step 4 — Update Frontend to Use the API

Edit `assets/js/main.js`, find the contact form submit handler, and replace the `mailto:` block with:
```javascript
// Replace the setTimeout block inside form.addEventListener with:
try {
  const res = await fetch('https://rafi-portfolio-api.onrender.com/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, subject: subj, message })
  });
  const data = await res.json();
  if (data.ok) { toast('✅ Message sent!'); form.reset(); }
  else { toast('❌ ' + data.error); }
} catch (err) {
  toast('⚠️ Network error — please try email directly');
}
```

Push the change — Render auto-deploys.

---

## 🎯 RECOMMENDED PATH FOR YOU

Based on your goals, here's what I suggest:

```
┌─ JUST WANT IT LIVE FAST? ─────────────────┐
│   → OPTION 1: VERCEL                       │
│   Time: 10 min                             │
│   Gets you: shaik-rafi.vercel.app          │
└────────────────────────────────────────────┘

┌─ JUST TESTING / RECRUITERS ONLY? ──────────┐
│   → OPTION 2: GITHUB PAGES                 │
│   Time: 5 min                              │
│   Gets you: rafi419.github.io/portfolio    │
└────────────────────────────────────────────┘

┌─ WANT REAL BACKEND EMAILS? ────────────────┐
│   → OPTION 4: RENDER (static + web service)│
│   Time: 15 min                             │
│   Gets you: Full stack, really sends email │
└────────────────────────────────────────────┘
```

---

## 🔧 MAKING UPDATES AFTER DEPLOYMENT

The workflow for ANY option is:
```bash
# 1. Edit files on your computer (change content in assets/js/data.js)
# 2. Save files
# 3. Push to GitHub:
git add .
git commit -m "Updated projects section"
git push

# 4. Deploy happens AUTOMATICALLY within 30-60 seconds
```

---

## 🌐 GETTING A CUSTOM DOMAIN (Optional, ~$10/year)

Want `shaikrafi.dev` or `mohammedrafi.com`?

1. Buy a domain at https://www.namecheap.com or https://porkbun.com (~$10/year)
2. On Vercel/Netlify → Settings → Domains → Add domain
3. Copy the DNS records shown
4. At your domain provider → DNS settings → paste the records
5. Wait 5–30 minutes for DNS propagation
6. Your portfolio is live at your custom domain!

---

## 🆘 TROUBLESHOOTING

### "Permission denied" when running git push
- You need a Personal Access Token (not your password)
- GitHub → Settings → Developer settings → Personal access tokens → Generate new
- Use the token when Git asks for password

### Deployment shows blank page
- Check browser console (F12) for errors
- Most likely: a file path issue. Ensure all paths use `assets/...` (no leading slash)

### Images not loading on live site
- Confirm `assets/images/` folder was committed to Git:
  ```bash
  git status
  git add assets/images/
  git commit -m "Add images"
  git push
  ```

### Contact form doesn't send email
- Option A/B/C: The form opens the user's email client — this is the intended fallback
- Option D: Check Render logs for SMTP errors, verify App Password is correct

### Custom cursor shows a duplicate system cursor
- Already handled — on touch devices, custom cursor auto-disables

### Want to customize colors/content?
- All content: edit `assets/js/data.js`
- Colors: edit CSS variables at the top of `assets/css/main.css`
- No rebuild needed — just refresh the browser after saving

---

## 📊 FREE TIER LIMITS (All Generous)

| Platform | Free Tier |
|----------|-----------|
| Vercel | 100 GB bandwidth/mo, unlimited sites |
| GitHub Pages | 100 GB bandwidth/mo, 1 GB storage |
| Netlify | 100 GB bandwidth/mo, 300 build min/mo |
| Render | 750 hrs/mo (enough for always-on), slower cold start |

For a personal portfolio, you'll never hit these limits.

---

## 🎉 YOU'RE DONE!

Once deployed, add your portfolio URL to:

- ✅ LinkedIn profile → Contact info → Website
- ✅ GitHub profile → Bio
- ✅ Resume — header line, e.g.: `Portfolio: shaik-rafi.vercel.app`
- ✅ Email signature
- ✅ Business cards

**Share the URL in every job application.** Recruiters love seeing live portfolios.

---

**Questions?** Email mohammedrafi.java@gmail.com

Good luck, Rafi! 🚀
