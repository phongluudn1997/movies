import {ChakraProvider} from '@chakra-ui/react'
import {ReactQueryProvider} from './react-query'
import {ReduxProvider} from './redux'

function AppProviders({children}) {
  return (
    <ReduxProvider>
      <ReactQueryProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </ReactQueryProvider>
    </ReduxProvider>
  )
}

export default AppProviders
