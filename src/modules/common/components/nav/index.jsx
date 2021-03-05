import * as React from 'react'
import {Flex, Spacer} from '@chakra-ui/react'
import logo from 'assets/logo.png'
import styles from './styles.module.scss'
function Nav() {
  return (
    <Flex>
      <img src={logo} alt="Logo" />
      <Spacer />
      <ul className={styles['list']}>
        <li>Home</li>
        <li>About</li>
      </ul>
      <Spacer />
    </Flex>
  )
}

export {Nav}
