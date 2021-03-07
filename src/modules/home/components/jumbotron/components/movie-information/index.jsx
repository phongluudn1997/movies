import * as React from 'react'
import {Rating} from 'modules/common/components/rating'
import {HiPlay} from 'react-icons/hi'
import {Button} from '@chakra-ui/react'
function MovieInfo({data}) {
  console.log(data)
  return (
    <div className="text-white flex flex-col gap-2 items-start">
      <span>31 SEPT 2019</span>
      <h1>AVENGERS - INFINITY WAR</h1>
      <p>
        In 2016, Marvel shortened the title to Avengers: Infinity War. Filming
        began in January 2017 at Pinewood Atlanta Studios in Fayette County,
        Georgia, with a large cast consisting mostly of actors .
      </p>
      <Rating stars={5} reviews={12000} />
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
