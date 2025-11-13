/**
 * Segmented Control Component
 * ============================================================================
 * Tab control with animated sliding pill indicator.
 * 
 * FEATURES:
 * - Equal-width segments
 * - Smooth animated pill transition
 * - Keyboard navigation (Arrow keys, Home, End)
 * - Optional count badges
 * - Theme-aware colors
 * 
 * USAGE:
 * ```tsx
 * <Segmented
 *   options={[
 *     { id: "all", label: "All", count: 42 },
 *     { id: "active", label: "Active" }
 *   ]}
 *   value="all"
 *   onChange={(id) => console.log(id)}
 * />
 * ```
 */

import { KeyboardEvent } from "react"

interface SegmentedOption {
    id: string
    label: string
    count?: number
}

interface SegmentedProps {
    options: SegmentedOption[]
    value: string
    onChange: (id: string) => void
}

export function Segmented({ options, value, onChange }: SegmentedProps) {
    const activeIndex = Math.max(0, options.findIndex((o) => o.id === value))
    const percent = 100 / Math.max(1, options.length)
    const leftPercent = (activeIndex * percent).toFixed(2)
    
    // Account for 2px padding on each side of the pill
    const paddingOffset = 2
    const pillWidth = `calc(${percent}% - ${paddingOffset * 2}px)`
    const pillLeft = `calc(${leftPercent}% + ${paddingOffset}px)`

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        const idx = options.findIndex((o) => o.id === value)
        
        if (e.key === "ArrowRight") {
            e.preventDefault()
            const next = options[(idx + 1) % options.length]
            onChange(next.id)
        } else if (e.key === "ArrowLeft") {
            e.preventDefault()
            const prev = options[(idx - 1 + options.length) % options.length]
            onChange(prev.id)
        } else if (e.key === "Home") {
            e.preventDefault()
            onChange(options[0].id)
        } else if (e.key === "End") {
            e.preventDefault()
            onChange(options[options.length - 1].id)
        }
    }

    return (
        <div className="ds-segmented" style={{ width: "100%" }}>
            <div 
                className="ds-segmented-rail" 
                role="tablist" 
                aria-label="View options"
                tabIndex={0}
                onKeyDown={handleKeyDown}
            >
                <div 
                    className="ds-segmented-pill-container"
                    aria-hidden
                    style={{ 
                        position: "absolute",
                        inset: "0px",
                        pointerEvents: "none"
                    }}
                >
                    <div 
                        className="ds-segmented-pill" 
                        style={{ 
                            width: pillWidth, 
                            left: pillLeft
                        }} 
                    />
                </div>
                {options.map((option) => {
                    const active = value === option.id
                    return (
                        <button
                            key={option.id}
                            role="tab"
                            aria-selected={active}
                            tabIndex={active ? 0 : -1}
                            className={`ds-segmented-tab ${active ? "is-active" : ""}`}
                            onClick={() => onChange(option.id)}
                        >
                            <span className="ds-segmented-tab-label">
                                {option.label}
                                {typeof option.count === "number" && (
                                    <span className="ds-badge ds-badge--count" style={{ marginLeft: 6 }}>
                                        {option.count}
                                    </span>
                                )}
                            </span>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

// Example usage
Segmented.Example = function SegmentedExample() {
    const [value, setValue] = useState("colors")

    return (
        <div style={{ display: "grid", gap: 16 }}>
            <Segmented
                options={[
                    { id: "colors", label: "Colors" },
                    { id: "texts", label: "Texts" },
                    { id: "layers", label: "Layers" },
                ]}
                value={value}
                onChange={setValue}
            />
            <div style={{ fontSize: 12, color: "var(--framer-color-text-secondary)" }}>
                Selected: {value}
            </div>
        </div>
    )
}

// Import useState for the example
import { useState } from "react"

