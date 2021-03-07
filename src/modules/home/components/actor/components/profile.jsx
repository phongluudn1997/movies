import * as React from 'react'
import {useSelector} from 'react-redux'
import {Spinner} from 'modules/common/components/spinner'
import styles from './styles.module.scss'

function ActorProfile() {
  const actor = useSelector(state => state.actor.actor)

  if (!actor) {
    return <Spinner />
  }

  const imgSrc = 'https://image.tmdb.org/t/p/original/' + actor.profile_path

  return (
    <>
      <div className={styles['image']}>
        <img src={imgSrc} alt="" className="w-full h-auto rounded-lg" />
      </div>
      <div className={styles['detail']}>{actor.name}</div>
    </>
  )
}

export {ActorProfile}
