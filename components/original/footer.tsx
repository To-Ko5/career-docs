import { site } from '@/data/data'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="p-3 border-t">
      <p className="text-center text-sm text-muted-foreground">
        <Link href="/">{site.title}</Link>
      </p>
    </footer>
  )
}

export default Footer
