import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './app/App'
import './styles/index.css'

const container = document.getElementById('root')!
const app = <StrictMode><BrowserRouter basename={import.meta.env.BASE_URL}><App /></BrowserRouter></StrictMode>

// Production pages contain prerendered elements; Vite dev serves only the
// placeholder comment and therefore needs a normal client render.
if (container.children.length > 0) hydrateRoot(container, app)
else createRoot(container).render(app)
