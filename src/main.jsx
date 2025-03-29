import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import './App.css'
import Mainlayout from './Component/Mainlayout/Mainlayout.jsx'
import { RouterProvider } from 'react-router-dom'
import { Routs } from './Routs/Routs.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <StrictMode>
    <RouterProvider router={Routs}></RouterProvider>
  </StrictMode>
  </AuthProvider>,
)
