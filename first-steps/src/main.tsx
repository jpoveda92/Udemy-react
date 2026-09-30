import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { FirstStepsApp } from './FirstStepsApp.tsx'
import { MyAwesomeApp } from './MyAwesomeApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
<FirstStepsApp/>

  </StrictMode>,
)
