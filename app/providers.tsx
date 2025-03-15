'use client'

import { ThemeProvider } from 'next-themes'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from "@/components/ui/sonner"

type ProvidesProps = {
    children: React.ReactNode
}

const Providers = (props: ProvidesProps) => {
    const { children } = props

    return (
        <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            enableColorScheme
            disableTransitionOnChange
        >
            <TooltipProvider>
                {children}
                <Toaster
                    toastOptions={{
                        duration: 2500
                    }}
                    visibleToasts={5}
                    expand
                />
            </TooltipProvider>
        </ThemeProvider>
    )
}

export default Providers