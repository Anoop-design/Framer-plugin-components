# Framer Design System Plugin

> A comprehensive component library with full light/dark theme support using official Framer color tokens.

## 🎨 What's Inside

**12 production-ready components** extracted from style-manager and style-checker plugins:

- **Inputs:** Button, Input, SearchBar
- **Display:** Badge, ColorSwatch, ListRow
- **Overlay:** Tooltip, Dropdown
- **Navigation:** Segmented Control
- **Feedback:** EmptyState, WarningBanner
- **Utility:** ErrorBoundary

## ✨ Features

- ✅ **Full theme support** — Automatic light/dark mode via Framer tokens
- ✅ **Accessibility first** — WCAG AA compliant, keyboard navigation
- ✅ **Performance optimized** — Hardware-accelerated animations
- ✅ **Fully documented** — Detailed CSS comments for easy customization
- ✅ **Motion-safe** — Respects `prefers-reduced-motion`

## 🚀 Quick Start

```bash
npm install
npm run dev    # Start development server
npm run build  # Build for production
```

## 📖 Documentation

See [`DESIGN_SYSTEM_GUIDE.md`](./DESIGN_SYSTEM_GUIDE.md) for:

- Complete component API reference
- Theme customization guide
- CSS architecture overview
- Line-by-line customization instructions
- Accessibility best practices

## 🎯 Component Quick Reference

### Button
```tsx
import { Button } from "./components/Button"

<Button>Default</Button>
<Button variant="primary">Primary</Button>
<Button size="icon">🔍</Button>
```

### Input
```tsx
import { Input } from "./components/Input"

<Input placeholder="Enter text..." />
<Input withIcon placeholder="Search..." />
```

### Badge
```tsx
import { Badge } from "./components/Badge"

<Badge>New</Badge>
<Badge variant="warning">Alert</Badge>
<Badge variant="count">42</Badge>
```

### Segmented Control
```tsx
import { Segmented } from "./components/Segmented"

<Segmented
  options={[
    { id: "all", label: "All", count: 12 },
    { id: "active", label: "Active" }
  ]}
  value={selected}
  onChange={setSelected}
/>
```

## 🎨 Theme Tokens

All components use official Framer color tokens:

| Token | Usage |
|-------|-------|
| `--framer-color-bg` | Primary background |
| `--framer-color-bg-tertiary` | Inputs, buttons, hover states |
| `--framer-color-text` | Primary text |
| `--framer-color-text-secondary` | Muted text |
| `--framer-color-divider` | Borders, separators |
| `--framer-color-tint` | Brand accent, focus rings |

## 📁 Project Structure

```
design-system/
├── src/
│   ├── components/          # All reusable components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Badge.tsx
│   │   ├── Tooltip.tsx
│   │   ├── Segmented.tsx
│   │   ├── SearchBar.tsx
│   │   ├── Dropdown.tsx
│   │   ├── ListRow.tsx
│   │   ├── ColorSwatch.tsx
│   │   ├── EmptyState.tsx
│   │   ├── WarningBanner.tsx
│   │   └── ErrorBoundary.tsx
│   ├── styles/
│   │   ├── App.css          # Main stylesheet (1000+ lines)
│   │   └── tokens.css       # Design tokens & variables
│   ├── App.tsx              # Main interface (component browser)
│   └── main.tsx             # Entry point
├── DESIGN_SYSTEM_GUIDE.md   # Comprehensive documentation
└── README.md                # This file
```

## 🛠️ Customization

All components are highly customizable via CSS. The `App.css` file includes detailed comments explaining how to edit every aspect:

```css
/* Example: Customizing button padding (line 267) */
.ds-button {
  /* Change padding for taller/shorter buttons */
  padding: 8px 16px; /* ← Edit this value */
}
```

See the [Customization Guide](./DESIGN_SYSTEM_GUIDE.md#customization-guide) for complete instructions.

## ♿ Accessibility

- **Keyboard navigation:** All components support Tab, Enter, Arrow keys, Escape
- **Focus visible:** `:focus-visible` rings only for keyboard users
- **Reduced motion:** Respects `prefers-reduced-motion` preference
- **WCAG AA:** All color combinations meet 4.5:1 contrast ratio
- **Semantic HTML:** Proper use of `<button>`, `<label>`, ARIA attributes

## 📚 Resources

- [Framer Plugin Docs](https://www.framer.com/developers/plugins/)
- [Framer Color Tokens](https://www.framer.com/developers/interface)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 🤝 Contributing

This design system was extracted from real production plugins. To add components:

1. Create component in `src/components/`
2. Add styles to `src/styles/App.css` with detailed comments
3. Export `.Example` component for the preview
4. Update the registry in `App.tsx`
5. Document in `DESIGN_SYSTEM_GUIDE.md`

## 📝 License

Built for the Framer plugin ecosystem. Free to use and modify.

---

**Made with ❤️ for the Framer community**
