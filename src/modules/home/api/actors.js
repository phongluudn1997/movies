import {client} from 'client'
import {useQuery} from 'react-query'

function usePopularActors() {
  return useQuery(['actors', 'trending'], () =>
    client(`person/popular`).then(res => res.results),
  )
}

export {usePopularActors}
