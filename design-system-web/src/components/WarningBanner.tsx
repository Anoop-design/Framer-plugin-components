/**
 * Warning Banner Component
 * ============================================================================
 * Amber-colored alert banner for non-destructive warnings and notices.
 * 
 * FEATURES:
 * - Amber color scheme (not red, to avoid alarm)
 * - Icon + title + optional description
 * - Flexible layout for varying content lengths
 * - Accessible color contrast
 * 
 * USAGE:
 * ```tsx
 * <WarningBanner
 *   title="Code component detected"
 *   description="Internal layers cannot be scanned."
 * />
 * ```
 */

interface WarningBannerProps {
    title: string
    description?: string
    icon?: React.ReactNode
}

export function WarningBanner({ title, description, icon }: WarningBannerProps) {
    const defaultIcon = (
        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
            <path d="M12 2L2 22h20L12 2zm-1 8h2v6h-2v-6zm1 8a1 1 0 100 2 1 1 0 000-2z"/>
        </svg>
    )

    return (
        <div className="ds-warning">
            <div className="ds-warning-icon">
                {icon || defaultIcon}
            </div>
            <div className="ds-warning-content">
                <div className="ds-warning-title">{title}</div>
                {description && <div className="ds-warning-text">{description}</div>}
            </div>
        </div>
    )
}

// Example usage
WarningBanner.Example = function WarningBannerExample() {
    return (
        <div style={{ display: "grid", gap: 16, width: "100%" }}>
            <WarningBanner
                title="Code component detected"
                description="Internal layers cannot be scanned. Edit available properties from the component's controls."
            />

            <WarningBanner
                title="No text styles found"
            />

            <WarningBanner
                title="3 issues detected"
                description="Some layers are missing color or text styles."
            />
        </div>
    )
}

