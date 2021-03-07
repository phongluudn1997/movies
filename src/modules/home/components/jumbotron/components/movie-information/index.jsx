import * as React from 'react'
import {Rating} from 'modules/common/components/rating'
import {HiPlay} from 'react-icons/hi'
import {Button} from '@chakra-ui/react'
function MovieInfo({data}) {
  console.log('Movie info', data)
  return (
    <div className="text-white flex flex-col gap-2 items-start">
      <span>{data.release_date}</span>
      <h1 className="uppercase font-bold text-2xl tracking-widest">
        {data.title}
      </h1>
      <p>{data.overview}</p>
      <Rating stars={5} reviews={data.vote_count} />
      <Button leftIcon={<HiPlay />} variant="link">
        Watch Trailer
      </Button>
      <Button colorScheme="red" size="sm">
        BOOK SHOW
      </Button>
    </div>
  )
}

export {MovieInfo}
