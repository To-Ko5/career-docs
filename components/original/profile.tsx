import React from 'react'

const Profile = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="max-w-[100px]">
        <img src="https://placehold.jp/500x500.png" />
      </div>
      <div>
        <h1>名前</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          excepturi quis, ducimus delectus cum magni, dolor perferendis eum
          nesciunt eveniet, saepe deleniti fugit soluta facilis! Cum perferendis
          veritatis asperiores temporibus!
        </p>
      </div>
    </div>
  )
}

export default Profile
