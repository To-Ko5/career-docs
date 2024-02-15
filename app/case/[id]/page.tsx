import Date from '@/components/original/date'
import Work from '@/components/original/work'
import WorkPagination from '@/components/original/work-pagination'
import { Button } from '@/components/ui/button'
import { profile, site, works } from '@/data/data'
import { work } from '@/types/data'
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Props = {
  params: { [key: string]: string }
}

const setWork = (works: work[], paramsId: number) => {
  return works.find((work) => {
    if (work.case === paramsId) {
      return work
    }
  })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const paramsId = Number(params.id)
  const work = setWork(works, paramsId)
  if (work) {
    return {
      title: `${work.project} | ${site.title}`,
      description: `${profile.name} | ${work.project}`
    }
  } else {
    return {
      title: site.title,
      description: site.description
    }
  }
}

const CasePage = ({ params }: Props) => {
  const paramsId = Number(params.id)
  const work = setWork(works, paramsId)
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
        <WorkPagination />
      </div>
      <div>
        <Button variant="outline" asChild>
          <Link href="/">TOP</Link>
        </Button>
      </div>
    </main>
  )
}

export default CasePage
