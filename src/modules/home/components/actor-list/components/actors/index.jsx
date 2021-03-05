import * as React from 'react'
import {usePopularActors} from 'modules/home/api/actors'
import {Spinner} from 'modules/common/components/spinner'
import {ActorCard} from './actor-card'

function Actors() {
  const {data: actors, isLoading} = usePopularActors()
  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="flex gap-8">
      {actors.slice(0, 5).map(actor => (
        <ActorCard key={actor.id} actor={actor} />
      ))}
    </div>
  )
}

export {Actors}
