import {client} from 'client'
import {useQuery} from 'react-query'

function usePopularActors() {
  return useQuery(['actors', 'trending'], () =>
    client(`person/popular`).then(res => res.results),
  )
}

function useActors(search) {
  return useQuery(['actors', search], () => {
    if (search) {
      return client(`search/person`, {
        params: {
          query: search,
        },
      }).then(res => res.results)
    } else {
      return client(`person/popular`).then(res => res.results)
    }
  })
}

export {usePopularActors, useActors}
