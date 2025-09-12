import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Loader from './components/Loader.jsx'
import Header from './components/Header.jsx'
import Cursor from './components/Cursor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Loader/>
    <Cursor/>
    <BrowserRouter>
    <Header/>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
