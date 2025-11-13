/**
 * Slider Component (Radix UI)
 * ==============================================================================
 * A modern slider built with Radix UI primitives.
 * Left: Input field for direct value entry
 * Right: Radix slider track with filled range and draggable thumb
 * 
 * Features:
 * - Built on @radix-ui/react-slider for accessibility
 * - Equal-width input and track layout
 * - Direct number input with validation
 * - Keyboard support (Arrow keys, Home, End, Page Up/Down)
 * - Full accessibility (ARIA, screen reader support)
 * - Theme-aware styling with Framer tokens
 * 
 * Documentation: https://www.radix-ui.com/primitives/docs/components/slider
 * 
 * Usage:
 * <Slider
 *   value={0.61}
 *   min={0}
 *   max={1}
 *   step={0.01}
 *   onChange={(value) => console.log(value)}
 * />
 */

import * as RadixSlider from "@radix-ui/react-slider"
import { useState, useRef, useEffect } from "react"

interface SliderProps {
    value: number
    min?: number
    max?: number
    step?: number
    onChange?: (value: number) => void
    disabled?: boolean
    label?: string
}

export function Slider({
    value,
    min = 0,
    max = 1,
    step = 0.01,
    onChange,
    disabled = false,
    label,
}: SliderProps) {
    const [localValue, setLocalValue] = useState(value)
    const inputRef = useRef<HTMLInputElement>(null)

    // Sync with external value changes
    useEffect(() => {
        setLocalValue(value)
    }, [value])

    const handleSliderChange = (values: number[]) => {
        const newValue = values[0]
        if (newValue !== undefined) {
            setLocalValue(newValue)
            onChange?.(newValue)
        }
    }

    const handleBadgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value
        // Allow empty or partial numeric input while typing
        if (rawValue === "" || rawValue === "-" || rawValue === ".") {
            return
        }
        
        const newValue = parseFloat(rawValue)
        if (!isNaN(newValue)) {
            // Clamp value within min/max
            const clampedValue = Math.max(min, Math.min(max, newValue))
            setLocalValue(clampedValue)
            onChange?.(clampedValue)
        }
    }

    const handleBadgeBlur = () => {
        // Ensure value is within bounds on blur
        const clampedValue = Math.max(min, Math.min(max, localValue))
        setLocalValue(clampedValue)
        onChange?.(clampedValue)
    }

    const handleBadgeFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        e.target.select()
    }

    const handleBadgeKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            inputRef.current?.blur()
        }
    }

    return (
        <div className="ds-slider-component">
            {label && <label className="ds-slider-component-label">{label}</label>}
            
            <div className="ds-slider-component-container">
                {/* Left: Value badge input */}
                <input
                    ref={inputRef}
                    type="text"
                    className="ds-slider-component-badge"
                    value={localValue.toFixed(2)}
                    onChange={handleBadgeChange}
                    onFocus={handleBadgeFocus}
                    onBlur={handleBadgeBlur}
                    onKeyDown={handleBadgeKeyDown}
                    disabled={disabled}
                    aria-label={label ? `${label} value` : "Slider value"}
                />

                {/* Right: Radix UI Slider */}
                <RadixSlider.Root
                    className="ds-slider-component-root"
                    value={[localValue]}
                    onValueChange={handleSliderChange}
                    min={min}
                    max={max}
                    step={step}
                    disabled={disabled}
                    aria-label={label || "Slider"}
                >
                    <RadixSlider.Track className="ds-slider-component-track">
                        <RadixSlider.Range className="ds-slider-component-range" />
                    </RadixSlider.Track>
                    <RadixSlider.Thumb className="ds-slider-component-thumb" />
                </RadixSlider.Root>
            </div>
        </div>
    )
}

// Example for the design system showcase
Slider.Example = function SliderExample() {
    const [value1, setValue1] = useState(1)
    const [value2, setValue2] = useState(0.61)
    const [value3, setValue3] = useState(50)

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%", maxWidth: "500px" }}>
            <Slider
                label="Opacity"
                value={value1}
                min={0}
                max={1}
                step={0.01}
                onChange={setValue1}
            />

            <Slider
                label="Scale"
                value={value2}
                min={0}
                max={2}
                step={0.01}
                onChange={setValue2}
            />

            <Slider
                label="Progress"
                value={value3}
                min={0}
                max={100}
                step={1}
                onChange={setValue3}
            />

            <Slider
                label="Disabled"
                value={0.5}
                min={0}
                max={1}
                step={0.01}
                disabled
            />
        </div>
    )
}
