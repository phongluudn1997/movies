import * as React from 'react'
import {FaStar} from 'react-icons/fa'

function Rating({stars, reviews}) {
  return (
    <div className="flex gap-4 align-baseline">
      <div className="flex gap-2">
        {Array.from({length: stars}).map((_, i) => {
          return <FaStar key={i} color="orange" />
        })}
      </div>
      <span>{reviews} reviews</span>
    </div>
  )
}

export {Rating}
