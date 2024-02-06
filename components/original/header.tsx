'use client'
import ThemeButton from '@/components/original/theme-button'
import { site } from '@/data/data'
import Link from 'next/link'
import Sidebar from './sidebar'

const Header = () => {
  return (
    <header className="mt-5 mb-4">
      <div className="container max-w-4xl flex justify-between">
        <div className="flex items-center">
          <div className="mr-4">
            <Sidebar />
          </div>
          <div className="flex-1">
            <div>
              <Link href="/">{site.title}</Link>
            </div>
          </div>
        </div>

        <ThemeButton />
      </div>
    </header>
  )
}

export default Header
