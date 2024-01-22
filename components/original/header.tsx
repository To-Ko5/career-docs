'use client'
import React, { useState } from 'react'
import ThemeButton from '@/components/original/theme-button'
import { meta } from '@/data/data'
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'
import Sidebar from './sidebar'

const Header = () => {
  const [isSidebar, setIsSidebar] = useState(false)

  const toggleSidebar = () => {
    setIsSidebar(!isSidebar)
  }

  return (
    <header className="mt-5 mb-4">
      <div className="container max-w-4xl flex justify-between">
        <div className="flex items-center">
          <div className="mr-4">
            <Sidebar />
          </div>
          <div className="flex-1">
            <p>{meta.title}</p>
          </div>
        </div>

        <ThemeButton />
      </div>
    </header>
  )
}

export default Header
