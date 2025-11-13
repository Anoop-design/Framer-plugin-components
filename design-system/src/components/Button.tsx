/**
 * Button Component
 * ============================================================================
 * A versatile button component with multiple variants and states.
 * 
 * FEATURES:
 * - Primary and default variants
 * - Icon-only mode
 * - Disabled state
 * - Keyboard accessible
 * - Theme-aware via Framer tokens
 * 
 * USAGE:
 * ```tsx
 * <Button>Click me</Button>
 * <Button variant="primary">Save</Button>
 * <Button icon>🔍</Button>
 * <Button disabled>Disabled</Button>
 * ```
 */

import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "primary"
    size?: "default" | "small" | "icon"
    icon?: boolean
    children?: React.ReactNode
}

export function Button({ 
    variant = "default", 
    size = "default",
    icon = false,
    className = "",
    children,
    ...props 
}: ButtonProps) {
    const variantClass = variant === "primary" ? "ds-button--primary" : ""
    const sizeClass = icon ? "ds-button--icon" : size === "small" ? "ds-button--small" : ""
    const classes = `ds-button ${variantClass} ${sizeClass} ${className}`.trim()

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    )
}

// Example usage component for the design system preview
Button.Example = function ButtonExample() {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
            <Button>Default Button</Button>
            <Button variant="primary">Primary Button</Button>
            <Button size="small">Small Button</Button>
            <Button icon>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </Button>
            <Button disabled>Disabled</Button>
        </div>
    )
}

