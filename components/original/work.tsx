import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import Link from 'next/link'

const Work = () => {
  const work = {
    start: 2023,
    end: 2024
  }

  return (
    <section>
      <Card>
        <CardHeader>
          <div className="text-sm text-right tabular-nums text-muted-foreground sm:hidden">
            {work.start} - {work.end}
          </div>
          <div className="flex items-center justify-between gap-x-2">
            <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
              <Link className="hover:underline" href="/">
                Projects
              </Link>
            </h3>
            <div className="text-sm tabular-nums text-muted-foreground hidden sm:block">
              {work.start} - {work.end}
            </div>
          </div>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Card Content
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground">
          Card Footer
        </CardFooter>
      </Card>
    </section>
  )
}

export default Work
