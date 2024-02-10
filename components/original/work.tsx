import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { work } from '@/types/data'
import Link from 'next/link'

type Props = {
  work: work
}

const Work = ({ work }: Props) => {
  return (
    <section>
      <Card>
        <CardHeader>
          <div className="text-sm text-right tabular-nums text-muted-foreground sm:hidden">
            {work.date.start} - {work.date.end}
          </div>
          <div className="flex items-center justify-between gap-x-2">
            <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none mb-2">
              <Link
                className="hover:underline text-xl"
                scroll={false}
                href={`/case/${work.case}`}
              >
                {work.project}
              </Link>
            </h3>
            <div className="text-sm tabular-nums text-muted-foreground hidden sm:block">
              {work.date.start} - {work.date.end}
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {work.positions.map((position, index) => {
              return (
                <Badge variant="outline" key={index}>
                  {position}
                </Badge>
              )
            })}
          </div>
        </CardHeader>

        <CardContent>
          <h4 className="text-sm font-semibold mb-2">使用技術</h4>
          <div className="flex gap-2 flex-wrap">
            {work.skills.map((skill, index) => {
              return (
                <Badge variant="outline" key={index}>
                  {skill}
                </Badge>
              )
            })}
          </div>
        </CardContent>

        <CardContent>
          <h4 className="text-sm font-semibold mb-2">使用ツール</h4>
          <div className="flex gap-2 flex-wrap">
            {work.tools.map((tool, index) => {
              return (
                <Badge variant="outline" key={index}>
                  {tool}
                </Badge>
              )
            })}
          </div>
        </CardContent>

        <CardContent className="text-sm text-muted-foreground">
          {work.description}
        </CardContent>
      </Card>
    </section>
  )
}

export default Work
