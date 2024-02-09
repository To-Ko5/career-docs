import { Button } from '@/components/ui/button'
import Link from 'next/link'

const NotFound = () => {
  return (
    <main className="container max-w-4xl">
      <div className="text-center mt-32">データがありません</div>
      <div className="mt-32">
        <Button variant="outline">
          <Link href="/">TOP</Link>
        </Button>
      </div>
    </main>
  )
}

export default NotFound
