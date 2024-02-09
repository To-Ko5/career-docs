import { profile } from '@/data/data'
import React from 'react'

const Profile = () => {
  return (
    <section>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="max-w-[100px]">
          <img src="https://placehold.jp/500x500.png" />
        </div>
        <div>
          <h1 className="text-2xl mb-2 font-bold">{profile.name}</h1>
          <p className="text-muted-foreground">{profile.position}</p>
        </div>
      </div>
    </section>
  )
}

export default Profile
