# Pankaj Singh — Portfolio

A dark, neon-accented React + Vite portfolio with a mouse-reactive dot grid background.

---

## 🚀 Quick Start

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build
```

---

## 📁 Project Structure

```
portfolio/
├── index.html                      # Vite HTML shell
├── vite.config.js                  # Vite config
├── package.json
└── src/
    ├── main.jsx                    # React entry point
    ├── App.jsx                     # Root — composes all sections
    │
    ├── data/
    │   └── portfolio.data.js       # ★ EDIT THIS to update all content
    │
    ├── styles/
    │   └── global.css              # Design tokens, resets, shared classes
    │
    ├── hooks/
    │   └── useMouseDotGrid.js      # Dot grid config + RAF animation hook
    │
    ├── components/                 # Shared UI pieces (used across sections)
    │   ├── MouseDotGrid.jsx        # Mouse-reactive background dots
    │   ├── Navbar.jsx              # Fixed floating pill navigation
    │   └── Footer.jsx              # Footer with social links
    │
    └── sections/                   # One file per page section
        ├── HeroSection.jsx
        ├── AboutSection.jsx
        ├── ProjectsSection.jsx
        ├── ExperienceSection.jsx
        ├── SkillsSection.jsx
        ├── CTASection.jsx
        └── ContactSection.jsx
```

---

## ✏️ How to Update Content

**All portfolio content lives in one place:**

```
src/data/portfolio.data.js
```

### Update personal info (name, email, links, location)
```js
export const PERSONAL = {
  name:      "Pankaj Singh",
  email:     "your@email.com",
  github:    "https://github.com/yourhandle",
  linkedin:  "https://linkedin.com/in/yourprofile",
  resumeUrl: "https://link-to-your-cv.pdf",  // ← add real link here
  // ...
};
```

### Add a new project
```js
export const PROJECTS = [
  // ... existing projects ...
  {
    id:    "04",
    title: "MY_NEW_PROJECT",
    tags:  [{ label: "React", color: "var(--primary)" }],
    desc:  "Short description of what the project does.",
    img:   "https://your-image-url.com/preview.jpg",
    links: [{ label: "View Project", icon: "arrow_outward", color: "#8ff5ff", href: "https://github.com/..." }],
  },
];
```

### Add a new experience entry
```js
export const EXPERIENCES = [
  // ... existing entries ...
  {
    icon:     "work",       // Material Symbol icon name
    active:   false,        // true = highlights node in primary colour
    side:     "right",      // "left" | "right" — alternates each entry
    title:    "Job Title",
    period:   "Jan 2024 — Present",
    company:  "Company Name",
    location: "City",
    bullets: [
      "What you did...",
      "What you achieved...",
    ],
  },
];
```

> **Tip:** Keep `side` alternating — `right`, `left`, `right`, `left` — for the timeline to look correct.

### Update skills
```js
export const SKILLS = {
  coreLanguages: ["Java", "Python", "Go"],   // add/remove languages
  backend:       ["Spring Boot", "FastAPI"],
  cloud:         ["AWS EC2", "GCP"],
  data:          ["PostgreSQL", "Redis"],
  liveStatus:    "Currently learning ...",
};
```

---

## 🎨 Design Tokens

All colours are CSS variables in `src/styles/global.css`:

```css
:root {
  --primary:   #8ff5ff;   /* cyan accent */
  --secondary: #d575ff;   /* purple accent */
  --surface:   #0e0e13;   /* page background */
  /* ... */
}
```

---

## 🔵 Dot Grid

Tweak the mouse-reactive background in `src/hooks/useMouseDotGrid.js`:

```js
export const DOT_CONFIG = {
  spacing:     22,        // px between dots
  dotSize:     "1px",     // dot diameter
  glowRadius:  110,       // spotlight radius in px
  baseColor:   "#2a2a33", // resting dot colour
  glowColor:   "#8ff5ff", // lit dot colour
  baseOpacity: 0.4,
  glowOpacity: 0.55,
  smoothing:   0.12,      // 0 = max lag · 1 = instant follow
};
```
