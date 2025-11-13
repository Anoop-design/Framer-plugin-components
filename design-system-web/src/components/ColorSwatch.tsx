/**
 * Color Swatch Component
 * ============================================================================
 * Square color preview with subtle border and optional checkerboard pattern.
 * 
 * FEATURES:
 * - Multiple size variants (small, default, large)
 * - Checkerboard background for transparent colors
 * - Subtle border for definition
 * - Flexible sizing
 * 
 * USAGE:
 * ```tsx
 * <ColorSwatch color="#3b82f6" />
 * <ColorSwatch color="rgba(59, 130, 246, 0.5)" checker />
 * <ColorSwatch color="#000" size="large" />
 * ```
 */

interface ColorSwatchProps {
    color: string
    size?: "small" | "default" | "large"
    checker?: boolean
    className?: string
}

export function ColorSwatch({ 
    color, 
    size = "default", 
    checker = false,
    className = "" 
}: ColorSwatchProps) {
    const sizeClass = size === "small" ? "ds-swatch--small" : size === "large" ? "ds-swatch--large" : ""
    const checkerClass = checker ? "ds-swatch--checker" : ""
    
    return (
        <span
            className={`ds-swatch ${sizeClass} ${checkerClass} ${className}`.trim()}
            style={{ background: color }}
            aria-label={`Color: ${color}`}
            role="img"
        />
    )
}

// Example usage
ColorSwatch.Example = function ColorSwatchExample() {
    const colors = [
        { color: "#3b82f6", label: "Blue" },
        { color: "#ef4444", label: "Red" },
        { color: "#10b981", label: "Green" },
        { color: "#f59e0b", label: "Amber" },
        { color: "#8b5cf6", label: "Purple" },
        { color: "rgba(59, 130, 246, 0.3)", label: "Blue 30%", checker: true },
    ]

    return (
        <div style={{ display: "grid", gap: 16 }}>
            {/* Default size */}
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                {colors.map((c, i) => (
                    <ColorSwatch key={i} color={c.color} checker={c.checker} />
                ))}
            </div>

            {/* Small size */}
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                {colors.slice(0, 5).map((c, i) => (
                    <ColorSwatch key={i} color={c.color} size="small" />
                ))}
            </div>

            {/* Large size */}
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                {colors.slice(0, 4).map((c, i) => (
                    <ColorSwatch key={i} color={c.color} size="large" />
                ))}
            </div>
        </div>
    )
}

