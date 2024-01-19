'use client'
import React from 'react'
import ThemeButton from '@/components/original/theme-button'
import { meta } from '@/data/data'
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'

const Header = () => {
  const handleClick = () => {
    console.log('click')
  }

  return (
    <header className="mt-5">
      <div className="container max-w-4xl flex justify-between">
        <div className="flex items-center">
          <div className="mr-4">
            <Button variant="outline" size="icon" onClick={handleClick}>
              <MenuIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
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
