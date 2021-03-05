import * as React from 'react'
import {Jumbotron} from './components/jumbotron'
import {MovieList} from './components/movie-list'

function Home() {
  return (
    <div className="bg-neutral-900">
      <Jumbotron />
      <MovieList />
    </div>
  )
}

export {Home}
