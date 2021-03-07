import * as React from 'react'
import {ActorProfile} from './components/profile'
import {ActorMovies} from './components/actor-movies'
import styles from './styles.module.scss'

function Actor() {
  return (
    <div className={styles['container']}>
      <ActorProfile />
      <ActorMovies />
    </div>
  )
}

export {Actor}
