/**
 * List Row Component
 * ============================================================================
 * Flexible list item with icon, label, and trailing content.
 * 
 * FEATURES:
 * - Icon/tag on left
 * - Label with ellipsis truncation
 * - Trailing badges or counts
 * - Hover and selection states
 * - Keyboard accessible
 * 
 * USAGE:
 * ```tsx
 * <ListRow
 *   icon="C"
 *   label="Primary Color"
 *   selected={true}
 *   onClick={() => {}}
 * />
 * ```
 */

interface ListRowProps {
    icon?: React.ReactNode
    label: string
    trailing?: React.ReactNode
    selected?: boolean
    onClick?: () => void
    className?: string
}

export function ListRow({ 
    icon, 
    label, 
    trailing, 
    selected = false, 
    onClick,
    className = "" 
}: ListRowProps) {
    return (
        <button
            className={`ds-list-row ${selected ? "is-selected" : ""} ${className}`.trim()}
            onClick={onClick}
            aria-pressed={selected}
        >
            {icon && (
                <span className="ds-list-row-icon" aria-hidden>
                    {icon}
                </span>
            )}
            <span className="ds-list-row-label">{label}</span>
            {trailing && <span style={{ marginLeft: "auto" }}>{trailing}</span>}
        </button>
    )
}

// Example usage
ListRow.Example = function ListRowExample() {
    const [selected, setSelected] = useState<number | null>(0)

    const items = [
        { id: 0, icon: "C", label: "Primary Color", badge: "12 uses" },
        { id: 1, icon: "C", label: "Background", badge: "8 uses" },
        { id: 2, icon: "T", label: "Heading 1", badge: "4 uses" },
        { id: 3, icon: "T", label: "Body Text", badge: "24 uses" },
    ]

    return (
        <div style={{ width: "100%", maxWidth: 400, border: "1px solid var(--framer-color-divider)", borderRadius: 10, padding: 8 }}>
            {items.map((item) => (
                <ListRow
                    key={item.id}
                    icon={item.icon}
                    label={item.label}
                    trailing={
                        <span className="ds-badge" style={{ fontSize: 10 }}>
                            {item.badge}
                        </span>
                    }
                    selected={selected === item.id}
                    onClick={() => setSelected(item.id)}
                />
            ))}
        </div>
    )
}

import { useState } from "react"

