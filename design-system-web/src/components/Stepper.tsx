/**
 * Stepper Component
 * ==============================================================================
 * A number input with increment/decrement buttons.
 * Left: Input field for direct value entry
 * Right: Minus and Plus buttons separated by a divider
 * 
 * Features:
 * - Equal-width input and button container
 * - Direct number input with validation
 * - Increment/decrement buttons
 * - Min/max value constraints
 * - Keyboard support (Arrow Up/Down)
 * - Step increment support
 * 
 * Usage:
 * <Stepper
 *   value={100}
 *   min={0}
 *   max={1000}
 *   step={10}
 *   onChange={(value) => console.log(value)}
 * />
 */

import { useState, useRef, useEffect } from "react"

interface StepperProps {
    value: number
    min?: number
    max?: number
    step?: number
    onChange?: (value: number) => void
    disabled?: boolean
    label?: string
}

export function Stepper({
    value,
    min = 0,
    max = 100,
    step = 1,
    onChange,
    disabled = false,
    label,
}: StepperProps) {
    const [localValue, setLocalValue] = useState(value)
    const [inputValue, setInputValue] = useState(String(value))
    const inputRef = useRef<HTMLInputElement>(null)

    // Sync with external value changes
    useEffect(() => {
        setLocalValue(value)
        setInputValue(String(value))
    }, [value])

    const clampValue = (val: number) => {
        return Math.max(min, Math.min(max, val))
    }

    const updateValue = (newValue: number) => {
        const clamped = clampValue(newValue)
        setLocalValue(clamped)
        setInputValue(String(clamped))
        onChange?.(clamped)
    }

    const handleIncrement = () => {
        if (disabled) return
        updateValue(localValue + step)
    }

    const handleDecrement = () => {
        if (disabled) return
        updateValue(localValue - step)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value
        setInputValue(rawValue)

        // Allow empty string while typing
        if (rawValue === "" || rawValue === "-") {
            return
        }

        const numValue = parseFloat(rawValue)
        if (!isNaN(numValue)) {
            setLocalValue(clampValue(numValue))
        }
    }

    const handleInputBlur = () => {
        // Clamp and format on blur
        const clamped = clampValue(localValue)
        setLocalValue(clamped)
        setInputValue(String(clamped))
        onChange?.(clamped)
    }

    const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        e.target.select()
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "ArrowUp") {
            e.preventDefault()
            handleIncrement()
        } else if (e.key === "ArrowDown") {
            e.preventDefault()
            handleDecrement()
        } else if (e.key === "Enter") {
            inputRef.current?.blur()
        }
    }

    const isDecrementDisabled = disabled || localValue <= min
    const isIncrementDisabled = disabled || localValue >= max

    return (
        <div className="ds-stepper-component">
            {label && <label className="ds-stepper-component-label">{label}</label>}
            
            <div className="ds-stepper-component-container">
                {/* Left: Number input */}
                <input
                    ref={inputRef}
                    type="text"
                    className="ds-stepper-component-input"
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                    onKeyDown={handleKeyDown}
                    disabled={disabled}
                    aria-label={label ? `${label} value` : "Stepper value"}
                />

                {/* Right: Button controls */}
                <div className="ds-stepper-component-controls">
                    <button
                        type="button"
                        className="ds-stepper-component-button"
                        onClick={handleDecrement}
                        disabled={isDecrementDisabled}
                        aria-label="Decrement"
                    >
                        <svg width="12" height="2" viewBox="0 0 12 2" fill="none">
                            <path d="M0 1H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </button>

                    <div className="ds-stepper-component-divider" />

                    <button
                        type="button"
                        className="ds-stepper-component-button"
                        onClick={handleIncrement}
                        disabled={isIncrementDisabled}
                        aria-label="Increment"
                    >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

// Example for the design system showcase
Stepper.Example = function StepperExample() {
    const [value1, setValue1] = useState(1200)
    const [value2, setValue2] = useState(50)
    const [value3, setValue3] = useState(10)

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%", maxWidth: "400px" }}>
            <Stepper
                label="Progress"
                value={value1}
                min={0}
                max={2000}
                step={10}
                onChange={setValue1}
            />

            <Stepper
                label="Count"
                value={value2}
                min={0}
                max={100}
                step={1}
                onChange={setValue2}
            />

            <Stepper
                label="Volume"
                value={value3}
                min={0}
                max={20}
                step={1}
                onChange={setValue3}
            />

            <Stepper
                label="Disabled"
                value={50}
                min={0}
                max={100}
                step={5}
                disabled
            />
        </div>
    )
}

