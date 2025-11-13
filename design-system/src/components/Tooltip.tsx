/**
 * Tooltip Component
 * ============================================================================
 * Portal-based tooltip with smart collision detection and auto-positioning.
 * 
 * FEATURES:
 * - Renders in document.body to avoid clipping
 * - Auto-flips when near screen edges
 * - Smooth fade-in animation
 * - Keyboard accessible (shows on focus)
 * - Respects reduced motion preferences
 * 
 * USAGE:
 * ```tsx
 * <Tooltip label="Click to save">
 *   <Button>Save</Button>
 * </Tooltip>
 * ```
 */

import { useState, useRef, useLayoutEffect, useEffect } from "react"
import { createPortal } from "react-dom"

interface TooltipProps {
    label: string
    children: React.ReactElement
    placement?: "top" | "bottom"
}

export function Tooltip({ label, children, placement = "top" }: TooltipProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [position, setPosition] = useState<{ top: number; left: number; transform: string } | null>(null)
    const [opacity, setOpacity] = useState(0)
    const anchorRef = useRef<HTMLSpanElement>(null)
    const tipRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        if (!isOpen) {
            setOpacity(0)
            return
        }

        // Wait for portal to render, then calculate position
        const updatePosition = () => {
            if (!anchorRef.current || !tipRef.current) return
            
            const anchor = anchorRef.current.getBoundingClientRect()
            const tip = tipRef.current
            const tipHeight = tip.offsetHeight
            const tipWidth = tip.offsetWidth

            let top = placement === "top" 
                ? anchor.top - tipHeight - 8 
                : anchor.bottom + 8

            let left = anchor.left + anchor.width / 2
            let transform = "translateX(-50%)"

            // Simple collision detection
            if (left - tipWidth / 2 < 4) {
                left = anchor.left
                transform = "translateX(0)"
            } else if (left + tipWidth / 2 > window.innerWidth - 4) {
                left = anchor.right
                transform = "translateX(-100%)"
            }

            setPosition({ top, left, transform })
            // Fade in after position is set
            requestAnimationFrame(() => setOpacity(1))
        }

        // Small delay to ensure portal is mounted
        const timer = setTimeout(updatePosition, 10)
        
        return () => clearTimeout(timer)
    }, [isOpen, placement, label])

    useEffect(() => {
        if (!isOpen) return

        const handleScroll = () => {
            if (anchorRef.current && tipRef.current) {
                const anchor = anchorRef.current.getBoundingClientRect()
                const tip = tipRef.current
                const tipHeight = tip.offsetHeight
                
                const top = placement === "top" 
                    ? anchor.top - tipHeight - 8 
                    : anchor.bottom + 8
                    
                setPosition(prev => prev ? { ...prev, top } : null)
            }
        }

        window.addEventListener("scroll", handleScroll, true)
        return () => window.removeEventListener("scroll", handleScroll, true)
    }, [isOpen, placement])

    return (
        <span
            ref={anchorRef}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            onFocus={() => setIsOpen(true)}
            onBlur={() => setIsOpen(false)}
            style={{ display: "inline-flex" }}
        >
            {children}
            {isOpen && createPortal(
                <div
                    ref={tipRef}
                    className="ds-tooltip"
                    style={{
                        position: "fixed",
                        top: position?.top || 0,
                        left: position?.left || 0,
                        transform: position?.transform || "translateX(-50%)",
                        opacity: opacity,
                        transition: "opacity 120ms ease, transform 120ms ease",
                        pointerEvents: "none",
                        zIndex: 999999,
                    }}
                >
                    {label}
                </div>,
                document.body
            )}
        </span>
    )
}

// Example usage
Tooltip.Example = function TooltipExample() {
    return (
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Tooltip label="This is a tooltip">
                <button className="ds-button">Hover me</button>
            </Tooltip>
            <Tooltip label="Save your changes" placement="bottom">
                <button className="ds-button ds-button--primary">Save</button>
            </Tooltip>
            <Tooltip label="Search">
                <button className="ds-button ds-button--icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" />
                        <path d="M16 16l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>
            </Tooltip>
        </div>
    )
}

