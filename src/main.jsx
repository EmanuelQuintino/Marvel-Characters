import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './pages/App'
import { QueryClientProvider, QueryClient} from "react-query"
import { ResetStyle } from './styles/reset'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}> 
      <App />
      <ResetStyle/>
    </QueryClientProvider>
  </React.StrictMode>,
)
