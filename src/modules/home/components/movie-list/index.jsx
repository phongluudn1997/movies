import * as React from 'react'
import {Header} from './components/header'
import {Movies} from './components/movies'

function MovieList() {
  return (
    <div className="p-24">
      <Header />
      <Movies />
    </div>
  )
}

export {MovieList}
