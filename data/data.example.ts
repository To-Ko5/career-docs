export const site = {
  title: 'site description',
  description: 'site description'
}

export const date = {
  lastUpdatedAt: new Date()
}

export const profile = {
  name: 'Name',
  photo: 'http://localhost:3000/image.png',
  position: 'Engineer'
}

export const about = {
  content: 'lorem ipsum dolor sit amet consectetur adipisicing elitt totam'
}

export const works = [
  {
    case: 1,
    projects: 'case1',
    date: {
      start: 2023,
      end: 2024
    },
    positions: ['Frontend'],
    skills: ['Next.js', 'MUI'],
    tools: ['GitHub', 'AWS'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing'
  },
  {
    case: 2,
    projects: 'case2',
    date: {
      start: 2023,
      end: 2024
    },
    positions: ['Frontend'],
    skills: ['Nuxt.js', 'Vuetify'],
    tools: ['Adobe', 'Azure DevOps'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing'
  },
  {
    case: 3,
    projects: 'case3',
    date: {
      start: 2023,
      end: 2024
    },
    positions: ['Frontend'],
    skills: ['Next.js', 'Tailwind'],
    tools: ['Docker', 'Figma'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing'
  }
]
