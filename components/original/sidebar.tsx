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
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="icon">
                    <MoreHorizontalIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-screen-xl w-4/6">
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default Sidebar
