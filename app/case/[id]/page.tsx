import Date from '@/components/original/date'
import Work from '@/components/original/work'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const CasePage = () => {
  return (
    <main className="container max-w-4xl pb-16 space-y-10">
      <div>
        <Date />
      </div>
      <div>
        <Work />
      </div>
      <div>
        <Button variant="outline">
          <Link href="/">TOP</Link>
        </Button>
      </div>
    </main>
  )
}

export default CasePage
