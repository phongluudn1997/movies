import * as React from 'react'
import {usePopularActors} from 'modules/home/api/actors'
import {Spinner} from 'modules/common/components/spinner'
import {ActorCard} from './actor-card'
import {useDispatch} from 'react-redux'
import {setActor} from '@redux/actor/actions'

function Actors() {
  const dispatch = useDispatch()
  const {data: actors, isLoading, isSuccess} = usePopularActors()
  React.useEffect(() => {
    if (isSuccess) {
      dispatch(setActor(actors[0]))
    }
  }, [actors, dispatch, isSuccess])

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
