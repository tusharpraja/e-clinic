'use client'

import { ThemeProvider } from 'next-themes'

export function Providers({ children }) {
    return (
        <ThemeProvider attribute={"class"} enableSystem={true} forcedTheme={"light"} disableTransitionOnChange>
            {children}
        </ThemeProvider>
    )
}