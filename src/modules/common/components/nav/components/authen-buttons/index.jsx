import * as React from 'react'
import {ButtonGroup, Button} from '@chakra-ui/react'

function AuthenButtons() {
  return (
    <ButtonGroup spacing="6">
      <Button variant="ghost" color="white">
        LOG IN
      </Button>
      <Button colorScheme="red">SIGN UP</Button>
    </ButtonGroup>
  )
}

export {AuthenButtons}
