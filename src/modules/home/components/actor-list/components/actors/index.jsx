import * as React from 'react'
import {usePopularActors, useActors} from 'modules/home/api/actors'
import {Spinner} from 'modules/common/components/spinner'
import {ActorCard} from './actor-card'
import {useDispatch, useSelector} from 'react-redux'
import {setActor} from '@redux/actor/actions'

function Actors() {
  const dispatch = useDispatch()
  const {search} = useSelector(state => state.actor)
  console.log('RENDER', search)
  const {data: actors, isLoading, isSuccess} = useActors(search)
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
