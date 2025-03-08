import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Mainlayout from './Component/Mainlayout/Mainlayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Mainlayout></Mainlayout>
  </StrictMode>,
)
