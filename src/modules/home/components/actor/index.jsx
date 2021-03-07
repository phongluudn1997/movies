import * as React from 'react'
import {ActorProfile} from './components/profile'
import {ActorMovies} from './components/actor-movies'

function Actor() {
  return (
    <div className="flex p-24 gap-8 flex-nowrap">
      <ActorProfile />
      <ActorMovies />
    </div>
  )
}

export {Actor}
