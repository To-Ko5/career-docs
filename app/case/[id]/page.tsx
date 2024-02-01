import Date from '@/components/original/date'
import Work from '@/components/original/work'
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
    </main>
  )
}

export default CasePage
