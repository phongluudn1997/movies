import * as React from 'react'
import {useSelector} from 'react-redux'
import {Spinner} from 'modules/common/components/spinner'

function ActorProfile() {
  const actor = useSelector(state => state.actor.actor)

  if (!actor) {
    return <Spinner />
  }

  const imgSrc = 'https://image.tmdb.org/t/p/original/' + actor.profile_path

  return (
    <div className="w-1/3">
      <img src={imgSrc} alt="" />
    </div>
  )
}

export {ActorProfile}
