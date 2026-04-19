# Shaik Mohammed Rafi — Personal Portfolio

> Production-grade, multi-technology portfolio site with frontend, backend API, and AI-integrated content.

## 📁 Project Structure

```
portfolio/
├── index.html                    # Main portfolio page
├── assets/
│   ├── css/
│   │   └── main.css              # Complete design system
│   ├── js/
│   │   ├── data.js               # All portfolio content (edit here)
│   │   └── main.js               # All interactivity & features
│   └── images/
│       ├── rafi-1.jpg            # Full size (500px)
│       ├── rafi-1-sm.jpg         # Medium (240px)
│       ├── rafi-1-thumb.jpg      # Small (120px)
│       └── ... (4 photos × 3 sizes)
├── api/
│   ├── contact.py                # Python/Flask backend
│   ├── requirements.txt          # Python deps
│   ├── server.js                 # Node/Express backend
│   └── package.json              # Node deps
├── data/
│   └── profile.json              # Portable data format
├── docs/
│   ├── resume.docx               # Downloadable resume
│   └── DEPLOY.md                 # Step-by-step deployment guide
└── README.md
```

## ✨ Features

### Frontend
- **Custom animated cursor** with trailing ring
- **Live particle network** canvas with mouse repulsion
- **Role-aware content switching** (Backend / Full Stack / Cloud / AI)
- **3D tilt cards** throughout
- **Magnetic CTA buttons**
- **Typewriter hero** with role-specific phrases
- **Photo switcher** cycling 4 real photos in 3 places simultaneously
- **Lightbox gallery** with keyboard navigation
- **Command palette** (Ctrl+K) with 20+ commands
- **Theme toggle** (dark/light)
- **Scroll progress bar**, side dots, back-to-top
- **Contact form** with validation + mailto fallback
- **Toast notifications**
- **Konami code easter egg**
- **Fully responsive** down to 320px

### Backend (optional)
- **Python Flask** or **Node.js Express** API
- SMTP email forwarding
- Rate limiting
- Input validation
- Deployable to Vercel / Render / Railway for free

### Content
- All resume data extracted & presented
- 6 regular projects + 6 AI/GenAI projects
- 12 skill bars covering Java, AWS, AI/ML, etc.
- 40+ technology chips
- Photo gallery with 4 images

## 🚀 Quick Start (Local)

### Just the Frontend
```bash
# From the portfolio/ directory
python3 -m http.server 8000
# OR
npx serve .
```
Visit `http://localhost:8000`

### With Python Backend
```bash
cd api
pip install -r requirements.txt
python contact.py   # Runs on :5000
```
Then serve `index.html` with any static server (port 8000).

### With Node Backend
```bash
cd api
npm install
npm start           # Runs on :5000
```

## 🌐 Free Deployment

**See `docs/DEPLOY.md` for the complete step-by-step guide.**

TL;DR — two recommended paths:

1. **GitHub Pages** (easiest, frontend only) — 5 minutes
2. **Vercel** (free, full-stack capable) — 10 minutes

## 📝 Editing Content

All content is in **`assets/js/data.js`** — open that file and edit:
- `SKILLS` — skill bars + percentages
- `PROJECTS` / `AI_PROJECTS` — project cards
- `EXPERIENCE` — work history
- `HIGHLIGHTS` — core strengths
- `ROLES` — role-specific hero content
- `ACHIEVEMENTS`, `LANGUAGES`, `CHIPS`, `MQ1`/`MQ2`

## 🛠 Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | HTML5, CSS3, Vanilla JS (ES6+) |
| Backend (Python) | Flask, Flask-CORS |
| Backend (Node) | Express, Nodemailer |
| Fonts | Google Fonts (Syne, DM Sans, JetBrains Mono) |
| Images | Pillow-processed JPEG (3 sizes each) |
| No frameworks. No build step. Pure web. |

## 📬 Contact

**Shaik Mohammed Rafi**
- 📧 mohammedrafi.java@gmail.com
- 📱 +91 7386796653
- 🔗 [LinkedIn](https://www.linkedin.com/in/shaik-mohammedrafi/) · [GitHub](https://github.com/RAFI419/) · [LeetCode](https://leetcode.com/u/Rafi0419/)

## 📜 License

MIT — personal portfolio. Feel free to fork and use as a template.
