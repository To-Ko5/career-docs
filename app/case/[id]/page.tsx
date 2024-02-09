import Date from '@/components/original/date'
import Work from '@/components/original/work'
import { Button } from '@/components/ui/button'
import { site, works } from '@/data/data'
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const CasePage = ({ params }: { params: { id: string } }) => {
  const paramsId = Number(params.id)
  const work = works.find((work) => {
    if (work.case === paramsId) {
      return work
    }
  })
  if (!work) {
    return notFound()
  }
  return (
    <main className="container max-w-4xl pb-16 space-y-10">
      <div>
        <Date />
      </div>
      <div>
        <Work work={work} />
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
