import { ChakraProvider } from "@chakra-ui/react"
import {ReactQueryProvider} from "./react-query"

function AppProviders({children}) {
    return <ReactQueryProvider>
        <ChakraProvider>
            {children}
        </ChakraProvider>
    </ReactQueryProvider>
}

export default AppProviders