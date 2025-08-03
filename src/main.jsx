import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import 'remixicon/fonts/remixicon.css'
import Hompage from './Pages/Hompage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Hompage />
    {/* <Footer/> */}

  </StrictMode>,
)
