import Date from '@/components/original/date'
import ThemeButton from '@/components/original/theme-button'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="container max-w-4xl">
      <div>
        <Date />
      </div>
    </main>
  )
}
