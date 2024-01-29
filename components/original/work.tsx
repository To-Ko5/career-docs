import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Button } from '@/components//ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

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
            <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none mb-2">
              <Link className="hover:underline" href="/">
                Projects
              </Link>
            </h3>
            <div className="text-sm tabular-nums text-muted-foreground hidden sm:block">
              {work.start} - {work.end}
            </div>
          </div>
          <div>
            <Badge variant="outline">Frontend</Badge>
          </div>
        </CardHeader>

        <CardContent>
          <h4 className="text-sm font-semibold mb-2">使用技術</h4>
          <Badge variant="outline">Next.js</Badge>
        </CardContent>

        <CardContent>
          <h4 className="text-sm font-semibold mb-2">使用ツール</h4>
          <Badge variant="outline">Azure DevOps</Badge>
        </CardContent>

        <CardContent className="text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus repellendus cumque explicabo ea molestiae temporibus
          praesentium tempora. Dolorem esse rerum alias necessitatibus non
          earum, ducimus, expedita in molestias numquam dicta.
        </CardContent>
      </Card>
    </section>
  )
}

export default Work
