import * as React from 'react'
import {Jumbotron} from './components/jumbotron'
import {MovieList} from './components/movie-list'
import {ListActors} from './components/actor-list'

function Home() {
  return (
    <div className="bg-neutral-900">
      <Jumbotron />
      <MovieList />
      <ListActors />
    </div>
  )
}

export {Home}
