# 🎨 Shraddha Gupta's Portfolio

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</div>

<div align="center">
  <h3>A sophisticated, interactive developer portfolio with fluid animations and metallic aesthetics</h3>
  <p>Built with React, TailwindCSS, and Framer Motion</p>
  
  [![Live Demo](https://img.shields.io/badge/LIVE_DEMO-↗-B8860B?style=for-the-badge&logo=vercel)](https://shraddha-portfolio-theta.vercel.app/)
  [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Shraddhagupta37)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shraddha-gupta-8ab9b828a/)
</div>

---

## ✨ Features

### 🎨 **Visual Design**
- **Fluid Cursor Background** - Custom WebGL fluid simulation that responds to mouse movement
- **Metallic Gold/Copper/Silver Theme** - Sophisticated color palette throughout
- **Dark/Light Mode** - Seamless theme switching with context API
- **Custom Scrollbar** - Polished scrolling experience

### 🧩 **Interactive Components**

| Section | Features |
|---------|----------|
| **Hero** | Creative profile display with double borders, animated greeting, social links |
| **Skills** | Scroll-reveal animations, skill descriptions on hover, micro-interactions |
| **Projects** | Dual-panel display (browser mockup + VS Code terminal), typing animations |
| **Certifications** | Horizontal carousel with infinite scroll, play/pause controls |
| **Journey** | Animated timeline with scroll-based line filling |
| **Contact** | Terminal-style left panel with status, working contact form |

### ⚡ **Animations & Interactions**
- Scroll-triggered reveal animations
- Hover effects with scale, glow, and color transitions
- Typing animations for project descriptions
- Parallax background effects

---

## 🛠️ Tech Stack

### **Frontend**
- [React 18](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [TailwindCSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

### **Deployment**
- [Vercel](https://vercel.com/) - Hosting
- [GitHub](https://github.com/) - Version control

---

## 📁 Project Structure

```
shraddha-portfolio/
├── public/                  # Static assets
│   ├── profile.jpg
│   ├── project*.jpg
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── layout/          # Navbar, Footer
│   │   └── sections/        # All page sections
│   │       ├── Hero.jsx
│   │       ├── Skills.jsx
│   │       ├── Projects.jsx
│   │       ├── Certificates.jsx
│   │       ├── Journey.jsx
│   │       ├── About.jsx
│   │       └── Contact.jsx
│   ├── contexts/            # Theme context
│   ├── data/                # Content data
│   │   └── content.js
│   ├── hooks/               # Custom hooks
│   │   └── useFluidCursor.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css            # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Shraddhagupta37/shraddha-portfolio.git
cd shraddha-portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
```

4. **Build for production**
```bash
npm run build
npm run preview
```

---

## 🎯 Customization

### Personal Information
Edit `src/data/content.js` to update:
- Skills, projects, certificates
- Personal info and social links
- Journey timeline data

### Colors
The metallic theme colors are defined in `src/index.css`:
```css
:root {
  --accent-gold: #B8860B;
  --accent-copper: #B87333;
  --accent-silver: #C0C0C0;
}
```

### Adding Projects
Add new projects to the `projects` array in `content.js`:
```javascript
{
  id: 6,
  title: "New Project",
  description: "Brief description",
  fullDescription: "Detailed description...",
  tech: ["React", "Node.js"],
  github: "https://github.com/...",
  date: "Mar 2026",
  image: "/project6.jpg"
}
```

---

## 🌐 Deployment

This portfolio is optimized for Vercel deployment:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

The site auto-deploys on every push to the main branch.

---

## 🙏 Acknowledgments

- Design inspiration from modern developer portfolios
- Fluid cursor simulation adapted from open-source WebGL experiments
- Icons from React Icons (Simple Icons & Font Awesome)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📬 Contact

Shraddha Gupta - [gshraddha246850@gmail.com](mailto:gshraddha246850@gmail.com)

