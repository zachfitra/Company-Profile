import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Homepage from './Pages/Homepage.jsx'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import 'remixicon/fonts/remixicon.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Homepage/>
    <Footer/>

  </StrictMode>,
)
