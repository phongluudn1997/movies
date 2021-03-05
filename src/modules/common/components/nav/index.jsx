import * as React from 'react'
import {Flex, Spacer} from '@chakra-ui/react'
import logo from 'assets/logo.png'
function Nav() {
  return (
    <Flex>
      <img src={logo} alt="Logo" />
      <Spacer />
      <Spacer />
    </Flex>
  )
}

export {Nav}
