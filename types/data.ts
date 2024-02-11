import { LucideIcon } from 'lucide-react'

export type work = {
  case: number
  project: string
  date: {
    start: string
    end: string
  }
  positions: string[]
  skills: string[]
  tools: string[]
  description: string
}

export type url_link = {
  icon: LucideIcon
  href: string
}
