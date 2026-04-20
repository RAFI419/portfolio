'use strict';
/* ============================================================
   MAIN PORTFOLIO JS — all features
   ============================================================ */

/* ── LOADER ─────────────────────────────────────────────────── */
(() => {
  const steps=[{el:'ls1',t:300},{el:'ls2',t:900},{el:'ls3',t:1600}];
  steps.forEach(s => setTimeout(() => document.getElementById(s.el).classList.add('on'), s.t));
  let p = 0;
  const pEl = document.getElementById('ld-pct');
  const iv = setInterval(() => {
    p = Math.min(p + Math.random()*8 + 2, 100);
    pEl.textContent = Math.floor(p) + '%';
    if (p >= 100) clearInterval(iv);
  }, 80);
  window.addEventListener('load', () => {
    setTimeout(() => document.getElementById('loader').classList.add('out'), 400);
    // Register Service Worker for PWA only in secure contexts
    if ('serviceWorker' in navigator && window.location.protocol !== 'file:') {
      navigator.serviceWorker.register('/sw.js')
        .then(reg => console.log('SW registered:', reg))
        .catch(err => console.log('SW registration failed:', err));
    }
    // Fetch GitHub stats
    fetchGitHubStats();
  });
  // Fallback in case load event is slow or a script error prevents hide
  setTimeout(() => {
    const loaderElement = document.getElementById('loader');
    if (loaderElement && !loaderElement.classList.contains('out')) {
      loaderElement.classList.add('out');
      console.warn('Loader fallback triggered: hiding loader after timeout.');
    }
  }, 5600);
})();

/* ── SCROLL PROGRESS ────────────────────────────────────────── */
const scrollBar = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  const t = document.documentElement.scrollHeight - window.innerHeight;
  scrollBar.style.width = (window.scrollY / t * 100) + '%';
}, { passive: true });

/* ── CUSTOM CURSOR ──────────────────────────────────────────── */
(() => {
  const dot = document.getElementById('cur-dot');
  const ring = document.getElementById('cur-ring');
  const txt = document.getElementById('cur-text');
  let rx=0, ry=0, mx=window.innerWidth/2, my=window.innerHeight/2;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px'; dot.style.top = my + 'px';
    txt.style.left = (mx+24) + 'px'; txt.style.top = (my-10) + 'px';
  });
  (function loop() {
    rx += (mx-rx)*.1; ry += (my-ry)*.1;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(loop);
  })();

  // Delegated hover detection
  document.addEventListener('mouseover', e => {
    const el = e.target.closest('a, button, .chip, .proj-card, .stat-card, .exp-card, .hl-card, .gallery-card, .contact-card, .photo-dot, .side-dot, .rs-btn');
    if (el) document.body.classList.add('cursor-link');
    if (e.target.closest('.tilt')) document.body.classList.add('cursor-hover');
  });
  document.addEventListener('mouseout', e => {
    if (!e.relatedTarget || !e.relatedTarget.closest || !e.relatedTarget.closest('a, button, .chip, .proj-card, .stat-card, .exp-card, .hl-card, .gallery-card, .contact-card, .photo-dot, .side-dot, .rs-btn')) {
      document.body.classList.remove('cursor-link');
    }
    if (!e.relatedTarget || !e.relatedTarget.closest || !e.relatedTarget.closest('.tilt')) {
      document.body.classList.remove('cursor-hover');
    }
  });
})();

/* ── PARTICLE CANVAS ────────────────────────────────────────── */
(() => {
  const canvas = document.getElementById('particle-canvas');
  const ctx = canvas.getContext('2d');
  const COLS = ['#4f46e5','#ec4899','#06b6d4','#f59e0b','#10b981','#a78bfa'];
  let W, H, pts = [], mouse = { x:-9999, y:-9999 };
  const N = 100;

  function resize() { W=canvas.width=window.innerWidth; H=canvas.height=window.innerHeight; }
  resize(); window.addEventListener('resize', resize);
  document.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

  function mk() {
    return {
      x: Math.random()*W, y: Math.random()*H,
      vx: (Math.random()-.5)*.55, vy: (Math.random()-.5)*.55,
      r: Math.random()*1.8+.8,
      col: COLS[Math.floor(Math.random()*COLS.length)],
      alpha: Math.random()*.6+.3,
    };
  }
  for (let i=0; i<N; i++) pts.push(mk());

  function draw() {
    ctx.clearRect(0,0,W,H);
    pts.forEach((p, i) => {
      const dx = p.x-mouse.x, dy = p.y-mouse.y, d = Math.sqrt(dx*dx+dy*dy);
      if (d < 100) { p.vx += dx/d*.5; p.vy += dy/d*.5; }
      const spd = Math.sqrt(p.vx*p.vx+p.vy*p.vy);
      if (spd > 1.5) { p.vx = p.vx/spd*1.5; p.vy = p.vy/spd*1.5; }
      p.x += p.vx; p.y += p.vy;
      if (p.x<0||p.x>W) p.vx *= -1;
      if (p.y<0||p.y>H) p.vy *= -1;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = p.col; ctx.globalAlpha = p.alpha; ctx.fill();
      for (let j=i+1; j<N; j++) {
        const q = pts[j], dx2 = p.x-q.x, dy2 = p.y-q.y, d2 = Math.sqrt(dx2*dx2+dy2*dy2);
        if (d2 < 130) {
          ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(q.x,q.y);
          ctx.strokeStyle = p.col; ctx.globalAlpha = (1-d2/130)*.22; ctx.lineWidth = .8; ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ── SPOTLIGHT ──────────────────────────────────────────────── */
(() => {
  const el = document.getElementById('spotlight');
  document.addEventListener('mousemove', e => {
    el.style.background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(79,70,229,.07), transparent 70%)`;
  });
})();

/* ── THEME TOGGLE ───────────────────────────────────────────── */
const themeBtn = document.getElementById('theme-btn');
function setTheme(mode) {
  const dark = mode === 'dark';
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  themeBtn.textContent = dark ? '🌙' : '☀️';
  localStorage.setItem('portfolioTheme', dark ? 'dark' : 'light');
}
function toggleTheme() {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  setTheme(next);
  toast(next === 'dark' ? '🌙 Dark mode on' : '☀️ Light mode on');
}
function initTheme() {
  const saved = localStorage.getItem('portfolioTheme');
  const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  setTheme(saved || preferred);
}
themeBtn.addEventListener('click', toggleTheme);

/* ── NAVBAR SCROLL ──────────────────────────────────────────── */
(() => {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive:true });
})();

/* ── ACTIVE NAV LINK + SIDE DOTS ────────────────────────────── */
(() => {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a[data-section]');
  const dots = document.querySelectorAll('.side-dot');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.id;
        links.forEach(l => l.classList.toggle('active', l.dataset.section === id));
        dots.forEach(d => d.classList.toggle('active', d.dataset.target === id));
      }
    });
  }, { threshold: .35 });
  sections.forEach(s => io.observe(s));
})();

document.querySelectorAll('.side-dot').forEach(d => {
  d.addEventListener('click', () => {
    const t = document.getElementById(d.dataset.target);
    if (t) t.scrollIntoView({ behavior:'smooth', block:'start' });
  });
});

/* ── MOBILE MENU ────────────────────────────────────────────── */
(() => {
  const ham = document.getElementById('ham');
  const menu = document.getElementById('mobile-menu');
  let open = false;
  ham.addEventListener('click', () => {
    open = !open;
    menu.style.display = open?'flex':'none';
    ham.querySelectorAll('span').forEach((s, i) => {
      if (open) {
        if (i===0) s.style.transform = 'rotate(45deg) translate(5px,5px)';
        if (i===1) s.style.opacity = '0';
        if (i===2) s.style.transform = 'rotate(-45deg) translate(5px,-5px)';
      } else { s.style.transform = ''; s.style.opacity = ''; }
    });
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    open = false; menu.style.display = 'none';
    ham.querySelectorAll('span').forEach(s => { s.style.transform=''; s.style.opacity=''; });
  }));
})();

/* ── DATA RENDERING ─────────────────────────────────────────── */
function render() {
  try {
    // Skill bars
    const skillBarsContainer = document.getElementById('skill-bars-container');
    if (skillBarsContainer) {
      skillBarsContainer.innerHTML = SKILLS.map(s => `
        <div class="skb">
          <div class="skb-header">
            <span class="skb-name">${s.name}</span>
            <span class="skb-pct">${s.pct}%</span>
          </div>
          <div class="skb-track">
            <div class="skb-fill" data-w="${s.pct}" style="background:${s.grad}"></div>
          </div>
        </div>
      `).join('');
    }

    // Chips
    const chipCloudContainer = document.getElementById('chip-cloud-container');
    if (chipCloudContainer) {
      chipCloudContainer.innerHTML = CHIPS.map(([name, cls]) =>
        `<span class="chip ${cls}">${name}</span>`
      ).join('');
    }

    // Timeline
    const timelineContainer = document.getElementById('timeline-container');
    if (timelineContainer) {
      timelineContainer.innerHTML = EXPERIENCE.map(e => `
        <div class="tl-item rv">
          <div class="exp-card tilt">
            <div class="tilt-shine"></div>
            <div class="exp-header">
              <div class="exp-title">${e.title}</div>
              <div class="exp-badge ${e.badgeCls}">${e.badge}</div>
            </div>
            <div class="exp-company">${e.company}</div>
            <div class="exp-meta"><span>📅 ${e.dates}</span><span>📍 ${e.location}</span></div>
            <div class="exp-client">${e.client}</div>
            <ul class="exp-desc">${e.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
            <div class="exp-chips-row">${e.chips.map(c => `<span class="ec">${c}</span>`).join('')}</div>
          </div>
        </div>
      `).join('');
    }

    console.log('✅ Render completed successfully');
  } catch (err) {
    console.error('❌ Render error:', err);
  }
}

// Projects
const projectsContainer = document.getElementById('projects-container');
if (projectsContainer) {
  projectsContainer.innerHTML = PROJECTS.map((p, i) => `
    <div class="proj-card rv d${(i%6)+1} tilt">
      <div class="tilt-shine"></div>
      <div class="proj-glow" style="background:radial-gradient(${p.glow},transparent)"></div>
      <span class="proj-emoji">${p.emoji}</span>
      <div class="proj-name">${p.name}</div>
      <p class="proj-desc">${p.desc}</p>
      <div class="proj-tags">${p.tags.map(t => `<span class="proj-tag">${t}</span>`).join('')}</div>
      ${p.impact ? `<div class="proj-impact">${p.impact}</div>` : ''}
    </div>
  `).join('');
}

// AI Projects
const aiProjectsContainer = document.getElementById('ai-projects-container');
if (aiProjectsContainer) {
  aiProjectsContainer.innerHTML = AI_PROJECTS.map((p, i) => `
    <div class="proj-card rv d${(i%6)+1} tilt">
      <div class="tilt-shine"></div>
      <div class="proj-glow" style="background:radial-gradient(${p.glow},transparent)"></div>
      <span class="proj-emoji">${p.emoji}</span>
      <div class="proj-name">${p.name}</div>
      <p class="proj-desc">${p.desc}</p>
      <div class="proj-tags">${p.tags.map(t => `<span class="proj-tag">${t}</span>`).join('')}</div>
      ${p.impact ? `<div class="proj-impact">${p.impact}</div>` : ''}
    </div>
  `).join('');
}

// Highlights
const highlightsContainer = document.getElementById('highlights-container');
if (highlightsContainer) {
  highlightsContainer.innerHTML = HIGHLIGHTS.map((h, i) => `
    <div class="hl-card rv d${(i%3)+1} tilt">
      <div class="tilt-shine"></div>
      <div class="hl-icon">${h.icon}</div>
      <div class="hl-title">${h.title}</div>
      <div class="hl-text">${h.text}</div>
    </div>
  `).join('');
}

// Gallery
const galleryContainer = document.getElementById('gallery-container');
if (galleryContainer && GALLERY_PHOTOS) {
  galleryContainer.innerHTML = GALLERY_PHOTOS.map((p, i) => `
    <div class="gallery-card tilt" data-i="${i}">
      <img src="${p.src}" alt="${p.label}" loading="lazy"/>
      <div class="gallery-card-label">${p.label}</div>
    </div>
  `).join('');
}

// Languages
const langContainer = document.getElementById('lang-container');
if (langContainer) {
  langContainer.innerHTML = LANGUAGES.map(l => `
    <div class="lang-item">
      <div class="lang-header"><span>${l.name}</span><span class="lang-level">${l.level}</span></div>
      <div class="lang-bar-bg"><div class="lang-bar-fill" data-w="${l.pct}" style="background:${l.grad}"></div></div>
    </div>
  `).join('');
}

// Achievements
const achContainer = document.getElementById('ach-container');
if (achContainer) {
  achContainer.innerHTML = ACHIEVEMENTS.map(a => `
    <div class="ach-item rv">
      <div class="ach-icon">${a.icon}</div>
      <div class="ach-text">${a.text}</div>
    </div>
  `).join('');
}

// Code Demos
const demosContainer = document.getElementById('demos-container');
if (demosContainer) {
  demosContainer.innerHTML = CODE_DEMOS.map((d, i) => `
    <div class="demo-card rv d${(i%6)+1} tilt">
      <div class="tilt-shine"></div>
      <div class="demo-lang">${d.lang}</div>
      <div class="demo-title">${d.title}</div>
      <p class="demo-desc">${d.desc}</p>
      <pre class="demo-code language-${d.lang.toLowerCase()}"><code>${d.code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
      ${d.runnable ? '<button class="demo-run" onclick="runDemo(this)">Run</button>' : ''}
      <div class="demo-output"></div>
    </div>
  `).join('');
}

// Marquees — duplicate for seamless loop
const mq1El = document.getElementById('mq1');
const mq2El = document.getElementById('mq2');
const mk1 = item => `<div class="mq-item"><span class="mq-dot"></span>${item}</div>`;
if (mq1El) mq1El.innerHTML = [...MQ1, ...MQ1].map(mk1).join('');
if (mq2El) mq2El.innerHTML = [...MQ2, ...MQ2].map(mk1).join('');

/* ── GITHUB STATS ────────────────────────────────────────────── */
async function fetchGitHubStats() {
  try {
    const username = 'RAFI419'; // Replace with actual GitHub username
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
    ]);

    if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API error');

    const user = await userRes.json();
    const repos = await reposRes.json();

    // Calculate stats
    const stars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    const forks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);

    // Update DOM
    document.getElementById('repos-count').textContent = user.public_repos;
    document.getElementById('stars-count').textContent = stars.toLocaleString();
    document.getElementById('forks-count').textContent = forks.toLocaleString();
    document.getElementById('followers-count').textContent = user.followers;

    // Try to get contribution data (limited by GitHub API)
    document.getElementById('contributions-count').textContent = '~500+'; // Approximate
    document.getElementById('streak-count').textContent = '~30'; // Approximate

    // Set contribution chart (using GitHub's contribution chart)
    const chartImg = document.getElementById('github-contributions');
    chartImg.src = `https://ghchart.rshah.org/${username}`;
    chartImg.style.display = 'block';

  } catch (error) {
    console.log('GitHub stats fetch failed:', error);
    // Fallback values
    document.getElementById('repos-count').textContent = '15+';
    document.getElementById('stars-count').textContent = '50+';
    document.getElementById('forks-count').textContent = '25+';
    document.getElementById('followers-count').textContent = '20+';
    document.getElementById('contributions-count').textContent = '500+';
    document.getElementById('streak-count').textContent = '30+';
  }
}

const PROJECT_SECTIONS = {
  projects: { data: PROJECTS, container: 'projects-container', filter: 'projects-filter', search: 'projects-search' },
  'ai-projects': { data: AI_PROJECTS, container: 'ai-projects-container', filter: 'ai-projects-filter', search: 'ai-projects-search' },
};
const activeFilter = { projects:'all', 'ai-projects':'all' };
const searchQuery = { projects:'', 'ai-projects':'' };

function getProjectTags(items) {
  return [...new Set(items.flatMap(p => p.tags))].sort((a,b) => a.localeCompare(b));
}

function buildProjectCards(items) {
  return items.map((p, i) => `
    <div class="proj-card rv d${(i%6)+1} tilt">
      <div class="tilt-shine"></div>
      <div class="proj-glow" style="background:radial-gradient(${p.glow},transparent)"></div>
      <span class="proj-emoji">${p.emoji}</span>
      <div class="proj-name">${p.name}</div>
      <p class="proj-desc">${p.desc}</p>
      <div class="proj-tags">${p.tags.map(t => `<span class="proj-tag">${t}</span>`).join('')}</div>
      ${p.impact ? `<div class="proj-impact">${p.impact}</div>` : ''}
    </div>
  `).join('');
}

function filterProjects(sectionKey) {
  const section = PROJECT_SECTIONS[sectionKey];
  if (!section) return;
  const query = (searchQuery[sectionKey] || '').trim().toLowerCase();
  const tag = activeFilter[sectionKey];
  const items = section.data.filter(p => {
    const matchesTag = tag === 'all' || p.tags.some(t => t.toLowerCase() === tag.toLowerCase());
    const matchesQuery = !query || `${p.name} ${p.desc} ${p.tags.join(' ')}`.toLowerCase().includes(query);
    return matchesTag && matchesQuery;
  });
  const container = document.getElementById(section.container);
  container.innerHTML = buildProjectCards(items);
  animateProjectCards(container);
}

function animateProjectCards(container) {
  const cards = container.querySelectorAll('.proj-card');
  cards.forEach((card, index) => {
    card.classList.add('animate-pop');
    requestAnimationFrame(() => {
      setTimeout(() => {
        card.classList.add('animate-in');
      }, index * 60);
    });
  });
}

function initButtonRipples() {
  document.querySelectorAll('.btn-mag').forEach(btn => {
    btn.addEventListener('pointerdown', e => {
      const ripple = document.createElement('span');
      ripple.className = 'btn-ripple';
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 1.8;
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 550);
    });
  });
}

function initSectionParallax() {
  const sections = [...document.querySelectorAll('section:not(#hero)')];
  const update = () => {
    const mid = window.innerHeight / 2;
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const offset = Math.max(-1, Math.min(1, (rect.top - mid) / mid));
      const inner = section.querySelector('.sec-inner');
      if (inner) inner.style.transform = `translate3d(0, ${offset * 18}px, 0)`;
    });
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
}

function renderProjectFilters() {
  Object.entries(PROJECT_SECTIONS).forEach(([sectionKey, section]) => {
    const tags = ['all', ...getProjectTags(section.data)];
    const filterEl = document.getElementById(section.filter);
    const searchEl = document.getElementById(section.search);
    if (!filterEl || !searchEl) return;

    filterEl.innerHTML = tags.map(tag => `
      <button class="filter-pill${tag === 'all' ? ' active' : ''}" type="button" data-tag="${tag}">${tag === 'all' ? 'All' : tag}</button>
    `).join('');

    filterEl.querySelectorAll('.filter-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        filterEl.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilter[sectionKey] = btn.dataset.tag;
        filterProjects(sectionKey);
      });
    });

    searchEl.addEventListener('input', () => {
      searchQuery[sectionKey] = searchEl.value;
      filterProjects(sectionKey);
    });

    filterProjects(sectionKey);
  });
}

function initVisitCounter() {
  const visits = Number(localStorage.getItem('portfolioVisits') || 0) + 1;
  localStorage.setItem('portfolioVisits', visits);
  const visitEl = document.getElementById('hero-visit');
  if (visitEl) {
    visitEl.textContent = visits === 1 ? 'Welcome! This is your first visit.' : `Welcome back! This is visit #${visits}.`;
  }
}

async function loadProfile() {
  try {
    const response = await fetch('data/profile.json');
    if (!response.ok) return;
    const { profile, stats, education, languages } = await response.json();
    if (profile) {
      document.querySelector('.hero-name').textContent = profile.name;
      document.querySelector('.nav-logo').textContent = profile.name;
      document.title = `${profile.name} — ${profile.title}`;
      document.querySelector('meta[name="description"]').setAttribute('content', `${profile.name} — ${profile.title} · ${profile.tagline}`);
      document.querySelector('meta[property="og:title"]').setAttribute('content', `${profile.name} — ${profile.title}`);
      document.querySelector('meta[property="og:description"]').setAttribute('content', profile.tagline);
      document.querySelector('meta[name="author"]').setAttribute('content', profile.name);
      const heroEmail = document.getElementById('hero-email');
      if (heroEmail) { heroEmail.href = `mailto:${profile.email}`; heroEmail.textContent = profile.email; }
      const heroPhone = document.getElementById('hero-phone');
      if (heroPhone) heroPhone.textContent = `📱 ${profile.phone}`;
      const contactEmail = document.getElementById('contact-email');
      if (contactEmail) { contactEmail.href = `mailto:${profile.email}`; contactEmail.textContent = profile.email; }
      const contactPhone = document.getElementById('contact-phone');
      if (contactPhone) contactPhone.textContent = profile.phone;
      const contactLocation = document.getElementById('contact-location');
      if (contactLocation) contactLocation.textContent = profile.location;
      const contactStatus = document.getElementById('contact-status');
      if (contactStatus) contactStatus.textContent = profile.availability;
    }
    if (education) {
      const eduDegree = document.getElementById('edu-degree');
      const eduInst = document.getElementById('edu-inst');
      const eduYear = document.getElementById('edu-year');
      if (eduDegree) eduDegree.textContent = education.degree;
      if (eduInst) eduInst.textContent = education.institution;
      if (eduYear) eduYear.textContent = education.dates;
    }
    if (Array.isArray(languages) && languages.length) {
      LANGUAGES.length = 0;
      languages.forEach(l => LANGUAGES.push({
        name: l.name,
        level: l.level,
        pct: l.pct || (l.level === 'Native' ? 100 : l.level === 'Fluent' ? 90 : 80),
        grad: l.grad || 'linear-gradient(90deg,#06b6d4,#4f46e5)',
      }));
      render();
      renderProjectFilters();
    }
  } catch (err) {
    console.warn('Unable to load profile data', err);
  }
}

render();
initTheme();
initVisitCounter();
renderProjectFilters();
initButtonRipples();
initSectionParallax();
loadProfile();

/* ── SCROLL REVEAL ──────────────────────────────────────────── */
(() => {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: .12 });
  document.querySelectorAll('.rv, .rv-l, .rv-r, .rv-s').forEach(el => io.observe(el));
})();

/* ── SKILL + LANG BARS ──────────────────────────────────────── */
(() => {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        el.style.width = (el.dataset.w || 0) + '%';
        setTimeout(() => el.classList.add('swept'), 1700);
        io.unobserve(el);
      }
    });
  }, { threshold: .3 });
  document.querySelectorAll('.skb-fill, .lang-bar-fill').forEach(b => io.observe(b));
})();

/* ── COUNTER ANIMATION ──────────────────────────────────────── */
(() => {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        const target = +el.dataset.target;
        let current = 0;
        const inc = target/60;
        const iv = setInterval(() => {
          current = Math.min(current + inc, target);
          el.textContent = Math.floor(current);
          if (current >= target) { el.textContent = target; clearInterval(iv); }
        }, 16);
        io.unobserve(el);
      }
    });
  }, { threshold: .5 });
  document.querySelectorAll('.counter-num').forEach(c => io.observe(c));
})();

/* ── ROLE SWITCHER ──────────────────────────────────────────── */
let currentRole = 'backend';
(() => {
  const buttons = document.querySelectorAll('.rs-btn');
  buttons.forEach(b => b.addEventListener('click', () => {
    const role = b.dataset.role;
    if (role === currentRole) return;
    currentRole = role;
    buttons.forEach(x => x.classList.toggle('active', x.dataset.role === role));
    applyRole(role);
    toast(`✨ Viewing as ${b.textContent}`);
  }));
})();

function applyRole(role) {
  const r = ROLES[role];
  if (!r) return;
  document.getElementById('hero-status').textContent = r.status;
  document.getElementById('hero-summary').innerHTML = r.summary;
  document.getElementById('card-role').textContent = r.cardRole;
  // restart typing with new words
  typingWords = r.typing;
  typingIdx = 0; typingCharIdx = 0; typingDeleting = false;
  if (typingEl) typingEl.textContent = '';
}

/* ── TYPEWRITER ─────────────────────────────────────────────── */
let typingWords = ROLES.backend.typing;
let typingIdx = 0, typingCharIdx = 0, typingDeleting = false;
const typingEl = document.getElementById('typing-target');
(function typeLoop() {
  const word = typingWords[typingIdx];
  if (!typingDeleting) {
    typingEl.textContent = word.slice(0, ++typingCharIdx);
    if (typingCharIdx === word.length) { typingDeleting = true; setTimeout(typeLoop, 1800); return; }
  } else {
    typingEl.textContent = word.slice(0, --typingCharIdx);
    if (typingCharIdx === 0) { typingDeleting = false; typingIdx = (typingIdx+1) % typingWords.length; }
  }
  setTimeout(typeLoop, typingDeleting ? 45 : 80);
})();

/* ── 3D TILT CARDS ──────────────────────────────────────────── */
(() => {
  document.addEventListener('mousemove', e => {
    const card = e.target.closest('.tilt');
    if (!card) return;
    const r = card.getBoundingClientRect();
    const x = (e.clientX-r.left)/r.width - .5;
    const y = (e.clientY-r.top)/r.height - .5;
    card.style.transform = `perspective(700px) rotateY(${x*12}deg) rotateX(${-y*12}deg) scale(1.02)`;
    const shine = card.querySelector('.tilt-shine');
    if (shine) {
      shine.style.background = `radial-gradient(circle at ${(x+.5)*100}% ${(y+.5)*100}%, rgba(255,255,255,.12), transparent 55%)`;
      shine.style.opacity = 1;
    }
  });
  document.addEventListener('mouseleave', e => {
    document.querySelectorAll('.tilt').forEach(c => {
      c.style.transform = '';
      const s = c.querySelector('.tilt-shine');
      if (s) s.style.opacity = 0;
    });
  }, true);
})();

/* ── MAGNETIC BUTTONS ───────────────────────────────────────── */
document.querySelectorAll('.btn-mag').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const r = btn.getBoundingClientRect();
    const x = (e.clientX-r.left-r.width/2)*.3;
    const y = (e.clientY-r.top-r.height/2)*.3;
    btn.style.transform = `translate(${x}px,${y}px)`;
  });
  btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
});

/* ── PHOTO SWITCHER ─────────────────────────────────────────── */
(() => {
  let cur = 0;
  let autoTimer = null;

  function setPhoto(i) {
    cur = i;
    // Update all switchable photos — use -sm for small displays, -thumb for tiny
    document.querySelectorAll('.switchable-photo').forEach(img => {
      img.style.opacity = '0';
      setTimeout(() => {
        // Pick size based on class/context
        if (img.classList.contains('hero-card-photo')) img.src = PHOTOS[i].thumb;
        else if (img.classList.contains('contact-real-photo') || img.classList.contains('hero-photo-circle')) img.src = PHOTOS[i].sm;
        else img.src = PHOTOS[i].src;
        img.alt = 'Shaik Mohammed Rafi - ' + PHOTOS[i].label;
        img.style.opacity = '1';
      }, 300);
    });
    document.querySelectorAll('.photo-dot').forEach(d => {
      d.classList.toggle('active', +d.dataset.i === i);
    });
  }

  function autoCycle() {
    if (PHOTOS.length > 1) {
      autoTimer = setInterval(() => setPhoto((cur+1) % PHOTOS.length), 4500);
    }
  }
  function stopAuto() { if (autoTimer) { clearInterval(autoTimer); autoTimer = null; } }

  document.querySelectorAll('.photo-dot').forEach(d => {
    d.addEventListener('click', () => {
      stopAuto();
      setPhoto(+d.dataset.i);
      setTimeout(autoCycle, 8000); // restart auto after 8s
    });
  });

  autoCycle();
  window.setPhoto = setPhoto; // expose for command palette
})();

/* ── LIGHTBOX ───────────────────────────────────────────────── */
(() => {
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  const lbCaption = lb.querySelector('.lb-caption');
  const lbDots = lb.querySelector('.lb-dots');
  let lbIdx = 0;

  lbDots.innerHTML = GALLERY_PHOTOS.map((_, i) => `<div class="photo-dot" data-i="${i}"></div>`).join('');

  function show(i) {
    lbIdx = (i + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length;
    lbImg.src = GALLERY_PHOTOS[lbIdx].src;
    lbImg.alt = GALLERY_PHOTOS[lbIdx].label;
    lbCaption.textContent = GALLERY_PHOTOS[lbIdx].caption;
    lbDots.querySelectorAll('.photo-dot').forEach((d, i) => d.classList.toggle('active', i === lbIdx));
  }

  document.addEventListener('click', e => {
    const gc = e.target.closest('.gallery-card');
    if (gc) { lb.classList.add('open'); show(+gc.dataset.i); }
  });

  lb.querySelector('.lb-close').addEventListener('click', () => lb.classList.remove('open'));
  lb.querySelector('.lb-prev').addEventListener('click', () => show(lbIdx-1));
  lb.querySelector('.lb-next').addEventListener('click', () => show(lbIdx+1));
  lb.addEventListener('click', e => { if (e.target === lb) lb.classList.remove('open'); });
  lbDots.addEventListener('click', e => {
    const d = e.target.closest('.photo-dot');
    if (d) show(+d.dataset.i);
  });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') lb.classList.remove('open');
    if (e.key === 'ArrowLeft') show(lbIdx-1);
    if (e.key === 'ArrowRight') show(lbIdx+1);
  });
})();

/* ── CONTACT FORM ───────────────────────────────────────────── */
(() => {
  const form = document.getElementById('contact-form');
  const msg = document.getElementById('cf-message');
  const count = document.getElementById('cf-count');
  const submit = form.querySelector('.form-submit');
  const submitText = document.getElementById('submit-text');

  msg.addEventListener('input', () => count.textContent = msg.value.length);

  function showError(id, text) {
    const inp = document.getElementById(id);
    const err = document.getElementById('err-' + id.replace('cf-',''));
    if (text) { inp.classList.add('err'); err.textContent = text; }
    else      { inp.classList.remove('err'); err.textContent = ''; }
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    let ok = true;
    const name = document.getElementById('cf-name').value.trim();
    const email = document.getElementById('cf-email').value.trim();
    const subj = document.getElementById('cf-subject').value.trim();
    const message = msg.value.trim();

    if (name.length < 2) { showError('cf-name', 'Please enter your name'); ok = false; }
    else showError('cf-name');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showError('cf-email', 'Please enter a valid email'); ok = false; }
    else showError('cf-email');
    if (message.length < 10) { showError('cf-message', 'Please enter at least 10 characters'); ok = false; }
    else showError('cf-message');

    if (!ok) { toast('⚠️ Please fix the errors above'); return; }

    // Spinner
    submit.classList.add('loading');
    submitText.innerHTML = '⏳ Preparing...';

    setTimeout(() => {
      // Open default email client
      const body = `Hi Rafi,%0A%0A${encodeURIComponent(message)}%0A%0A— ${encodeURIComponent(name)}%0A(${encodeURIComponent(email)})`;
      const subject = encodeURIComponent(subj || 'Portfolio Contact from ' + name);
      window.location.href = `mailto:mohammedrafi.java@gmail.com?subject=${subject}&body=${body}`;

      submit.classList.remove('loading');
      submitText.innerHTML = '✅ Opened in Mail';
      toast('📧 Message ready in your email app!');
      setTimeout(() => {
        submitText.innerHTML = '🚀 Send Message';
        form.reset();
        count.textContent = '0';
      }, 3000);
    }, 800);
  });
})();

/* ── RUN DEMO ─────────────────────────────────────────────────────── */
function runDemo(btn) {
  const card = btn.closest('.demo-card');
  const output = card.querySelector('.demo-output');
  output.style.display = 'block';
  output.textContent = '🚀 Running demo...\n\nThis is a static showcase. In a real implementation, this would execute the code in a sandboxed environment.\n\nOutput: Demo executed successfully!';
  toast('💻 Demo executed!');
}

/* ── COMMAND PALETTE ────────────────────────────────────────── */
(() => {
  const overlay = document.getElementById('cmd-overlay');
  const input = document.getElementById('cmd-input');
  const list = document.getElementById('cmd-list');
  const cmds = [
    { icon:'🏠', label:'Go to Home', desc:'Hero section', action: () => scrollTo('hero') },
    { icon:'⚡', label:'Go to Skills', desc:'Technical expertise', action: () => scrollTo('skills') },
    { icon:'💼', label:'Go to Experience', desc:'Work history', action: () => scrollTo('experience') },
    { icon:'🚀', label:'Go to Projects', desc:'Portfolio', action: () => scrollTo('projects') },
    { icon:'🤖', label:'Go to AI Projects', desc:'GenAI & ML work', action: () => scrollTo('ai-projects') },    { icon:'💻', label:'Go to Code Demos', desc:'Advanced language showcase', action: () => scrollTo('code-demos') },    { icon:'�', label:'Go to About', desc:'Photo gallery', action: () => scrollTo('about') },
    { icon:'🎓', label:'Go to Education', desc:'Academic background', action: () => scrollTo('education') },
    { icon:'📬', label:'Go to Contact', desc:'Get in touch', action: () => scrollTo('contact') },
    { icon:'🌙', label:'Toggle Theme', desc:'Switch dark/light', action: () => toggleTheme() },
    { icon:'👔', label:'View as Backend', desc:'Backend Engineer focus', action: () => switchRole('backend') },
    { icon:'🎨', label:'View as Full Stack', desc:'Full Stack focus', action: () => switchRole('fullstack') },
    { icon:'☁️', label:'View as Cloud Engineer', desc:'Cloud / DevOps focus', action: () => switchRole('cloud') },
    { icon:'🤖', label:'View as AI Engineer', desc:'AI / GenAI focus', action: () => switchRole('ai') },
    { icon:'🔗', label:'Open LinkedIn', desc:'linkedin.com/in/shaik-mohammedrafi', action: () => window.open('https://www.linkedin.com/in/shaik-mohammedrafi/','_blank') },
    { icon:'🐙', label:'Open GitHub', desc:'github.com/RAFI419', action: () => window.open('https://github.com/RAFI419/','_blank') },
    { icon:'⚡', label:'Open LeetCode', desc:'leetcode.com/u/Rafi0419', action: () => window.open('https://leetcode.com/u/Rafi0419/','_blank') },
    { icon:'📧', label:'Send Email', desc:'mohammedrafi.java@gmail.com', action: () => window.location.href='mailto:mohammedrafi.java@gmail.com' },
    { icon:'📋', label:'Copy Email', desc:'Copy email to clipboard', action: () => { navigator.clipboard.writeText('mohammedrafi.java@gmail.com'); toast('📋 Email copied!'); } },
    { icon:'📱', label:'Copy Phone', desc:'Copy phone number', action: () => { navigator.clipboard.writeText('+917386796653'); toast('📋 Phone copied!'); } },
    { icon:'📄', label:'Download Resume', desc:'Get the .docx file', action: () => window.location.href='docs/resume.docx' },
  ];

  function scrollTo(id) { const s = document.getElementById(id); if (s) s.scrollIntoView({behavior:'smooth',block:'start'}); }
  function switchRole(r) { const btn = document.querySelector(`.rs-btn[data-role="${r}"]`); if (btn) btn.click(); scrollTo('hero'); }
  function open() { overlay.classList.add('open'); input.focus(); render(cmds); }
  function close() { overlay.classList.remove('open'); input.value=''; render(cmds); }
  function render(items) {
    list.innerHTML = '';
    if (!items.length) { list.innerHTML = '<div style="padding:20px;text-align:center;font-size:13px;color:var(--text-3)">No results</div>'; return; }
    const sec = document.createElement('div'); sec.className = 'cmd-section-label'; sec.textContent = 'Actions'; list.appendChild(sec);
    items.forEach((cmd, i) => {
      const d = document.createElement('div');
      d.className = 'cmd-item' + (i===0?' selected':'');
      d.innerHTML = `<div class="cmd-item-icon">${cmd.icon}</div><div><div class="cmd-item-label">${cmd.label}</div><div class="cmd-item-desc">${cmd.desc}</div></div>`;
      d.addEventListener('click', () => { cmd.action(); close(); });
      list.appendChild(d);
    });
  }
  input.addEventListener('input', () => {
    const q = input.value.toLowerCase();
    render(q ? cmds.filter(c => c.label.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q)) : cmds);
  });
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey||e.metaKey) && e.key==='k') { e.preventDefault(); overlay.classList.contains('open')?close():open(); }
    if (e.key==='Escape' && overlay.classList.contains('open')) close();
    if (overlay.classList.contains('open')) {
      const items = list.querySelectorAll('.cmd-item');
      const sel = list.querySelector('.cmd-item.selected');
      let idx = [...items].indexOf(sel);
      if (e.key==='ArrowDown') { e.preventDefault(); items.forEach(i => i.classList.remove('selected')); items[Math.min(idx+1, items.length-1)]?.classList.add('selected'); }
      if (e.key==='ArrowUp')   { e.preventDefault(); items.forEach(i => i.classList.remove('selected')); items[Math.max(idx-1, 0)]?.classList.add('selected'); }
      if (e.key==='Enter')     { sel?.click(); }
    }
  });
  document.getElementById('cmd-btn').addEventListener('click', open);
  overlay.addEventListener('click', e => { if (e.target===overlay) close(); });
  render(cmds);
})();

/* ── TOAST ──────────────────────────────────────────────────── */
function toast(msg, dur=2500) {
  const tc = document.getElementById('toast-container');
  const t = document.createElement('div'); t.className = 'toast'; t.textContent = msg;
  tc.appendChild(t);
  setTimeout(() => { t.style.animation = 'toastOut .3s ease forwards'; setTimeout(() => t.remove(), 300); }, dur);
}

/* ── BACK TO TOP ────────────────────────────────────────────── */
(() => {
  const btn = document.getElementById('back-top');
  window.addEventListener('scroll', () => btn.classList.toggle('vis', window.scrollY > 400), { passive:true });
  btn.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
})();

/* ── SMOOTH SCROLL ──────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior:'smooth', block:'start' }); }
  });
});

/* ── SCROLL HINT HIDE ───────────────────────────────────────── */
window.addEventListener('scroll', () => {
  const h = document.getElementById('scroll-hint');
  if (h) h.style.opacity = window.scrollY > 80 ? '0' : '1';
}, { passive:true });

/* ── PARALLAX HERO ──────────────────────────────────────────── */
(() => {
  const card = document.getElementById('hero-card');
  const orb = document.querySelector('.hero-orb');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (card) card.style.transform = `translate(-50%,calc(-50% + ${y*.06}px))`;
    if (orb) orb.style.transform = `translate(-50%,calc(-50% + ${y*.04}px))`;
  }, { passive:true });
})();

/* ── KONAMI CODE EASTER EGG ─────────────────────────────────── */
(() => {
  const code = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let idx = 0;
  document.addEventListener('keydown', e => {
    if (e.key === code[idx]) idx++; else idx = 0;
    if (idx === code.length) {
      idx = 0;
      toast('🎮 Konami Code! You found the easter egg! 🥚');
      const canvas = document.getElementById('particle-canvas');
      canvas.style.filter = 'hue-rotate(180deg) saturate(1.5)';
      setTimeout(() => { canvas.style.filter = ''; }, 3000);
    }
  });
})();

/* ── CONSOLE SIGNATURE ──────────────────────────────────────── */
console.log('%c👋 Hey there, dev!', 'color:#ec4899;font-size:18px;font-weight:bold;');
console.log('%cShaik Mohammed Rafi — Software Engineer', 'color:#4f46e5;font-size:14px;');
console.log('%cmohammedrafi.java@gmail.com | +91 7386796653', 'color:#06b6d4;font-size:12px;');
console.log('%cLinkedIn: https://linkedin.com/in/shaik-mohammedrafi\nGitHub: https://github.com/RAFI419', 'color:#f59e0b;font-size:11px;');
console.log('%cPress Ctrl+K to open command palette · Try the Konami code 👀', 'color:#a78bfa;font-size:11px;');

/* ── TOUCH DEVICE ───────────────────────────────────────────── */
window.addEventListener('touchstart', () => {
  document.getElementById('cur-dot').style.display = 'none';
  document.getElementById('cur-ring').style.display = 'none';
  document.getElementById('cur-text').style.display = 'none';
  document.body.style.cursor = 'auto';
  document.querySelectorAll('*').forEach(e => e.style.cursor = '');
}, { once:true });

/* ── REDUCED MOTION ─────────────────────────────────────────── */
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('[style*="animation"]').forEach(el => el.style.animation = 'none');
}
