/**
 * Empty State Component
 * ============================================================================
 * Centered message for empty or zero-data views.
 * 
 * FEATURES:
 * - Icon + title + subtitle layout
 * - Centered alignment
 * - Muted colors for subtle appearance
 * - Optional action button
 * 
 * USAGE:
 * ```tsx
 * <EmptyState
 *   icon={<SearchIcon />}
 *   title="No results found"
 *   subtitle="Try adjusting your search or filters"
 * />
 * ```
 */

interface EmptyStateProps {
    icon?: React.ReactNode
    title: string
    subtitle?: string
    action?: React.ReactNode
}

export function EmptyState({ icon, title, subtitle, action }: EmptyStateProps) {
    return (
        <div className="ds-empty">
            {icon && <div className="ds-empty-icon">{icon}</div>}
            <h3 className="ds-empty-title">{title}</h3>
            {subtitle && <p className="ds-empty-subtitle">{subtitle}</p>}
            {action && <div style={{ marginTop: 8 }}>{action}</div>}
        </div>
    )
}

// Example usage
EmptyState.Example = function EmptyStateExample() {
    return (
        <div style={{ display: "grid", gap: 24, width: "100%" }}>
            <EmptyState
                icon={
                    <svg viewBox="0 0 24 24" fill="none" width="32" height="32">
                        <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" />
                        <path d="M20 20l-4.2-4.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                }
                title="No components found"
                subtitle="Try adjusting your search or browse all components"
            />

            <div style={{ borderTop: "1px solid var(--framer-color-divider)", paddingTop: 24 }}>
                <EmptyState
                    icon={
                        <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"/>
                        </svg>
                    }
                    title="Select a layer to scan"
                    subtitle="Pick a frame or parent layer in the canvas"
                    action={
                        <button className="ds-button ds-button--primary ds-button--small">
                            Learn more
                        </button>
                    }
                />
            </div>
        </div>
    )
}

