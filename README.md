# My Portfolio 🌐

A personal portfolio website built with **React** and **Vite** to showcase projects, skills, experience, and contact information.

---

## 🔍 Overview

- Modern, responsive single-page portfolio
- Sections: `Hero`, `About`, `Experience`, `Skills`, `Projects`, `Contact`, and `Navbar`
- Includes simple scroll/entry animations (see `src/utils/reveal.js`) and icon support via `react-icons`

---

## 🚀 Features

- Clean, component-based React structure
- Responsive layout for mobile and desktop
- Easy to customize content and styles
- ESLint configured for code quality

---

## 🧰 Tech Stack

- **React** (v19)
- **Vite** (development build tool)
- **React Icons**
- **ESLint**

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open http://localhost:5173 (or the port shown by Vite).

### Build

```bash
npm run build
```

### Preview built site

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## 📁 Project Structure

```
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  ├─ About/
│  │  ├─ Contact/
│  │  ├─ Experience/
│  │  ├─ Hero/
│  │  ├─ Navbar/
│  │  ├─ Projects/
│  │  └─ Skills/
│  ├─ styles/
│  └─ utils/
│     └─ reveal.js
├─ index.html
├─ package.json
└─ vite.config.js
```

---

## 🔧 Customization

- Edit component content in `src/components/*` to update text, links or project cards
- Update styles in `src/styles/` and component CSS files
- Replace images in `public/images/` or add new assets to `src/assets/`

---

## 📦 Deployment

This is a static site after build and can be deployed to platforms like **Vercel**, **Netlify**, or any static hosting provider. Build with `npm run build` and follow the hosting provider's instructions.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Open a pull request

Please keep changes small and focused. Run `npm run lint` and ensure the app builds.

---

## 📝 License

This project is unlicensed by default. Add a license (e.g., **MIT**) if you want to make it open-source.

---

## ✉️ Contact

Update this section with your contact info so visitors or recruiters can reach you.

> **Tip:** Add a demo link or screenshots to make the README more engaging.

---

*Generated and tailored for your Vite + React portfolio project.*

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
