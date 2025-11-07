import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Loader from './components/Loader.jsx'
import Header from './components/Header.jsx'
import Cursor from './components/Cursor.jsx'
import Footer from './components/Footer.jsx'
import Testing from './components/Testing.jsx'
import BatteryIndicator from './components/BatteryIndicator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Loader/>
    <Cursor/>
    <BrowserRouter>
    <Header/>
    <Testing/>
    <App />
    <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
