import Date from '@/components/original/date'
import Profile from '@/components/original/profile'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="container max-w-4xl">
      <div className="mb-4">
        <Date />
      </div>
      <div>
        <Profile />
      </div>
    </main>
  )
}
