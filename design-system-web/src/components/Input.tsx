/**
 * Input Component
 * ============================================================================
 * Text input field with optional icon and search variant.
 * 
 * FEATURES:
 * - Standard text input with focus states
 * - Optional left icon (search, etc.)
 * - Placeholder text
 * - Disabled state
 * - Full keyboard accessibility
 * 
 * USAGE:
 * ```tsx
 * <Input placeholder="Enter text..." />
 * <Input withIcon placeholder="Search..." />
 * ```
 */

import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    withIcon?: boolean
}

export function Input({ withIcon = false, className = "", ...props }: InputProps) {
    if (withIcon) {
        return (
            <div className="ds-input-wrap">
                <span className="ds-input-icon" aria-hidden>
                    <svg viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M16 16l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                </span>
                <input className={`ds-input ds-input--with-icon ${className}`.trim()} {...props} />
            </div>
        )
    }

    return <input className={`ds-input ${className}`.trim()} {...props} />
}

// Example usage
Input.Example = function InputExample() {
    return (
        <div style={{ display: "grid", gap: 12, width: "100%", maxWidth: 300 }}>
            <Input placeholder="Default input..." />
            <Input withIcon placeholder="Search..." />
            <Input placeholder="Disabled..." disabled />
        </div>
    )
}

