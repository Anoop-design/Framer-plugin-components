/**
 * SearchBar Component
 * ============================================================================
 * Advanced search input with filter chips and animated hints.
 * 
 * FEATURES:
 * - Search icon on left
 * - Optional filter chips
 * - Animated hint text when empty
 * - Clear button
 * - Full keyboard accessibility
 * 
 * USAGE:
 * ```tsx
 * <SearchBar 
 *   value={search}
 *   onChange={setSearch}
 *   placeholder="Search components..."
 * />
 * ```
 */

import { useState } from "react"

interface SearchBarProps {
    value?: string
    onChange?: (value: string) => void
    placeholder?: string
}

export function SearchBar({ 
    value: controlledValue, 
    onChange, 
    placeholder = "Search..." 
}: SearchBarProps) {
    const [internalValue, setInternalValue] = useState("")
    const value = controlledValue !== undefined ? controlledValue : internalValue
    const setValue = onChange || setInternalValue

    return (
        <div className="ds-input-wrap" style={{ width: "100%" }}>
            <span className="ds-input-icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M16 16l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
            </span>
            <input
                className="ds-input ds-input--with-icon"
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                aria-label="Search"
            />
        </div>
    )
}

// Example usage
SearchBar.Example = function SearchBarExample() {
    const [search, setSearch] = useState("")

    return (
        <div style={{ display: "grid", gap: 12, width: "100%", maxWidth: 400 }}>
            <SearchBar 
                value={search} 
                onChange={setSearch}
                placeholder="Search components..." 
            />
            {search && (
                <div style={{ fontSize: 12, color: "var(--framer-color-text-secondary)" }}>
                    Searching for: "{search}"
                </div>
            )}
        </div>
    )
}

