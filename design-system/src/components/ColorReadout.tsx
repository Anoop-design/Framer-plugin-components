/**
 * ColorReadout Component
 * ==============================================================================
 * A read-only color display showing swatch, hex code, and alpha percentage.
 * Extracted from style-checker's LayerInspector component.
 * 
 * Features:
 * - Color swatch circle with the actual color
 * - Hex code display (without # prefix)
 * - Optional alpha percentage display
 * - Compact, inline layout
 * - Theme-aware styling with Framer tokens
 * 
 * Usage:
 * <ColorReadout color="#FF5733" />
 * <ColorReadout color="#FF5733AA" />  // With alpha
 * <ColorReadout color="rgb(255, 87, 51)" />
 * <ColorReadout color="rgba(255, 87, 51, 0.5)" />
 */

interface ColorReadoutProps {
    color: string
    label?: string
}

export function ColorReadout({ color, label }: ColorReadoutProps) {
    // Parse color to extract hex and alpha
    const parseColor = (colorString: string): { hex: string; alpha: string | null; displayColor: string } => {
        const str = colorString.trim()
        
        // Handle hex colors
        if (str.startsWith('#')) {
            if (str.length === 9) {
                // #RRGGBBAA
                const hexPart = str.slice(1, 7)
                const alphaPart = str.slice(7, 9)
                const alphaValue = parseInt(alphaPart, 16)
                const percentage = Math.round((alphaValue / 255) * 100)
                return {
                    hex: hexPart,
                    alpha: `${percentage} %`,
                    displayColor: str
                }
            } else if (str.length === 7) {
                // #RRGGBB
                return {
                    hex: str.slice(1),
                    alpha: '100 %',
                    displayColor: str
                }
            } else if (str.length === 4) {
                // #RGB (shorthand)
                return {
                    hex: str.slice(1),
                    alpha: '100 %',
                    displayColor: str
                }
            }
        }
        
        // Handle rgb/rgba
        const rgbMatch = str.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(\d*\.?\d+))?\s*\)$/i)
        if (rgbMatch) {
            const r = Math.max(0, Math.min(255, Number(rgbMatch[1])))
            const g = Math.max(0, Math.min(255, Number(rgbMatch[2])))
            const b = Math.max(0, Math.min(255, Number(rgbMatch[3])))
            const a = rgbMatch[4] != null ? Math.max(0, Math.min(1, Number(rgbMatch[4]))) : 1
            
            const toHex = (n: number) => n.toString(16).padStart(2, '0')
            const hexValue = `${toHex(r)}${toHex(g)}${toHex(b)}`
            const percentage = Math.round(a * 100)
            
            return {
                hex: hexValue,
                alpha: `${percentage} %`,
                displayColor: `rgba(${r}, ${g}, ${b}, ${a})`
            }
        }
        
        // Fallback for unknown formats
        return {
            hex: str,
            alpha: null,
            displayColor: str
        }
    }

    const { hex, alpha, displayColor } = parseColor(color)

    return (
        <div className="ds-color-readout-container">
            {label && <label className="ds-color-readout-label">{label}</label>}
            <div className="ds-color-readout">
                <span 
                    className="ds-color-readout__swatch" 
                    aria-hidden 
                    style={{ background: displayColor }} 
                />
                <code className="ds-color-readout__value">{hex}</code>
                {alpha && (
                    <>
                        <span className="ds-color-readout__divider" aria-hidden />
                        <span className="ds-color-readout__alpha">{alpha}</span>
                    </>
                )}
            </div>
        </div>
    )
}

// Example for the design system showcase
ColorReadout.Example = function ColorReadoutExample() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%", maxWidth: "500px" }}>
            <ColorReadout 
                label="Primary Color"
                color="#3B82F6" 
            />
            
            <ColorReadout 
                label="With Alpha"
                color="#FF5733AA" 
            />
            
            <ColorReadout 
                label="From RGB"
                color="rgb(59, 130, 246)" 
            />
            
            <ColorReadout 
                label="From RGBA"
                color="rgba(255, 87, 51, 0.67)" 
            />
            
            <ColorReadout 
                label="Success Green"
                color="#10B981" 
            />
            
            <ColorReadout 
                label="Warning Orange"
                color="#F59E0B" 
            />
            
            <ColorReadout 
                label="Danger Red (50%)"
                color="#EF444480" 
            />
        </div>
    )
}

