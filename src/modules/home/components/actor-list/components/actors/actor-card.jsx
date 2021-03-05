import * as React from 'react'

function ActorCard({actor}) {
  const imgSrc = 'https://image.tmdb.org/t/p/original/' + actor.profile_path
  return (
    <div className="rounded-lg bg-neutral-700 flex-1">
      <img
        src={imgSrc}
        alt=""
        className="w-full max-h-96 rounded-lg object-cover"
      />
      <p className="text-white font-bold m-4">{actor.name}</p>
    </div>
  )
}

export {ActorCard}
