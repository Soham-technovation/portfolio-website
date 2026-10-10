# 🚀 Local Setup & Deployment Guide

This guide outlines how to clone, configure, build, and run the **Soham Khan Engineering Portfolio** in local, containerized, and production environments.

---

## 📋 Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm** (or **bun** / **pnpm** / **yarn**)
- **Git**

---

## ⚡ Quick Start (3 Steps)

### 1. Clone the Repository
```bash
git clone https://github.com/Soham-technovation/portfolio.git
cd portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Local Development Server
```bash
npm run dev
```

The application will be served locally at:
👉 `http://localhost:3000` (or `http://localhost:5173`)

---

## 🛠️ Available NPM Scripts

| Command | Purpose |
| :--- | :--- |
| `npm run dev` | Boots the Vite development server on port 3000 with fast refresh |
| `npm run build` | Compiles TypeScript and builds optimized static production assets into `dist/` |
| `npm run preview` | Spins up a local static server to preview the built `dist/` output |
| `npm run lint` | Runs the TypeScript compiler check (`tsc --noEmit`) |
| `npm run clean` | Removes build artifacts and cached output folders |

---

## 📂 Project Structure

```
├── .env.example              # Environment variable declaration
├── index.html                # HTML5 entry point & typography preloading
├── metadata.json             # AI Studio applet configurations
├── package.json              # Project dependencies & scripts
├── public/                   # Static assets (PDF resume, favicons)
│   └── resume.pdf            # Original verified resume document
├── readme/                   # Detailed interactive repository documentation
│   ├── ARCHITECTURE.md       # Component design, liquid glass UI engine
│   ├── PROJECTS_SHOWCASE.md  # Detailed hardware & IoT architecture
│   ├── RESEARCH_DEEP_DIVE.md # IEEE MTT-S 2.45 GHz radar analysis
│   ├── EXPERIENCE_AND_ACTIVITIES.md # Positions & hackathon records
│   └── SETUP_GUIDE.md        # Local development & build guide
├── src/
│   ├── components/           # Modular UI section components
│   │   ├── Hero.tsx          # Recruiter hero & quick action CTAs
│   │   ├── HeroCanvas.tsx    # Interactive canvas particle/circuit grid
│   │   ├── LiquidGlassBackground.tsx # Fluid background with RF scans
│   │   ├── Navbar.tsx        # Sticky frosted glass navigation
│   │   ├── About.tsx         # Bio and core background
│   │   ├── Domains.tsx       # ECE engineering domains matrix
│   │   ├── Research.tsx      # IEEE MTT-S Microwave Radar details
│   │   ├── Projects.tsx      # Projects grid with filter tabs
│   │   ├── ProjectModal.tsx  # Deep-dive interactive modal
│   │   ├── Experience.tsx    # Verifiable professional positions
│   │   ├── EventsSection.tsx # Hackathons & reverse timeline
│   │   ├── Skills.tsx        # Technical toolchain matrix
│   │   ├── Certifications.tsx# Verified certifications & badges
│   │   ├── ExploringInterests.tsx # Future technology directions
│   │   ├── ResumeSection.tsx # Embedded PDF preview & actions
│   │   ├── Contact.tsx       # Outreach channels & contact form
│   │   └── Footer.tsx        # Footer & navigation copyright
│   ├── data/
│   │   └── resumeData.ts     # Centralized strongly-typed data records
│   ├── types.ts              # TypeScript interfaces & definitions
│   ├── index.css             # Tailwind CSS & glassmorphic utility rules
│   └── main.tsx              # React DOM 19 application root
└── vite.config.ts            # Vite 6 configuration & plugins
```

---

## 🌐 Production Build & Deployment

To generate production-ready static assets:

```bash
npm run build
```

The compiled bundle in `/dist` is completely static and can be deployed directly to:
- **GitHub Pages**
- **Vercel**
- **Netlify**
- **Cloudflare Pages**
- **Google Cloud Run / Firebase Hosting**
