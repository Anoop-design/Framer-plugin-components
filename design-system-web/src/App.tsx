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

// Component registry with metadata
const components = [
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
    
    const selectedComponent = components.find((c) => c.id === selected) || components[0]
    const ComponentPreview = selectedComponent.component

    // Apply theme to document
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }

    return (
        <div className="ds-root">
            {/* Left pane: Component list */}
            <aside className="ds-sidebar">
                <header className="ds-header">
                    <div className="ds-header-content">
                        <div>
                            <h1 className="ds-title">Design System</h1>
                            <span className="ds-count">{components.length} components</span>
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
                    </div>
                </header>
                <nav className="ds-nav">
                    {/* Group components by category */}
                    {["Inputs", "Display", "Navigation", "Overlay", "Feedback", "Utility"].map((category) => {
                        const categoryComponents = components.filter((c) => c.category === category)
                        if (categoryComponents.length === 0) return null
                        
                        return (
                            <div key={category} className="ds-nav-group">
                                <div className="ds-nav-header">{category}</div>
                                {categoryComponents.map((comp) => (
                                    <button
                                        key={comp.id}
                                        className={`ds-nav-item ${selected === comp.id ? "is-active" : ""}`}
                                        onClick={() => setSelected(comp.id)}
                                    >
                                        <span className="ds-nav-label">{comp.name}</span>
                                    </button>
                                ))}
                            </div>
                        )
                    })}
                </nav>
            </aside>

            {/* Right pane: Component preview + docs */}
            <main className="ds-main">
                <div className="ds-content">
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
                    </section>
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
