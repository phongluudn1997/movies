import * as React from 'react'
import {Jumbotron} from './components/jumbotron'
import {MovieList} from './components/movie-list'
import {ListActors} from './components/actor-list'
import {Actor} from './components/actor'

function Home() {
  return (
    <div className="bg-neutral-900">
      <Jumbotron />
      <MovieList />
      <ListActors />
      <Actor />
    </div>
  )
}

export {Home}
