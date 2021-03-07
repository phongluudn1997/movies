import * as React from 'react'
import {useSelector} from 'react-redux'
import {Spinner} from 'modules/common/components/spinner'

const getImgSrc = path => {
  return 'https://image.tmdb.org/t/p/original/' + path
}

function ActorMovies() {
  const actor = useSelector(state => state.actor.actor)
  if (!actor) {
    return <Spinner />
  }
  return (
    <div className="flex flex-1 gap-4 self-end">
      {actor.known_for.map(movie => {
        return (
          <div className="flex-1">
            <img
              src={getImgSrc(movie.poster_path)}
              alt=""
              key={movie.id}
              className="object-cover"
            />
          </div>
        )
      })}
    </div>
  )
}

export {ActorMovies}
