import * as React from 'react'
import {Flex, Spacer} from '@chakra-ui/react'
import {NavLinks} from './components/nav-links'
import {AuthenButtons} from './components/authen-buttons'
import logo from 'assets/logo.png'

function Nav() {
  return (
    <Flex justifyContent="center" alignItems="center">
      <img src={logo} alt="Logo" />
      <Spacer />
      <NavLinks />
      <Spacer />
      <AuthenButtons />
    </Flex>
  )
}

export {Nav}
