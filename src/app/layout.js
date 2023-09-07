
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { Navbar } from "@/components"
import { Providers } from './provider'

export const metadata = {
  title: 'E Clinic',
  description: 'E-Clinic Website',
}


export default function RootLayout({ children }) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} `}>
        <Providers>
            <Navbar/>
            <div className={'min-h-[calc(100vh-23rem)] container mx-auto'}>
                {children}
            </div>
        </Providers>
      </body>
    </html>
  )
}
