# Portfolio 🚀

A modern, brutalist-style portfolio website built with React, TypeScript, and Vite. Features smooth animations, interactive components, and a bold design aesthetic.

## 🌐 Live Demo

**[View Live Portfolio](https://portfolio.songoku.qzz.io/)**

## ✨ Features

- **Brutalist Design**: Bold typography, sharp borders, and high-contrast colors
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Responsive Layout**: Fully responsive design that works on all devices
- **GitHub Contributions**: Real-time GitHub contribution graph integration
- **Interactive Components**: Custom cursor, animated tags, and hover effects
- **Modern Tech Stack**: Built with React 18, TypeScript, and Vite

## 🛠️ Tech Stack

- **Framework**: React 18.3.1
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.12
- **Animations**: Framer Motion (motion)
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React, Material UI Icons
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Rajshree1854/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🚀 Deployment

### Manual Deployment
Deploy to GitHub Pages with a single command:
```bash
npm run deploy
```

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── app/
│   │   ├── components/     # React components
│   │   │   ├── About.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── Certifications.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── ui/         # Reusable UI components
│   │   └── App.tsx
│   ├── styles/             # Global styles
│   └── main.tsx
├── public/                 # Static assets
├── .github/workflows/      # GitHub Actions
└── vite.config.ts         # Vite configuration
```

## 🎨 Customization

### Update Personal Information
Edit the component files in `src/app/components/` to update:
- Profile picture and bio (About.tsx)
- Projects and work experience (Projects.tsx, Experience.tsx)
- Skills and certifications (Skills.tsx, Certifications.tsx)
- Contact information (Contact.tsx)

### Modify Styling
- Global styles: `src/styles/`
- Theme variables: `src/styles/theme.css`
- Tailwind config: Uses Tailwind CSS 4 with Vite plugin

### Change Base Path
If deploying to a different repository, update the base path in `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run deploy` - Deploy to GitHub Pages
- `npm run preview` - Preview production build locally

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Rajshree1854/Portfolio/issues).

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Raj**

- GitHub: [@Rajshree1854](https://github.com/Rajshree1854)
- Portfolio: [https://portfolio.songoku.qzz.io/](https://portfolio.songoku.qzz.io/)

## 🙏 Acknowledgments

- Original design inspiration from [Figma Neo-folio template](https://www.figma.com/design/VoZSEaTBZxhVgrT3O9FeTm/Neo-folio)
- Built with [Vite](https://vitejs.dev/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Icons from [Lucide](https://lucide.dev/)

---

⭐ Star this repo if you find it helpful!