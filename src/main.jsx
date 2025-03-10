import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import './App.css'
import Mainlayout from './Component/Mainlayout/Mainlayout.jsx'
import { RouterProvider } from 'react-router-dom'
import { Routs } from './Routs/Routs.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Routs}></RouterProvider>
  </StrictMode>,
)
