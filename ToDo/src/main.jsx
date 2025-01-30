import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './componentCSS/index.css'
import App from './components/App.jsx'

createRoot(document.getElementById('root')).render(
    <>
        <App/>
    </>
    
)
