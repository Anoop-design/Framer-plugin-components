/**
 * Design System Components — Barrel Export
 * ============================================================================
 * Central export file for easy importing of all components.
 * 
 * Usage:
 * ```tsx
 * import { Button, Input, Badge } from "./components"
 * ```
 * 
 * Individual imports also work:
 * ```tsx
 * import { Button } from "./components/Button"
 * ```
 */

export { Button } from "./Button"
export { Input } from "./Input"
export { Badge } from "./Badge"
export { Tooltip } from "./Tooltip"
export { Segmented } from "./Segmented"
export { SearchBar } from "./SearchBar"
export { Dropdown } from "./Dropdown"
export { ListRow } from "./ListRow"
export { ColorSwatch } from "./ColorSwatch"
export { ColorReadout } from "./ColorReadout"
export { EmptyState } from "./EmptyState"
export { WarningBanner } from "./WarningBanner"
export { ErrorBoundary } from "./ErrorBoundary"
export { Slider } from "./Slider"
export { Stepper } from "./Stepper"

// Re-export component types if needed
export type { ButtonHTMLAttributes } from "react"
export type { InputHTMLAttributes } from "react"

