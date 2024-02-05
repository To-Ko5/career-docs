import Footer from '@/components/original/footer'
import Header from '@/components/original/header'
import { ThemeProvider } from '@/context/theme-provider'
import { meta } from '@/data/data'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description
}

type Layout = {
  children: React.ReactNode
  modal: React.ReactNode
}

export default function RootLayout({ children, modal }: Layout) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
              {children}
              {modal}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
