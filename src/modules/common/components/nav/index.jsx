import * as React from 'react'
import {Flex, Spacer} from '@chakra-ui/react'
import {NavLinks} from './components/nav-links'
import {AuthenButtons} from './components/authen-buttons'
import logo from 'assets/logo.png'

function Nav() {
  return (
    <div className="px-10 pt-10 pb-20">
      <Flex justifyContent="center" alignItems="center">
        <img src={logo} alt="Logo" />
        <Spacer />
        <NavLinks />
        <Spacer />
        <AuthenButtons />
      </Flex>
    </div>
  )
}

export {Nav}
