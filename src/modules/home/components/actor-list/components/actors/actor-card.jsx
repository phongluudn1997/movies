import * as React from 'react'
import {useDispatch} from 'react-redux'
import {setActor, setActorId} from '@redux/actor/actions'

function ActorCard({actor}) {
  const imgSrc = 'https://image.tmdb.org/t/p/original/' + actor.profile_path
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setActor(actor))
    dispatch(setActorId(actor.id))
  }
  return (
    <div className="rounded-lg bg-neutral-700 flex-1" onClick={handleClick}>
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
