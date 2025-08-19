import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Chacao from './chacao.jsx'
import Tongxin from './tongxin.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Chacao />
    <Tongxin />
  </StrictMode>
)
