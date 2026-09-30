# ⚡ Parag Singhal - Personal Developer Portfolio

A modern, high-performance personal portfolio website built with **React 19**, **Vite**, and **Tailwind CSS**. Designed with a sleek futuristic dark aesthetic, glassmorphic card layouts, responsive navigation, interactive modals, and subtle animations.

---

## 🌟 Features & Sections

- **Hero / Home**: Dynamic introduction, live availability badge, quick social links, action buttons (*View Projects*, *Contact Me*, *Resume Overview*), and interactive code profile preview.
- **About Me**: Student-friendly professional narrative detailing academic path, AI & web interests, and core principles.
- **Education**: Showcasing B.Tech at **JECRC University**, degree period, relevant learning areas (*DSA, OOP, DBMS, Web Technologies, AI/ML, OS, Software Engineering*), and academic highlights.
- **Skills**: Attractive, interactive skill cards with proficiency indicators, category filters, and tags for:
  - HTML
  - CSS
  - JavaScript
  - Python
  - Artificial Intelligence
  - Generative AI
  - Web Development
  - Digital Productivity
- **Featured Projects**:
  1. **Personal Portfolio Website**: Modern developer portfolio built with React & Tailwind CSS.
  2. **AI Website Project**: Intelligent application powered by modern Generative AI endpoints.
  3. **Student Productivity Project**: Goal tracker, focus timer, and academic study hub.
  - *Interactive Project Detail Modal* with full architectural breakdown and GitHub repository linkouts.
- **Milestones & Achievements**: Categorized tabs for **Certifications**, **Hackathons**, **Courses**, and **Awards & Honors**.
- **Contact**: Interactive messaging form with instant feedback, one-click email copy with clipboard toast, and direct LinkedIn & GitHub channels.
- **Navigation & Mobile Drawer**: Sticky blur header with active section spy and animated mobile drawer menu.
- **Interactive Resume Modal**: Quick printable view of academic and project history.

---

## 🚀 Getting Started Locally

### 1. Prerequisites
Ensure you have **Node.js** (v18+) installed on your machine.

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

---

## 🛠️ Customizing Your Information

All your personal details, education history, skills, projects, and achievements are organized in a single file:
👉 `src/data/portfolioData.js`

- **Update Contact Info**: Edit `personalInfo` object (Email, LinkedIn, GitHub, Location).
- **Add New Skills**: Add entries to the `skillsData` array.
- **Add New Projects**: Add entries to the `projectsData` array.
- **Add New Achievements**: Add certifications, hackathons, or awards to `achievementsData`.

---

## 🌐 Deploying to Vercel

This project is pre-configured for zero-configuration deployment to [Vercel](https://vercel.com/):

1. Push your repository to **GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Parag Singhal portfolio"
   git remote add origin https://github.com/singhalparag60/portfolio.git
   git push -u origin main
   ```
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Import your GitHub repository.
4. Framework Preset: **Vite**.
5. Click **Deploy**. Your site will be live on the web in seconds!
