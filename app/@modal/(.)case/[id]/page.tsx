'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger
} from '@/components/ui/dialog'
import { works } from '@/data/data'
import { MoreHorizontalIcon } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ReactNode, useState } from 'react'

const Page = ({
  params,
  children
}: {
  params: { id: number }
  children: ReactNode
}) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(true)

  const paramsId = Number(params.id)
  const work = works.find((work) => {
    if (work.case === paramsId) {
      return work
    }
  })

  const handleClick = () => {
    setIsOpen(false)
    router.back()
  }

  if (work === undefined) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClick}>
        <DialogTrigger asChild>
          <Button variant="outline" size="icon">
            <MoreHorizontalIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-screen-xl w-4/6">
          データがありません
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClick}>
      <DialogContent className="max-w-screen-xl w-4/6 max-h-[80%] overflow-y-auto">
        <DialogHeader className="mt-4">
          <div className="text-sm text-right tabular-nums text-muted-foreground sm:hidden">
            {work.date.start} - {work.date.end}
          </div>
          <div className="flex items-center justify-between gap-x-2">
            <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none mb-2 text-xl">
              {work.projects}
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
        </DialogHeader>

        <div>
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
        </div>

        <div>
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
        </div>

        <DialogDescription className="text-sm text-muted-foreground">
          {work.description}
        </DialogDescription>

        <DialogFooter className="sm:justify-start">
          <DialogTrigger asChild>
            <Button variant="outline">Close</Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default Page
