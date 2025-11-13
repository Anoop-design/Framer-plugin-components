/**
 * Design System — Component Library Interface (Web Version)
 * ==============================================================================
 * A comprehensive library of reusable UI components extracted from
 * style-manager and style-checker plugins.
 * 
 * Layout:
 * - Left pane (35%): Scrollable list of component names
 * - Right pane (65%): Live component preview + documentation
 * 
 * All components use Framer-inspired color tokens with light/dark theme support.
 */

import { useState, useEffect } from "react"
import "./styles/App.css"

// Component library
import { Button } from "./components/Button"
import { Input } from "./components/Input"
import { Badge } from "./components/Badge"
import { Tooltip } from "./components/Tooltip"
import { Segmented } from "./components/Segmented"
import { SearchBar } from "./components/SearchBar"
import { Dropdown } from "./components/Dropdown"
import { ListRow } from "./components/ListRow"
import { ColorSwatch } from "./components/ColorSwatch"
import { ColorReadout } from "./components/ColorReadout"
import { EmptyState } from "./components/EmptyState"
import { WarningBanner } from "./components/WarningBanner"
import { ErrorBoundary, ErrorBoundaryExample } from "./components/ErrorBoundary"
import { Slider } from "./components/Slider"
import { Stepper } from "./components/Stepper"

// Introduction component for landing page
function IntroductionExample() {
    return (
        <div className="ds-introduction">
            <div className="ds-intro-hero">
                <img 
                    src="/logo.png" 
                    alt="Framer Plugin Components" 
                    className="ds-intro-logo"
                />
                <h1 className="ds-intro-title">
                    Framer Plugin Components
                </h1>
                <p className="ds-intro-subtitle">
                    by <a 
                        href="https://framerlists.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="ds-intro-link"
                    >
                        Framer Lists
                    </a>
                </p>

                {/* Author & Links Section */}
                <div className="ds-intro-author">
                    <p className="ds-intro-author-text">
                        Created by <a 
                            href="https://x.com/itsonly_anoop" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ds-intro-link"
                        >
                            @itsonly_anoop
                        </a> • A designer crafting tools to help you build better Framer plugins faster.
                    </p>
                </div>
            </div>

            <div className="ds-intro-content">
                <div className="ds-intro-section">
                    <h2>Open Source Design System</h2>
                    <p>
                        A comprehensive collection of <strong>15 production-ready components</strong> for building 
                        beautiful Framer plugins. Every component is fully themed, accessible, and documented.
                    </p>

                    <div className="ds-intro-links">
                        <a 
                            href="https://github.com/Anoop-design/Framer-plugin-components" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ds-intro-link-button"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            View on GitHub
                        </a>
                        <a 
                            href="https://www.framer.com/@framerlists/?tab=plugins" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ds-intro-link-button ds-intro-link-button--secondary"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                <polyline points="15 3 21 3 21 9"/>
                                <line x1="10" y1="14" x2="21" y2="3"/>
                            </svg>
                            Plugins built With Components
                        </a>
                    </div>
                </div>

                <div className="ds-intro-features">
                    <div className="ds-intro-feature">
                        <div className="ds-intro-feature-icon">🎨</div>
                        <h3>Theme Support</h3>
                        <p>Automatic light/dark mode with Framer color tokens</p>
                    </div>
                    <div className="ds-intro-feature">
                        <div className="ds-intro-feature-icon">♿</div>
                        <h3>Accessible</h3>
                        <p>WCAG AA compliant with keyboard navigation</p>
                    </div>
                    <div className="ds-intro-feature">
                        <div className="ds-intro-feature-icon">⚡</div>
                        <h3>Performant</h3>
                        <p>Hardware-accelerated animations</p>
                    </div>
                    <div className="ds-intro-feature">
                        <div className="ds-intro-feature-icon">🤖</div>
                        <h3>AI-Ready</h3>
                        <p>Copy LLM prompts to rebuild any component</p>
                    </div>
                </div>

                <div className="ds-intro-section">
                    <h2>What's Included</h2>
                    <div className="ds-intro-grid">
                        <div className="ds-intro-category">
                            <h4>Inputs (5)</h4>
                            <p>Button, Input, Slider, Stepper, Search Bar</p>
                        </div>
                        <div className="ds-intro-category">
                            <h4>Display (5)</h4>
                            <p>Badge, List Row, Color Swatch, Color Readout, Empty State</p>
                        </div>
                        <div className="ds-intro-category">
                            <h4>Navigation (1)</h4>
                            <p>Segmented Control</p>
                        </div>
                        <div className="ds-intro-category">
                            <h4>Overlay (2)</h4>
                            <p>Tooltip, Dropdown Menu</p>
                        </div>
                        <div className="ds-intro-category">
                            <h4>Feedback (1)</h4>
                            <p>Warning Banner</p>
                        </div>
                        <div className="ds-intro-category">
                            <h4>Utility (1)</h4>
                            <p>Error Boundary</p>
                        </div>
                    </div>
                </div>

                <div className="ds-intro-section">
                    <h2>How to Use</h2>
                    <ol className="ds-intro-list">
                        <li>Browse components in the sidebar</li>
                        <li>View live previews and documentation</li>
                        <li>Copy the LLM prompt from "Build Specification"</li>
                        <li>Paste into your AI coding assistant (Cursor, Copilot, etc.)</li>
                        <li>Customize for your Framer plugin</li>
                    </ol>
                </div>

                <div className="ds-intro-cta">
                    <p>
                        <strong>Ready to explore?</strong> Click any component in the sidebar to get started →
                    </p>
                </div>
            </div>
        </div>
    )
}

// Component specifications for LLM prompts
const componentSpecs = {
    button: {
        cssClass: ".ds-button",
        cssValues: {
            padding: "8px 16px",
            borderRadius: "8px",
            fontSize: "13px",
            fontWeight: "500",
            height: "36px",
            transition: "background-color 200ms ease",
        },
        tokens: ["--framer-color-bg-tertiary", "--framer-color-text", "--framer-color-tint"],
        variants: ["default", "primary", "small", "icon"],
        structure: "Single button element with optional icon child",
    },
    input: {
        cssClass: ".ds-input",
        cssValues: {
            padding: "8px 12px",
            borderRadius: "8px",
            fontSize: "13px",
            height: "36px",
            border: "1px solid var(--framer-color-divider)",
            transition: "border-color 200ms ease",
        },
        tokens: ["--framer-color-bg", "--framer-color-text", "--framer-color-divider", "--framer-color-tint"],
        variants: ["default", "withIcon"],
        structure: "Input element with optional left icon wrapper",
    },
    slider: {
        cssClass: ".ds-slider-component",
        cssValues: {
            container: "display: flex, gap: 12px",
            badge: "width: 64px, padding: 4px 8px, border-radius: 6px",
            track: "height: 4px, border-radius: 4px",
            thumb: "width: 16px, height: 16px, border-radius: 50%",
        },
        tokens: ["--framer-color-bg-tertiary", "--framer-color-tint", "--framer-color-text"],
        variants: ["default", "disabled"],
        structure: "Container with editable badge input (left) and Radix UI slider (right)",
        dependencies: "@radix-ui/react-slider",
    },
    stepper: {
        cssClass: ".ds-stepper",
        cssValues: {
            container: "display: flex, height: 36px",
            input: "flex: 1, padding: 0 12px, font-size: 13px",
            button: "width: 32px, border-radius: 0",
            divider: "width: 1px, background: var(--framer-color-divider)",
        },
        tokens: ["--framer-color-bg-tertiary", "--framer-color-text", "--framer-color-divider"],
        variants: ["default", "disabled"],
        structure: "Flex container: input field (left) + divider + minus button + divider + plus button (right)",
    },
    badge: {
        cssClass: ".ds-badge",
        cssValues: {
            padding: "2px 6px",
            borderRadius: "6px",
            fontSize: "11px",
            fontWeight: "600",
            lineHeight: "1.2",
        },
        tokens: ["--framer-color-bg-tertiary", "--framer-color-text"],
        variants: ["default", "warning", "count"],
        structure: "Inline span with text content",
    },
    tooltip: {
        cssClass: ".ds-tooltip",
        cssValues: {
            padding: "6px 10px",
            borderRadius: "6px",
            fontSize: "12px",
            maxWidth: "200px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        },
        tokens: ["--framer-color-bg-quaternary", "--framer-color-text"],
        variants: ["default"],
        structure: "Portal-based overlay with collision detection, renders outside DOM hierarchy",
    },
    segmented: {
        cssClass: ".ds-segmented",
        cssValues: {
            container: "display: flex, gap: 2px, padding: 2px, border-radius: 10px",
            button: "flex: 1, padding: 6px 12px, font-size: 12px",
            indicator: "position: absolute, height: 100%, border-radius: 8px, transition: transform 200ms cubic-bezier(0.23, 1, 0.32, 1)",
        },
        tokens: ["--framer-color-bg-tertiary", "--framer-color-text", "--framer-color-bg-quaternary"],
        variants: ["default"],
        structure: "Relative container with buttons + absolutely positioned animated pill indicator",
    },
    search: {
        cssClass: ".ds-searchbar",
        cssValues: {
            container: "position: relative",
            input: "height: 36px, padding: 8px 32px 8px 12px, border-radius: 8px",
            icon: "position: absolute, left: 12px, top: 50%, transform: translateY(-50%)",
            clear: "position: absolute, right: 8px, top: 50%",
        },
        tokens: ["--framer-color-bg-tertiary", "--framer-color-text", "--framer-color-text-secondary"],
        variants: ["default", "withFilters"],
        structure: "Relative container with input + absolute positioned search icon (left) + clear button (right)",
    },
    dropdown: {
        cssClass: ".ds-dropdown",
        cssValues: {
            trigger: "min-width: 120px, padding: 8px 12px, border-radius: 8px",
            menu: "min-width: 200px, max-height: 300px, border-radius: 10px, padding: 8px",
            item: "padding: 8px 12px, border-radius: 6px, font-size: 13px",
        },
        tokens: ["--framer-color-bg", "--framer-color-bg-tertiary", "--framer-color-text", "--framer-color-divider"],
        variants: ["default"],
        structure: "Trigger button + portal-based menu with scrollable item list",
    },
    "list-row": {
        cssClass: ".ds-list-row",
        cssValues: {
            padding: "10px",
            borderRadius: "12px",
            fontSize: "13px",
            gap: "12px",
            transition: "background-color 160ms ease-out",
            icon: "width: 24px, height: 24px, flex-shrink: 0",
        },
        tokens: ["--framer-color-bg-tertiary", "--framer-color-text", "--framer-color-text-secondary"],
        variants: ["default", "selected"],
        structure: "Flex button: icon/tag (left) + flexible label (center) + trailing badge (right)",
    },
    "color-swatch": {
        cssClass: ".ds-swatch",
        cssValues: {
            width: "24px",
            height: "24px",
            borderRadius: "6px",
            boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)",
        },
        tokens: [],
        variants: ["small (16px)", "default (24px)", "large (32px)", "checker (transparent bg)"],
        structure: "Single div with inline background-color style",
    },
    "color-readout": {
        cssClass: ".ds-color-readout",
        cssValues: {
            container: "display: flex, align-items: center, gap: 8px",
            swatch: "width: 24px, height: 24px, border-radius: 6px",
            hex: "font-size: 13px, font-family: monospace",
            alpha: "font-size: 12px, opacity: 0.7",
        },
        tokens: ["--framer-color-text", "--framer-color-text-secondary"],
        variants: ["default"],
        structure: "Flex container: swatch (left) + hex code + alpha percentage (right)",
    },
    "empty-state": {
        cssClass: ".ds-empty-state",
        cssValues: {
            container: "display: flex, flex-direction: column, align-items: center, gap: 12px, padding: 40px 20px",
            icon: "width: 48px, height: 48px, opacity: 0.3",
            title: "font-size: 14px, font-weight: 600",
            subtitle: "font-size: 12px, opacity: 0.7, text-align: center",
        },
        tokens: ["--framer-color-text", "--framer-color-text-secondary"],
        variants: ["default"],
        structure: "Vertical flex container: icon (top) + title + subtitle (bottom), centered",
    },
    warning: {
        cssClass: ".ds-warning-banner",
        cssValues: {
            container: "display: flex, gap: 12px, padding: 12px, border-radius: 8px",
            icon: "width: 20px, height: 20px, flex-shrink: 0",
            background: "rgba(245, 158, 11, 0.1)",
            color: "rgb(245, 158, 11)",
            fontSize: "12px",
        },
        tokens: ["--framer-color-text"],
        variants: ["default"],
        structure: "Flex container: warning icon (left) + message text (right)",
    },
    "error-boundary": {
        cssClass: ".ds-error-boundary",
        cssValues: {
            container: "display: flex, flex-direction: column, align-items: center, gap: 16px, padding: 40px",
            icon: "font-size: 48px",
            title: "font-size: 16px, font-weight: 600",
            message: "font-size: 13px, opacity: 0.7",
            button: "margin-top: 8px",
        },
        tokens: ["--framer-color-text", "--framer-color-text-secondary"],
        variants: ["default"],
        structure: "React error boundary class component with componentDidCatch, renders fallback UI on error",
    },
}

function generateLLMPrompt(componentId: string, componentName: string, description: string) {
    const spec = componentSpecs[componentId as keyof typeof componentSpecs]
    if (!spec) return `# ${componentName}\n\nSpecification not yet available for this component.`

    const cssValuesFormatted = typeof spec.cssValues === 'object' && !Array.isArray(spec.cssValues)
        ? Object.entries(spec.cssValues).map(([key, value]) => `- **${key}**: \`${value}\``).join('\n')
        : spec.cssValues

    const tokensFormatted = spec.tokens.length > 0 
        ? spec.tokens.map(token => `- \`${token}\``).join('\n')
        : '- No Framer tokens (uses inline styles or static colors)'

    const dependencies = 'dependencies' in spec && spec.dependencies 
        ? `\n\n## Dependencies\n\n\`\`\`bash\nnpm install ${spec.dependencies}\n\`\`\`` 
        : ''

    return `# Build a ${componentName} Component

> Create a production-ready ${componentName} component for Framer plugins using React + TypeScript

## Component Overview

**Description**: ${description}

**CSS Class**: \`${spec.cssClass}\`

**Structure**: ${spec.structure}
${dependencies}

---

## Design Specifications

### CSS Values

${cssValuesFormatted}

### Framer Color Tokens

${tokensFormatted}

### Available Variants

${spec.variants.map(v => `- **${v}**`).join('\n')}

---

## Implementation Requirements

### 1. Theme Support
- ✅ Use Framer color tokens (\`--framer-color-*\`) for all colors
- ✅ Never hardcode hex/rgb colors
- ✅ Ensure component works in both light and dark themes

### 2. Interactive States
- ✅ **Hover**: Only on devices with hover capability
  \`\`\`css
  @media (hover: hover) and (pointer: fine) {
    /* hover styles */
  }
  \`\`\`
- ✅ **Focus**: Use \`:focus-visible\` for keyboard users
  \`\`\`css
  outline: 2px solid var(--framer-color-tint);
  outline-offset: 2px;
  \`\`\`
- ✅ **Active**: Provide visual feedback on press
- ✅ **Disabled**: Reduce opacity and disable pointer events

### 3. Accessibility (WCAG 2.1 AA)
- ✅ Use semantic HTML (\`<button>\`, \`<input>\`, etc.)
- ✅ Add proper ARIA attributes where needed
- ✅ Support keyboard navigation:
  - **Tab**: Focus management
  - **Enter/Space**: Activate buttons
  - **Escape**: Close overlays
  - **Arrow keys**: Navigate lists/options
- ✅ Ensure color contrast meets 4.5:1 ratio

### 4. Performance & Animations
- ✅ Only animate \`transform\` and \`opacity\` (hardware accelerated)
- ✅ Use \`will-change\` sparingly for active animations
- ✅ Animation duration: 150-300ms (200ms recommended)
- ✅ Use easing: \`cubic-bezier(0.23, 1, 0.32, 1)\` for smooth motion
- ✅ Respect reduced motion preference:
  \`\`\`css
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
  \`\`\`

### 5. TypeScript Props Interface
\`\`\`typescript
interface ${componentName}Props {
  variant?: ${spec.variants.map(v => `"${v}"`).join(' | ')}
  disabled?: boolean
  className?: string
  children?: React.ReactNode
  // Add component-specific props
}
\`\`\`

---

## Example Implementation

\`\`\`tsx
import { ${componentName}HTMLAttributes } from "react"

interface ${componentName}Props extends ${componentName}HTMLAttributes<HTML...Element> {
  variant?: "default" | "primary"
  // Add more props as needed
}

export function ${componentName}({ 
  variant = "default",
  className = "",
  children,
  ...props 
}: ${componentName}Props) {
  const variantClass = variant === "primary" ? "${spec.cssClass}--primary" : ""
  
  return (
    <button 
      className={\`${spec.cssClass} \${variantClass} \${className}\`.trim()}
      {...props}
    >
      {children}
    </button>
  )
}

// Export example for showcase
${componentName}.Example = function ${componentName}Example() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <${componentName}>Default</${componentName}>
      <${componentName} variant="primary">Primary</${componentName}>
      <${componentName} disabled>Disabled</${componentName}>
    </div>
  )
}
\`\`\`

---

## CSS Template

\`\`\`css
${spec.cssClass} {
  /* Layout */
  display: flex;
  align-items: center;
  gap: 8px;
  
  /* Spacing */
  ${typeof spec.cssValues === 'object' && 'padding' in spec.cssValues ? `padding: ${spec.cssValues.padding};` : '/* Add padding */'}
  
  /* Visual */
  ${typeof spec.cssValues === 'object' && 'borderRadius' in spec.cssValues ? `border-radius: ${spec.cssValues.borderRadius};` : '/* Add border-radius */'}
  border: none;
  background: var(--framer-color-bg-tertiary);
  color: var(--framer-color-text);
  
  /* Typography */
  ${typeof spec.cssValues === 'object' && 'fontSize' in spec.cssValues ? `font-size: ${spec.cssValues.fontSize};` : '/* Add font-size */'}
  font-weight: 500;
  
  /* Interaction */
  cursor: pointer;
  transition: background-color 200ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
}

/* Hover state */
@media (hover: hover) and (pointer: fine) {
  ${spec.cssClass}:hover {
    background: var(--framer-color-bg-quaternary);
  }
}

/* Focus state */
${spec.cssClass}:focus-visible {
  outline: 2px solid var(--framer-color-tint);
  outline-offset: 2px;
}

/* Active state */
${spec.cssClass}:active {
  transform: scale(0.98);
}

/* Disabled state */
${spec.cssClass}:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
\`\`\`

---

## Testing Checklist

- [ ] Works in both light and dark themes
- [ ] All variants render correctly
- [ ] Hover states work (desktop only)
- [ ] Keyboard focus is visible
- [ ] Keyboard navigation works
- [ ] Screen reader announces correctly
- [ ] Disabled state prevents interaction
- [ ] Animations respect reduced motion
- [ ] No layout shift on state changes
- [ ] TypeScript types are correct

---

## Resources

- [Framer Plugin Docs](https://www.framer.com/developers/plugins/)
- [Framer Color Tokens](https://www.framer.com/developers/interface)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

---

**Generated from Framer Design System** • [View Live Demo](https://your-deployed-url.vercel.app)`
}

// Component registry with metadata
const components = [
    {
        id: "introduction",
        name: "Introduction",
        category: "Getting Started",
        description: "Welcome to the Framer Plugin Components design system. Learn how to use these production-ready components in your plugins.",
        useCase: "Start here to understand the design system, browse available components, and learn how to integrate them into your Framer plugins.",
        component: IntroductionExample,
    },
    {
        id: "button",
        name: "Button",
        category: "Inputs",
        description: "Primary action button with icon support and hover states. Uses Framer color tokens for automatic theming.",
        useCase: "Used for primary actions, icon buttons, and footer actions. Supports disabled states and keyboard focus.",
        component: Button.Example,
    },
    {
        id: "input",
        name: "Input",
        category: "Inputs",
        description: "Text input field with focus ring and optional search variant. Includes left icon support and clear button.",
        useCase: "Form inputs, search bars, filter fields. Keyboard accessible with proper focus states.",
        component: Input.Example,
    },
    {
        id: "slider",
        name: "Slider",
        category: "Inputs",
        description: "Modern slider built with Radix UI. Equal-width badge input and slider track. Editable value badge on left, accessible slider with range and draggable thumb on right.",
        useCase: "Numeric value adjustments, opacity controls, volume sliders. Built on @radix-ui/react-slider for full accessibility (ARIA, keyboard nav: arrows, Home, End, Page Up/Down).",
        component: Slider.Example,
    },
    {
        id: "stepper",
        name: "Stepper",
        category: "Inputs",
        description: "Number input with increment/decrement controls. Input field on left, +/- buttons separated by divider on right.",
        useCase: "Precise numeric adjustments, quantity selectors, step-based controls. Supports keyboard arrows and direct input.",
        component: Stepper.Example,
    },
    {
        id: "badge",
        name: "Badge",
        category: "Display",
        description: "Small label or count indicator with multiple variants (default, warning, count). Compact and scannable.",
        useCase: "Count indicators, status labels, warning chips. Often paired with list rows or tabs.",
        component: Badge.Example,
    },
    {
        id: "tooltip",
        name: "Tooltip",
        category: "Overlay",
        description: "Portal-based tooltip with smart collision detection. Auto-flips to stay visible on screen.",
        useCase: "Contextual help, icon button labels, truncated text hints. Respects reduced motion preferences.",
        component: Tooltip.Example,
    },
    {
        id: "segmented",
        name: "Segmented Control",
        category: "Navigation",
        description: "Tab control with animated sliding pill indicator. Equal-width segments with keyboard navigation.",
        useCase: "View switchers (Colors/Text), filter toggles. Supports Arrow keys, Home, and End navigation.",
        component: Segmented.Example,
    },
    {
        id: "search",
        name: "Search Bar",
        category: "Inputs",
        description: "Advanced search input with filter chips and animated hints. Includes filter dropdown menu.",
        useCase: "List filtering, style search, multi-criteria filtering. Shows dynamic hints when empty.",
        component: SearchBar.Example,
    },
    {
        id: "dropdown",
        name: "Dropdown Menu",
        category: "Overlay",
        description: "Dropdown menu with search header and keyboard navigation. Scrollable with hidden scrollbars.",
        useCase: "Action menus, style selectors, filterable lists. Supports Arrow keys and Enter selection.",
        component: Dropdown.Example,
    },
    {
        id: "list-row",
        name: "List Row",
        category: "Display",
        description: "Flexible list item with icon/tag, label, and trailing badges. Tree view support with caret.",
        useCase: "Style lists, layer trees, file browsers. Supports selection, hover, and expand/collapse states.",
        component: ListRow.Example,
    },
    {
        id: "color-swatch",
        name: "Color Swatch",
        category: "Display",
        description: "Color preview square with subtle border and optional checkerboard background for transparency.",
        useCase: "Color style previews, palette displays, token selectors. Sizes: 14px, 24px variants.",
        component: ColorSwatch.Example,
    },
    {
        id: "color-readout",
        name: "Color Readout",
        category: "Display",
        description: "Read-only color display showing swatch, hex code, and alpha percentage. Extracted from style-checker's inspector.",
        useCase: "Color value inspection, style debugging, color information display. Shows hex code and opacity in a compact format.",
        component: ColorReadout.Example,
    },
    {
        id: "empty-state",
        name: "Empty State",
        category: "Feedback",
        description: "Centered message with icon, title, and subtitle for empty or zero-data views.",
        useCase: "No results, empty lists, initial states. Guides users on what to do next.",
        component: EmptyState.Example,
    },
    {
        id: "warning",
        name: "Warning Banner",
        category: "Feedback",
        description: "Amber-colored alert banner with icon for non-destructive warnings and notices.",
        useCase: "Component warnings, validation messages, helpful tips. Non-blocking informational alerts.",
        component: WarningBanner.Example,
    },
    {
        id: "error-boundary",
        name: "Error Boundary",
        category: "Utility",
        description: "React error boundary with reset capability. Catches and displays runtime errors gracefully.",
        useCase: "Wrap entire app or feature sections to prevent full crashes. Shows friendly error message.",
        component: ErrorBoundaryExample,
    },
]

function AppShell() {
    const [selected, setSelected] = useState(components[0].id)
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        // Check user's system preference
        if (typeof window !== 'undefined' && window.matchMedia) {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        }
        return 'light'
    })
    const [copiedPrompt, setCopiedPrompt] = useState(false)
    
    const selectedComponent = components.find((c) => c.id === selected)
    const ComponentPreview = selectedComponent ? selectedComponent.component : IntroductionExample

    // Apply theme to document
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    // Keyboard shortcuts for component navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Only trigger if not typing in an input/textarea
            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
                return
            }

            // Only trigger with Cmd/Ctrl modifier (no Shift/Alt to keep it simple)
            if (!(e.metaKey || e.ctrlKey)) return
            if (e.shiftKey || e.altKey) return

            // Map shortcuts to component IDs
            // Avoiding common browser shortcuts: T(tab), N(new window), W(close), R(refresh), 
            // F(find), P(print), S(save), O(open), H(history), D(bookmark), L(location), J, K, U, I(italic)
            const shortcutMap: Record<string, string> = {
                '1': 'introduction',
                '2': 'button',
                '3': 'input',
                '4': 'slider',
                '5': 'stepper',
                '6': 'badge',
                '7': 'tooltip',
                '8': 'segmented',
                '9': 'search',
                'q': 'dropdown',         // Q for query/menu
                'e': 'list-row',         // E for entry/row
                'm': 'color-swatch',     // M for material/swatch
                'g': 'color-readout',    // G for gauge/readout
                'v': 'empty-state',      // V for void
                'x': 'warning',          // X for warning
                'z': 'error-boundary',   // Z for error zone
            }

            const componentId = shortcutMap[e.key.toLowerCase()]
            if (componentId) {
                e.preventDefault()
                setSelected(componentId)
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }

    const copyPromptToClipboard = () => {
        if (!selectedComponent) return
        
        const prompt = generateLLMPrompt(selectedComponent.id, selectedComponent.name, selectedComponent.description)
        navigator.clipboard.writeText(prompt).then(() => {
            setCopiedPrompt(true)
            setTimeout(() => setCopiedPrompt(false), 2000)
        })
    }

    return (
        <div className="ds-root">
            {/* Left pane: Component list */}
            <aside className="ds-sidebar">
                <header className="ds-header">
                    <div className="ds-branding">
                        <img 
                            src="/logo.png" 
                            alt="Framer Plugin Components" 
                            className="ds-branding-logo"
                        />
                        <div className="ds-branding-text">
                            <h1 className="ds-branding-title">Framer Plugin Components</h1>
                            <p className="ds-branding-subtitle">
                                by <a 
                                    href="https://framerlists.com/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="ds-branding-link"
                                >
                                    Framer Lists
                                </a>
                            </p>
                        </div>
                    </div>
                    <button 
                        className="ds-theme-toggle" 
                        onClick={toggleTheme}
                        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
                        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
                    >
                        {theme === 'light' ? (
                            // Moon icon for dark mode
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                            ) : (
                                // Sun icon for light mode
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="5"></circle>
                                    <line x1="12" y1="1" x2="12" y2="3"></line>
                                    <line x1="12" y1="21" x2="12" y2="23"></line>
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                    <line x1="1" y1="12" x2="3" y2="12"></line>
                                    <line x1="21" y1="12" x2="23" y2="12"></line>
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                                </svg>
                            )}
                    </button>
                </header>
                <nav className="ds-nav">
                    {/* Group components by category */}
                    {["Getting Started", "Inputs", "Display", "Navigation", "Overlay", "Feedback", "Utility"].map((category) => {
                        const categoryComponents = components.filter((c) => c.category === category)
                        if (categoryComponents.length === 0) return null
                        
                        // For "Getting Started", show without component count
                        const isGettingStarted = category === "Getting Started"
                        
                        return (
                            <div key={category} className="ds-nav-group">
                                <div className="ds-nav-header">
                                    {category}
                                    {!isGettingStarted && ` (${categoryComponents.length})`}
                                </div>
                                {categoryComponents.map((comp) => {
                                    const isMac = typeof navigator !== 'undefined' && navigator.userAgent.includes('Mac')
                                    const modKey = isMac ? '⌘' : 'Ctrl'
                                    
                                    // Assign shortcuts using numbers 1-9 and letters Q,E,M,G,V,X,Z
                                    const shortcutMap: Record<string, string> = {
                                        'introduction': '1',
                                        'button': '2',
                                        'input': '3',
                                        'slider': '4',
                                        'stepper': '5',
                                        'badge': '6',
                                        'tooltip': '7',
                                        'segmented': '8',
                                        'search': '9',
                                        'dropdown': 'Q',
                                        'list-row': 'E',
                                        'color-swatch': 'M',
                                        'color-readout': 'G',
                                        'empty-state': 'V',
                                        'warning': 'X',
                                        'error-boundary': 'Z',
                                    }
                                    
                                    const shortcutKey = shortcutMap[comp.id]
                                    const shortcutTitle = shortcutKey ? `${modKey} + ${shortcutKey}` : ''
                                    
                                    return (
                                    <button
                                        key={comp.id}
                                        className={`ds-nav-item ${selected === comp.id ? "is-active" : ""}`}
                                        onClick={() => setSelected(comp.id)}
                                        title={shortcutTitle || undefined}
                                    >
                                        <span className="ds-nav-label">{comp.name}</span>
                                        {shortcutKey && (
                                            <span className="ds-nav-shortcut" aria-label={`Keyboard shortcut: ${shortcutTitle}`}>
                                                <span className="ds-nav-shortcut-mod">{modKey}</span>
                                                <span className="ds-nav-shortcut-key">{shortcutKey}</span>
                                            </span>
                                        )}
                                    </button>
                                    )
                                })}
                            </div>
                        )
                    })}
                </nav>
            </aside>

            {/* Right pane: Component preview + docs */}
            <main className="ds-main">
                <div className="ds-content">
                    {selected === 'introduction' ? (
                        // Show introduction page without header or build spec
                        <ComponentPreview />
                    ) : selectedComponent ? (
                        // Show component documentation
                        <>
                    <header className="ds-component-header">
                        <div className="ds-breadcrumb">
                            <span className="ds-breadcrumb-category">{selectedComponent.category}</span>
                            <span className="ds-breadcrumb-separator">›</span>
                            <span className="ds-breadcrumb-name">{selectedComponent.name}</span>
                        </div>
                        <h2 className="ds-component-title">{selectedComponent.name}</h2>
                        <p className="ds-component-description">{selectedComponent.description}</p>
                    </header>

                    {/* Live preview */}
                    <section className="ds-preview">
                        <div className="ds-preview-label">
                            <span>Preview</span>
                            <span className="ds-preview-hint">Live component with theme support</span>
                        </div>
                        <div className="ds-preview-canvas">
                            <ComponentPreview />
                        </div>
                    </section>

                    {/* Documentation */}
                    <section className="ds-docs">
                        <div>
                            <h3 className="ds-docs-heading">Use Case</h3>
                            <p className="ds-docs-text">{selectedComponent.useCase}</p>
                        </div>

                        <div className="ds-docs-divider" />

                        <div>
                            <h3 className="ds-docs-heading">Color Tokens</h3>
                            <p className="ds-docs-text">
                                All components use official Framer color tokens for automatic theme support:
                            </p>
                            <ul className="ds-token-list">
                                <li><code>--framer-color-bg</code> — Primary background surface</li>
                                <li><code>--framer-color-bg-secondary</code> — Secondary surface layer</li>
                                <li><code>--framer-color-bg-tertiary</code> — Tertiary surface (inputs, buttons)</li>
                                <li><code>--framer-color-text</code> — Primary text color</li>
                                <li><code>--framer-color-text-secondary</code> — Muted/secondary text</li>
                                <li><code>--framer-color-divider</code> — Borders and dividers</li>
                                <li><code>--framer-color-tint</code> — Brand accent (focus rings, links)</li>
                            </ul>
                        </div>

                        <div className="ds-docs-divider" />

                        <div>
                            <h3 className="ds-docs-heading">Accessibility</h3>
                            <ul className="ds-docs-list">
                                <li>Keyboard navigation support (Tab, Arrow keys, Enter, Escape)</li>
                                <li>Focus visible states with <code>:focus-visible</code></li>
                                <li>Respects <code>prefers-reduced-motion</code> media query</li>
                                <li>Proper ARIA attributes and semantic HTML</li>
                                <li>Sufficient color contrast in both themes</li>
                            </ul>
                        </div>

                        <div className="ds-docs-divider" />

                        {/* Build Specification for LLMs */}
                        <div className="ds-build-spec">
                            <div className="ds-build-spec-header">
                                <div>
                                    <h3 className="ds-docs-heading">Build Specification</h3>
                                    <p className="ds-build-spec-subtitle">
                                        Copy this prompt to rebuild this component with AI assistance
                                    </p>
                                </div>
                                <button 
                                    className="ds-copy-button"
                                    onClick={copyPromptToClipboard}
                                    aria-label="Copy specification to clipboard"
                                >
                                    {copiedPrompt ? (
                                        <>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                            <span>Copied!</span>
                                        </>
                                    ) : (
                                        <>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                            </svg>
                                            <span>Copy Prompt</span>
                                        </>
                                    )}
                                </button>
                            </div>
                            <pre className="ds-build-spec-code">
                                <code>{generateLLMPrompt(selectedComponent.id, selectedComponent.name, selectedComponent.description)}</code>
                            </pre>
                            <div className="ds-build-spec-footer">
                                <p>
                                    💡 <strong>How to use:</strong> Copy this prompt and paste it into your AI coding assistant 
                                    (Cursor, GitHub Copilot, etc.) to generate this component with exact specifications.
                                </p>
                            </div>
                        </div>
                    </section>
                        </>
                    ) : (
                        // Fallback if component not found
                        <div className="ds-empty-state">
                            <p>Component not found</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}

// Wrap entire app in ErrorBoundary for crash protection
export function App() {
    return (
        <ErrorBoundary>
            <AppShell />
        </ErrorBoundary>
    )
}
