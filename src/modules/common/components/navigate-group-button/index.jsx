import * as React from 'react'
import {ButtonGroup, IconButton} from '@chakra-ui/react'
import {HiOutlineChevronLeft, HiOutlineChevronRight} from 'react-icons/hi'

function NavigateGroupButtons() {
  return (
    <ButtonGroup size="sm">
      <IconButton icon={<HiOutlineChevronLeft />} />
      <IconButton icon={<HiOutlineChevronRight />} />
    </ButtonGroup>
  )
}

export {NavigateGroupButtons}
