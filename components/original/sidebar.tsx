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
          <SheetDescription className="flex gap-x-2">
            <p className="line-clamp-2 mb-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
              possimus assumenda at consectetur natus, dolore itaque error
              officiis deserunt ab unde excepturi beatae ipsam cum quod repellat
              reprehenderit. At, quibusdam.
            </p>
            <div className="text-right">
              <Button variant="outline" size="icon">
                <MoreHorizontalIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
              </Button>
            </div>
          </SheetDescription>
        </SheetHeader>
        <SheetHeader>
          <SheetTitle>Case 2</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default Sidebar
