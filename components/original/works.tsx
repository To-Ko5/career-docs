import React from 'react'
import Work from './work'

const Works = () => {
  const List = [...Array(5)]
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Works</h2>

      <div className="space-y-8">
        {List.map((index) => {
          return <Work key={index} />
        })}
      </div>
    </section>
  )
}

export default Works
