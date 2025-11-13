# Framer Design System — Web Demo

> A live, interactive showcase of reusable UI components for building Framer plugins. Now available as a web demo with full light/dark theme support!

![Design System Preview](https://img.shields.io/badge/Components-15-blue) ![Theme Support](https://img.shields.io/badge/Theme-Light%20%7C%20Dark-purple) ![Framework](https://img.shields.io/badge/Built%20with-React%20%2B%20Vite-orange)

## 🎨 What's Inside

**15 production-ready components** extracted from real Framer plugins:

- **Inputs (5):** Button, Input, Slider, Stepper, SearchBar
- **Display (5):** Badge, ColorSwatch, ColorReadout, ListRow, EmptyState
- **Navigation (1):** Segmented Control
- **Overlay (2):** Tooltip, Dropdown
- **Feedback (1):** WarningBanner
- **Utility (1):** ErrorBoundary

## ✨ Features

- ✅ **Live Component Preview** — Interactive demos with real functionality
- ✅ **Light/Dark Theme Toggle** — Switch themes with one click
- ✅ **Fully Responsive** — Works on desktop, tablet, and mobile
- ✅ **Accessibility First** — WCAG AA compliant, keyboard navigation
- ✅ **Performance Optimized** — Hardware-accelerated animations
- ✅ **Zero Dependencies** — Except @radix-ui/react-slider

---

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

### Build for Production

```bash
# Build optimized bundle
npm run build

# Preview production build
npm run preview
```

---

## 📦 Deploy to Vercel

### Option 1: Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy to Vercel
cd design-system-web
vercel

# For production deployment
vercel --prod
```

### Option 2: Vercel Dashboard

1. **Push to GitHub/GitLab/Bitbucket**
   ```bash
   git add .
   git commit -m "Add design system web demo"
   git push
   ```

2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your repository
   - Vercel auto-detects Vite configuration
   - Click **Deploy**

3. **Configure Project (if needed)**
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

### Option 3: Deploy from Local

```bash
# One-command deployment
npm install -g vercel
vercel --prod
```

**Your demo will be live at:** `https://your-project.vercel.app`

---

## 🎯 Component Preview

The web demo provides:

1. **Component Browser** — Sidebar navigation with categories
2. **Live Preview** — Interactive component examples
3. **Documentation** — Props, use cases, accessibility notes
4. **Theme Toggle** — Test components in light and dark modes
5. **Token Reference** — See all color tokens in action

---

## 🎨 Theme System

All components use Framer-inspired color tokens that automatically adapt to the selected theme:

### Light Theme Colors

```css
--framer-color-bg: #ffffff
--framer-color-text: #0f172a
--framer-color-tint: #0099ff
```

### Dark Theme Colors

```css
--framer-color-bg: #0f0f0f
--framer-color-text: #ffffff
--framer-color-tint: #0099ff
```

**Switch themes** using the sun/moon icon in the sidebar header.

---

## 📁 Project Structure

```
design-system-web/
├── src/
│   ├── components/          # All 15 reusable components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Slider.tsx
│   │   ├── Badge.tsx
│   │   └── ... (11 more)
│   ├── styles/
│   │   ├── App.css          # Component styles (1900+ lines)
│   │   └── tokens.css       # Theme tokens (light/dark)
│   ├── App.tsx              # Main interface with theme toggle
│   └── main.tsx             # Entry point
├── vercel.json              # Vercel deployment config
├── package.json
└── README.md                # This file
```

---

## 🛠️ Customization

### Change Theme Colors

Edit `src/styles/tokens.css`:

```css
/* Light theme */
[data-theme="light"] {
  --framer-color-bg: #ffffff;
  --framer-color-tint: #your-brand-color;
}

/* Dark theme */
[data-theme="dark"] {
  --framer-color-bg: #0f0f0f;
  --framer-color-tint: #your-brand-color;
}
```

### Add New Components

1. Create component in `src/components/YourComponent.tsx`
2. Add styles to `src/styles/App.css`
3. Export `.Example` component for preview
4. Register in `App.tsx` component registry

---

## 📚 Documentation

For detailed component documentation, see:

- **[Component Guide](./docs/components-guide.md)** — Complete API reference
- **[Quick Reference](./docs/components-guide-summary.md)** — Navigation guide
- **[Navigation Index](./docs/navigation-index.md)** — Section finder

---

## ♿ Accessibility

- ✅ **Keyboard Navigation** — Tab, Arrow keys, Enter, Escape
- ✅ **Focus Visible** — Clear focus indicators for keyboard users
- ✅ **Reduced Motion** — Respects `prefers-reduced-motion`
- ✅ **WCAG AA** — All color combinations meet 4.5:1 contrast
- ✅ **Semantic HTML** — Proper ARIA attributes

---

## 🧪 Technologies

- **React 18** — UI library
- **TypeScript** — Type safety
- **Vite** — Build tool and dev server
- **CSS Variables** — Theme system
- **Radix UI Slider** — Accessible slider component

---

## 📝 License

Built for the Framer plugin ecosystem. Free to use and modify.

---

## 🔗 Resources

- [Framer Plugin Docs](https://www.framer.com/developers/plugins/)
- [Vite Documentation](https://vitejs.dev/)
- [Vercel Documentation](https://vercel.com/docs)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 💡 Need Help?

### Common Issues

**Q: Components look unstyled**  
A: Make sure theme tokens are loaded. Check browser console for CSS errors.

**Q: Theme toggle doesn't work**  
A: Ensure `data-theme` attribute is applied to `<html>` element.

**Q: Build fails on Vercel**  
A: Verify `package.json` scripts and `vercel.json` configuration.

---

## 🚢 Deployment Checklist

- [x] Remove `framer-plugin` dependency
- [x] Remove `framer.showUI()` call
- [x] Add theme system with toggle
- [x] Define color tokens for both themes
- [x] Update `vite.config.ts`
- [x] Add `vercel.json` configuration
- [x] Update README with deployment instructions
- [x] Test build locally (`npm run build`)
- [x] Deploy to Vercel

---

**Made with ❤️ for the Framer community**

Deploy your demo now: `vercel --prod` 🚀
