import * as React from 'react'
import {Button} from '@chakra-ui/react'

function MovieCard({data}) {
  const imgSrc = 'https://image.tmdb.org/t/p/original/' + data.poster_path
  return (
    <div className="flex-1 text-white">
      <img src={imgSrc} alt="" className="w-full object-cover rounded-lg" />
      <h1 className="font-bold text-xl text-md my-2">{data.title}</h1>
      <p className="break-words mb-2 line-clamp-3">{data.overview}</p>
      <Button size="sm" colorScheme="red">
        DOWNLOAD
      </Button>
    </div>
  )
}

export {MovieCard}
