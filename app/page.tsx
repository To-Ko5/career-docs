import About from '@/components/original/about'
import Date from '@/components/original/date'
import Profile from '@/components/original/profile'
import Works from '@/components/original/works'

export default function Home() {
  return (
    <main className="container max-w-4xl space-y-10">
      <div>
        <Date />
      </div>
      <div>
        <Profile />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Works />
      </div>
    </main>
  )
}
