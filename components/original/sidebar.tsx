'use client'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { MenuIcon, MoreHorizontalIcon } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <MenuIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'}>
        <SheetHeader className="mb-4">
          <SheetTitle>Case 1</SheetTitle>
          <div className="flex gap-x-2">
            <SheetDescription className="line-clamp-2 mb-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
              possimus assumenda at consectetur natus, dolore itaque error
              officiis deserunt ab unde excepturi beatae ipsam cum quod repellat
              reprehenderit. At, quibusdam.
            </SheetDescription>
            <div className="text-right">
              <Button variant="outline" size="icon" asChild>
                <Link href={`/case/1`}>
                  <MoreHorizontalIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                </Link>
              </Button>
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default Sidebar
