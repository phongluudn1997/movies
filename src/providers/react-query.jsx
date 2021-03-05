import {QueryClientProvider, QueryClient} from "react-query"
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()
function ReactQueryProvider({children}) {
    return <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
}

export {ReactQueryProvider}