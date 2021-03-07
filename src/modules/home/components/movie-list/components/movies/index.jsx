import * as React from 'react'
import {useTrendingMovies} from 'modules/home/api/movies'
import {Spinner} from 'modules/common/components/spinner'
import {MovieCard} from './movie-card'

function Movies() {
  const {data, isLoading} = useTrendingMovies()
  console.log(data)

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="flex gap-10">
      {data.results?.slice(0, 4).map((e, i) => {
        return <MovieCard data={e} key={e.id} />
      })}
    </div>
  )
}

export {Movies}
