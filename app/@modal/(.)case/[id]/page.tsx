'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { MoreHorizontalIcon } from 'lucide-react'
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

  const id = Number(params.id)

  const handleClick = () => {
    setIsOpen(false)
    router.back()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClick}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <MoreHorizontalIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-screen-xl w-4/6">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default Page
