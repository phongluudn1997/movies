import * as React from 'react'
import {HiSearch} from 'react-icons/hi'
import {Icon} from '@chakra-ui/react'
import {useForm} from 'react-hook-form'

function SearchBar({onSubmit}) {
  const {register, handleSubmit} = useForm()
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative text-gray-400">
        <div className="absolute pl-2 flex items-center inset-y-0">
          <Icon as={HiSearch} />
        </div>
        <input
          name="actor"
          type="text"
          ref={register}
          className="pl-8 pr-2 py-1 rounded"
        />
      </div>
    </form>
  )
}

export {SearchBar}
