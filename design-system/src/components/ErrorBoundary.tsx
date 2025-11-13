/**
 * Error Boundary Component
 * ============================================================================
 * React error boundary to catch and display runtime errors gracefully.
 * 
 * FEATURES:
 * - Catches JavaScript errors in child components
 * - Displays friendly error message
 * - Reset button to recover
 * - Logs error details to console
 * 
 * USAGE:
 * ```tsx
 * <ErrorBoundary>
 *   <YourApp />
 * </ErrorBoundary>
 * ```
 */

import React from "react"

interface ErrorBoundaryProps {
    children: React.ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
    error: Error | null
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false, error: null }
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error("Design System Error:", error, errorInfo)
    }

    handleReset = () => {
        this.setState({ hasError: false, error: null })
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: 24, textAlign: "center" }}>
                    <div className="ds-warning" style={{ textAlign: "left", marginBottom: 16 }}>
                        <div className="ds-warning-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                                <path d="M12 2L2 22h20L12 2zm-1 8h2v6h-2v-6zm1 8a1 1 0 100 2 1 1 0 000-2z"/>
                            </svg>
                        </div>
                        <div className="ds-warning-content">
                            <div className="ds-warning-title">Something went wrong</div>
                            <div className="ds-warning-text">
                                {this.state.error?.message || "An unexpected error occurred"}
                            </div>
                        </div>
                    </div>
                    <button className="ds-button ds-button--primary" onClick={this.handleReset}>
                        Reload Component
                    </button>
                </div>
            )
        }

        return this.props.children
    }
}

// Example usage (simulated error) - separate functional component
export function ErrorBoundaryExample() {
    const [shouldError, setShouldError] = React.useState(false)

    if (shouldError) {
        throw new Error("This is a test error to demonstrate the Error Boundary")
    }

    return (
        <ErrorBoundary>
            <div style={{ display: "grid", gap: 12 }}>
                <p style={{ fontSize: 13, color: "var(--framer-color-text-secondary)", margin: 0 }}>
                    Error boundaries catch errors in child components and display a fallback UI.
                </p>
                <button 
                    className="ds-button"
                    onClick={() => setShouldError(true)}
                >
                    Trigger Example Error
                </button>
            </div>
        </ErrorBoundary>
    )
}

