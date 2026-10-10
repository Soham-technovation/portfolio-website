<div align="center">

# ⚡ Soham Khan — Engineering Portfolio

### Electronics & Communication Engineering • Microwave & RF • Embedded Systems • Applied AI

[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

<br/>

**[🌐 Live Portfolio Preview](https://ais-pre-fgur3gplswfyuujue6rlo3-826119127061.asia-southeast1.run.app)** • **[📄 View Resume PDF](./public/resume.pdf)** • **[💬 Get In Touch](#-contact--connect)**

<br/>

</div>

---

## 🧭 Interactive Documentation Guides

For in-depth technical specifications, check out the dedicated documentation modules:

| Guide | Description | Link |
| :--- | :--- | :--- |
| 🏛️ **System Architecture** | Component structure, Liquid Glass UI engine, styling mechanics | [View ARCHITECTURE.md ↗](./readme/ARCHITECTURE.md) |
| 🛠️ **Projects Showcase** | Hardware block diagrams, telemetry pipelines, and algorithms | [View PROJECTS_SHOWCASE.md ↗](./readme/PROJECTS_SHOWCASE.md) |
| 📡 **Research Deep Dive** | IEEE MTT-S 2.45 GHz radar, patch antenna simulation & DSP | [View RESEARCH_DEEP_DIVE.md ↗](./readme/RESEARCH_DEEP_DIVE.md) |
| 🏆 **Leadership & Hackathons** | IEEE SIGHT Operational Lead, DoT Sanchar Mitra, competition wins | [View EXPERIENCE_AND_ACTIVITIES.md ↗](./readme/EXPERIENCE_AND_ACTIVITIES.md) |
| 🚀 **Local Setup & Build** | Step-by-step installation, NPM scripts, and deployment | [View SETUP_GUIDE.md ↗](./readme/SETUP_GUIDE.md) |

---

## 📑 Table of Contents

- [✨ Key Portfolio Highlights](#-key-portfolio-highlights)
- [🔬 Academic Research Spotlight](#-academic-research-spotlight)
- [🚀 Featured Projects](#-featured-projects)
- [💼 Professional Positions & Leadership](#-professional-positions--leadership)
- [🏅 Hackathon Wins & Recognitions](#-hackathon-wins--recognitions)
- [📜 Verified Certifications Matrix](#-verified-certifications-matrix)
- [💻 Technical Toolchain](#-technical-toolchain)
- [⚡ Quick Start & Development](#-quick-start--development)
- [📬 Contact & Connect](#-contact--connect)

---

## ✨ Key Portfolio Highlights

- 💎 **iOS-Inspired Liquid Glass UI**: Translucent glassmorphic cards (`backdrop-filter: blur(20px)`), ambient fluid gradient orbs, and high-frequency RF radar scan overlays.
- ⚡ **Interactive Canvas Simulation**: Hardware-accelerated particle and circuit node background responding dynamically to mouse interactions.
- 🔍 **Recruiter-Friendly Interaction**: Interactive project modal inspects problems, solutions, contributions, and verified proofs without forcing page redirects.
- 🎯 **Verifiable Evidence**: Direct links to genuine LinkedIn positions, NPTEL/IISc certifications, Devfolio hackathon submissions, and GitHub repositories.
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile with accessible touch targets and keyboard navigation (`Esc` modal close, focus rings).

---

## 🔬 Academic Research Spotlight

<details open>
<summary><b>📡 2.45 GHz Non-Contact Microwave Doppler Radar (IEEE MTT-S Region 10)</b> — <i>Click to expand/collapse</i></summary>

<br/>

Designed a non-contact vital sign monitoring system utilizing a **2.45 GHz ISM-band microwave Doppler radar** to capture minute chest wall displacements corresponding to respiration ($0.1 - 0.5\text{ Hz}$) and heartbeat ($0.8 - 2.0\text{ Hz}$) rhythms.

```
+---------------------------+       Tx Wave (2.45 GHz)       +------------------------+
|  2.45 GHz Oscillator &   | -----------------------------> |  Human Chest Wall      |
|  Microstrip Patch Ant.    | <----------------------------- |  (Sub-mm displacement) |
+---------------------------+     Rx Phase-Modulated Wave    +------------------------+
              |
              v (I/Q Demodulation)
+---------------------------+       DSP Filtering & FFT      +------------------------+
| Quadrature Baseband Mixer | -----------------------------> | Respiration Rate (BPM) |
+---------------------------+                                | Heartbeat Rate (BPM)   |
                                                             +------------------------+
```

- **Tools & Simulation**: CST Studio Suite, ANSYS HFSS, LTSpice, MATLAB, Python DSP.
- **Antenna Specs**: High-gain microstrip patch on low-loss substrate with return loss $S_{11} < -18\text{ dB}$ at $2.45\text{ GHz}$.
- 👉 [Read Complete Research Paper & DSP Math Breakdown ↗](./readme/RESEARCH_DEEP_DIVE.md)

</details>

---

## 🚀 Featured Projects

<details open>
<summary><b>🛠️ Interactive Project Catalog</b> — <i>Click to explore active builds</i></summary>

<br/>

| Project | Category | Highlights | Verification Link |
| :--- | :--- | :--- | :--- |
| **AGRIFLUX** | Embedded IoT & Edge AI | ESP32 edge telemetry, NPK soil sensor interfacing, LoRa communication & Google Earth Engine | [Devfolio ↗](https://devfolio.co/@SOHAMKHAN11) |
| **AGROCAST** | Remote Sensing & Geospatial | Sentinel-2 & Landsat-8 multispectral satellite imagery analysis for NDVI & moisture tracking | [Devfolio ↗](https://devfolio.co/@SOHAMKHAN11) |
| **Soil ML Analytics** | Machine Learning | Classification tree & regression pipeline achieving 96% accuracy on agronomic data | [Devfolio ↗](https://devfolio.co/@SOHAMKHAN11) |
| **Bi-Directional Gate Counter** | Hardware & Embedded C | Dual IR beam-break counter with Arduino Uno & relay-driven automated room power savings | [Devfolio ↗](https://devfolio.co/@SOHAMKHAN11) |

👉 [Explore Full Project Architecture & Schematics ↗](./readme/PROJECTS_SHOWCASE.md)

</details>

---

## 💼 Professional Positions & Leadership

- **Operational Lead** — *IEEE IEM SB SIGHT Group* `(May 2026 – Present · CURRENT)`
  - *Location*: Salt Lake, Kolkata · On-site
  - *Associated Skill*: Operations Management & Community Engineering Coordination
  - *Verification*: [View LinkedIn Position ↗](https://www.linkedin.com/in/soham-khan-53114327a/)
- **Sanchar Mitra (Internship)** — *Department of Telecommunications (DoT), Ministry of Communications, Govt. of India* `(Sep 2025 – Present · CURRENT)`
  - *Focus*: Telecom outreach, mobile security awareness, and fraud prevention initiatives.

---

## 🏅 Hackathon Wins & Recognitions

- 🏆 **1st Place Winner** — `HACKSTORM 2026` (IEM IEEE SIGHT)
- 🏆 **1st Place Winner** — `PHYCATHON 2026` (UEM Kolkata)
- 🎖️ **Sanchar Mitra Recognition** — Department of Telecommunications (DoT), Government of India
- 🎓 **Attendee & Participant** — *Build with AI Bootcamp (GDG TIU)* & *Running Local AI Models on Mobile (GDG IEM)*
- 🎓 **Attendee & Participant** — *Stellar Bootcamp Day – Kolkata (RiseIn × GDG IEM Kolkata)*

---

## 📜 Verified Certifications Matrix

| Certification | Issuing Body | Status & Badge |
| :--- | :--- | :--- |
| **Fundamentals of Semiconductor Devices** | **NPTEL, IISc Bangalore** | 🌟 `MAJOR CERTIFICATION` • [Verify ↗](https://www.linkedin.com/feed/update/urn:li:ugcPost:7493047250932154369/) |
| **IoT and AI Cloud Specialization** | **UC San Diego** | 🛡️ `VERIFIED CREDENTIAL` • [Verify ↗](https://www.coursera.org/account/accomplishments/specialization/I0TD28M9EX6L) |
| **Web Connectivity & Security in Embedded Systems** | **Coursera** | 🛡️ `VERIFIED CREDENTIAL` • [Verify ↗](https://www.coursera.org/account/accomplishments/verify/VKP8DWEUSBB0) |
| **Programming with Generative AI** | **IIT Guwahati** | 🛡️ `VERIFIED CREDENTIAL` • [Verify ↗](https://www.coursera.org/account/accomplishments/verify/H89MNEMTUGZH) |
| **MATLAB Onramp** | **MathWorks** | 🛡️ `VERIFIED CREDENTIAL` • [Verify ↗](https://matlabacademy.mathworks.com/progress/share/certificate.html?id=1f8d8f1c-ac58-4ba2-a51a-6802eb8bad0e&) |
| **Build Real World AI Applications (Gemini & Imagen)** | **Google Cloud / Google AI** | 🛡️ `SKILL BADGE` • [Verify ↗](https://www.credly.com/badges/7a826b47-0b62-48a5-9b45-c123b821cd08/linked_in_profile) |
| **McKinsey.org Forward Program** | **McKinsey & Company** | 🛡️ `VERIFIED CREDENTIAL` • [Verify ↗](https://www.credly.com/badges/a4fb6bb8-9727-461c-aa1e-67c3082828a6/linked_in_profile) |
| **Postman API Fundamentals Student Expert** | **Postman** | 🛡️ `VERIFIED CREDENTIAL` • [Verify ↗](https://badges.parchment.com/public/assertions/uYIIAcJZSziUIQ5_x3yPvA) |

---

## 💻 Technical Toolchain

```
├── RF & Electromagnetic Simulation : CST Studio Suite, ANSYS HFSS, LTSpice, Keysight ADS
├── Hardware & Embedded Systems     : Arduino, ESP32, Embedded C, Python, Altium Designer (PCB)
├── Data Science & Remote Sensing   : Google Earth Engine, Streamlit, TensorFlow, Scikit-Learn, Pandas
├── Design & Numerical Computing    : MATLAB, Simulink, Jupyter, Visual Studio Code, Git
└── Web Technologies & Modern UI   : React 19, TypeScript 5.8, Tailwind CSS v4, Motion, Vite 6
```

---

## ⚡ Quick Start & Development

```bash
# 1. Clone the repository
git clone https://github.com/Soham-technovation/portfolio.git

# 2. Navigate to project root
cd portfolio

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

Visit `http://localhost:3000` to preview the application locally.

---

## 📬 Contact & Connect

- **Email**: [soham.khan.dgp@gmail.com](mailto:soham.khan.dgp@gmail.com)
- **GitHub**: [github.com/Soham-technovation](https://github.com/Soham-technovation)
- **LinkedIn**: [linkedin.com/in/soham-khan-53114327a](https://www.linkedin.com/in/soham-khan-53114327a/)
- **X (Twitter)**: [x.com/Soham_eleven](https://x.com/Soham_eleven)
- **Devfolio**: [devfolio.co/@SOHAMKHAN11](https://devfolio.co/@SOHAMKHAN11)

---

<div align="center">
  <sub>Designed & Developed by Soham Khan • Built with React 19, TypeScript & Tailwind CSS</sub>
</div>
