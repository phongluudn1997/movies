import {client} from 'client'
import {useQuery} from 'react-query'

function usePopulardMovies() {
  return useQuery(['movies', 'popular'], () =>
    client(`movie/popular`).then(res => res.results.slice(0, 5)),
  )
}

function useMovie(id) {
  return useQuery(['movies', id], () => client(`find/${id}`))
}

export {usePopulardMovies, useMovie}
