'use client'
import { MoonIcon, SunIcon } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'

const ThemeButton = () => {
  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    console.log(theme)
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }
  return (
    <>
      <Button variant="outline" size="icon" onClick={handleClick}>
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  )
}

export default ThemeButton
