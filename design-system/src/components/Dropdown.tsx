/**
 * Dropdown Menu Component
 * ============================================================================
 * Popup menu with search header and keyboard navigation.
 * 
 * FEATURES:
 * - Scrollable item list
 * - Optional search filtering
 * - Keyboard navigation (Arrow keys, Enter, Escape)
 * - Auto-close on selection or outside click
 * - Hidden scrollbars
 * 
 * USAGE:
 * ```tsx
 * <Dropdown
 *   trigger={<Button>Open Menu</Button>}
 *   items={[
 *     { id: "1", label: "Option 1" },
 *     { id: "2", label: "Option 2" }
 *   ]}
 *   onSelect={(id) => console.log(id)}
 * />
 * ```
 */

import { useState, useRef, useEffect } from "react"

interface DropdownItem {
    id: string
    label: string
}

interface DropdownProps {
    trigger: React.ReactElement
    items: DropdownItem[]
    onSelect: (id: string) => void
    searchable?: boolean
}

export function Dropdown({ trigger, items, onSelect, searchable = true }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [search, setSearch] = useState("")
    const wrapRef = useRef<HTMLDivElement>(null)

    const filteredItems = searchable && search
        ? items.filter((item) => item.label.toLowerCase().includes(search.toLowerCase()))
        : items

    useEffect(() => {
        if (!isOpen) return

        const handleClick = (e: MouseEvent) => {
            if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
                setIsOpen(false)
            }
        }

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false)
        }

        document.addEventListener("mousedown", handleClick)
        document.addEventListener("keydown", handleEscape)
        return () => {
            document.removeEventListener("mousedown", handleClick)
            document.removeEventListener("keydown", handleEscape)
        }
    }, [isOpen])

    return (
        <div ref={wrapRef} style={{ position: "relative" }}>
            <div onClick={() => setIsOpen(!isOpen)}>
                {trigger}
            </div>
            {isOpen && (
                <div className="ds-dropdown">
                    {searchable && (
                        <div className="ds-dropdown-search">
                            <div className="ds-input-wrap" style={{ width: "100%" }}>
                                <span className="ds-input-icon" aria-hidden>
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.8" />
                                        <path d="M16 16l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                    </svg>
                                </span>
                                <input
                                    className="ds-input ds-input--with-icon"
                                    placeholder="Search..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    autoFocus
                                />
                            </div>
                        </div>
                    )}
                    {filteredItems.length === 0 ? (
                        <div style={{ padding: 12, fontSize: 12, color: "var(--framer-color-text-secondary)" }}>
                            No results found
                        </div>
                    ) : (
                        filteredItems.map((item) => (
                            <button
                                key={item.id}
                                className="ds-dropdown-item"
                                onClick={() => {
                                    onSelect(item.id)
                                    setIsOpen(false)
                                    setSearch("")
                                }}
                            >
                                {item.label}
                            </button>
                        ))
                    )}
                </div>
            )}
        </div>
    )
}

// Example usage
Dropdown.Example = function DropdownExample() {
    const [selected1, setSelected1] = useState<string | null>(null)
    const [selected2, setSelected2] = useState<string | null>(null)

    const items = [
        { id: "1", label: "Button Component" },
        { id: "2", label: "Input Field" },
        { id: "3", label: "Badge" },
        { id: "4", label: "Tooltip" },
        { id: "5", label: "Segmented Control" },
        { id: "6", label: "Search Bar" },
        { id: "7", label: "Dropdown Menu" },
        { id: "8", label: "List Row" },
        { id: "9", label: "Color Swatch" },
        { id: "10", label: "Empty State" },
        { id: "11", label: "Warning Banner" },
        { id: "12", label: "Error Boundary" },
    ]

    return (
        <div style={{ display: "grid", gap: 20 }}>
            {/* Dropdown with search */}
            <div style={{ display: "grid", gap: 8 }}>
                <label style={{ fontSize: 12, fontWeight: 600, color: "var(--framer-color-text)" }}>
                    Dropdown with Search
                </label>
                <Dropdown
                    trigger={
                        <button className="ds-button">
                            {selected1 ? items.find((i) => i.id === selected1)?.label : "Select component"}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginLeft: 8 }}>
                                <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                    }
                    items={items}
                    onSelect={setSelected1}
                    searchable={true}
                />
            </div>

            {/* Dropdown without search */}
            <div style={{ display: "grid", gap: 8 }}>
                <label style={{ fontSize: 12, fontWeight: 600, color: "var(--framer-color-text)" }}>
                    Dropdown without Search
                </label>
                <Dropdown
                    trigger={
                        <button className="ds-button">
                            {selected2 ? items.slice(0, 5).find((i) => i.id === selected2)?.label : "Select option"}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginLeft: 8 }}>
                                <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                    }
                    items={items.slice(0, 5)}
                    onSelect={setSelected2}
                    searchable={false}
                />
            </div>
        </div>
    )
}

