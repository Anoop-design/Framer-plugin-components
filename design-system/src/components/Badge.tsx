/**
 * Badge Component
 * ============================================================================
 * Small label or count indicator with multiple visual variants.
 * 
 * FEATURES:
 * - Default neutral style
 * - Warning variant (amber background)
 * - Count variant (for numbers)
 * - Compact and readable
 * 
 * USAGE:
 * ```tsx
 * <Badge>New</Badge>
 * <Badge variant="warning">Alert</Badge>
 * <Badge variant="count">42</Badge>
 * ```
 */

interface BadgeProps {
    variant?: "default" | "warning" | "count"
    children: React.ReactNode
    className?: string
}

export function Badge({ variant = "default", children, className = "" }: BadgeProps) {
    const variantClass = variant === "warning" 
        ? "ds-badge--warning" 
        : variant === "count" 
        ? "ds-badge--count" 
        : ""
    
    return (
        <span className={`ds-badge ${variantClass} ${className}`.trim()}>
            {children}
        </span>
    )
}

// Example usage
Badge.Example = function BadgeExample() {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
            <Badge>Default</Badge>
            <Badge variant="count">12</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="warning">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 22h20L12 2zm0 4l7.5 15h-15L12 6z"/>
                    <circle cx="12" cy="17" r="1"/>
                    <path d="M12 10v5"/>
                </svg>
                3 Issues
            </Badge>
        </div>
    )
}

