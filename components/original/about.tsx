import { about } from '@/data/data'

const About = () => {
  return (
    <section>
      <h2 className="text-xl font-bold mb-2">About</h2>
      <p className="whitespace-pre-line text-muted-foreground">
        {about.content}
      </p>
    </section>
  )
}

export default About
