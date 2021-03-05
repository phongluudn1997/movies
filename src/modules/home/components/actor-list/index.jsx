import * as React from 'react'
import {Header} from './components/header'
import {Actors} from './components/actors'

function ListActors() {
  return (
    <div className="p-24">
      <Header />
      <Actors />
    </div>
  )
}

export {ListActors}
