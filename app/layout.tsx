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

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div>{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
